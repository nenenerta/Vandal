// Overlays
let filtre = document.getElementsByClassName("filtreModal")[0];

function showLogIn() {
  document.querySelector(".login").style.display = "flex";
  filtre.style.display = "block";
}
function showRegsiter() {
  document.querySelector(".register").style.display = "flex";
  filtre.style.display = "block";
}
function ShowValorar() {
  document.querySelector(".OverlayValorar").style.display = "Block";
  filtre.style.display = "block";
}
  function closeModal() {
    filtre.style.display = "none";
    document.querySelector(".register").style.display = "none";
    document.querySelector(".login").style.display = "none";
    document.querySelector(".OverlayValorar").style.display = "none";
    document.querySelector('.OverlayImatges').style.display = 'none';
  }
function changeRegister() {
    document.querySelector(".login").style.display = "none";
    document.querySelector(".register").style.display = "flex";
}
function changeLogIn() {
  document.querySelector(".login").style.display = "flex";
  document.querySelector(".register").style.display = "none";
}
  
  
// Carrusel Portada
const slides = document.getElementsByClassName("carouselSlide");
const next = document.getElementsByClassName("next")[0];
const prev = document.getElementsByClassName("prev")[0];
const indicators = document.querySelectorAll(".carouselIndicators img");

let currentIndex = 0;
let touchStartX = 0;
let touchEndX = 0;
let isAutoplayActive = true;
let autoplayInterval;

// Funció: Canviar al següent slide
function NextCarrHome() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  updateSlide();
}

// Funció: Canviar al slide anterior
function PrevCarrHome() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  updateSlide();
}

// Funció: Actualitza els indicadors i visibilitat del slide
function updateSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("carouselSlideSelected");
  }
  slides[currentIndex].classList.add("carouselSlideSelected");
  updateIndicators();
}

// Funció: Actualitza els indicadors visuals (punts)
function updateIndicators() {
  if (indicators.length > 0) {
    for (let i = 0; i < indicators.length; i++) {
      indicators[i].src = (i === currentIndex)
        ? "media/icon/DotAccent.svg"
        : "media/icon/DotWhite.svg";
    }
  }
}

// Funció: autoplay (reproducció automàtica)
function startAutoplay() {
  if (autoplayInterval) clearInterval(autoplayInterval);
  
  autoplayInterval = setInterval(() => {
    if (isAutoplayActive) {
      NextCarrHome();
    }
  }, 8000);
}

// Pausa temporalment l'autoplay quan l'usuari interactua
function pauseAutoplay() {
  isAutoplayActive = false;
  setTimeout(() => {
    isAutoplayActive = true;
  }, 10000); // Resum després de 10 segons
}

// Suport tàctil millorat
function enableTouchSwipe() {
  // Prova diferents selectors possibles
  const carouselContainer = document.querySelector(".carouselContainer") 
    || document.querySelector(".carousel") 
    || document.querySelector("[class*='carousel']")
    || document.body; // Fallback al body si no troba el contenidor
  
  if (!carouselContainer) {
    console.warn("No s'ha trobat el contenidor del carrusel");
    return;
  }
  
  console.log("Touch habilicat per:", carouselContainer);
  
  // Prevenir el scroll horitzontal durant el swipe
  carouselContainer.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].clientX;
    pauseAutoplay();
  }, { passive: true });
  
  carouselContainer.addEventListener("touchmove", (e) => {
    // Opcional: prevenir scroll si es detecta moviment horitzontal
    const touchCurrentX = e.changedTouches[0].clientX;
    const diffX = Math.abs(touchCurrentX - touchStartX);
    const diffY = Math.abs(e.changedTouches[0].clientY - e.changedTouches[0].clientY);
    
    if (diffX > diffY && diffX > 10) {
      e.preventDefault(); // Prevenir scroll vertical
    }
  }, { passive: false });
  
  carouselContainer.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
  }, { passive: true });
}

function handleSwipe() {
  const minSwipeDistance = 30; // Reduït per fer-ho més sensible
  const swipeDistance = touchEndX - touchStartX;
  
  console.log("Swipe detectat:", swipeDistance);
  
  if (Math.abs(swipeDistance) >= minSwipeDistance) {
    if (swipeDistance < 0) {
      NextCarrHome(); // Swipe esquerra → següent
      console.log("Swipe esquerra - Següent");
    } else {
      PrevCarrHome(); // Swipe dreta → anterior  
      console.log("Swipe dreta - Anterior");
    }
  }
}

// Event listeners per botons
if (next) {
  next.addEventListener("click", () => {
    NextCarrHome();
    pauseAutoplay();
  });
}

if (prev) {
  prev.addEventListener("click", () => {
    PrevCarrHome();
    pauseAutoplay();
  });
}

// Inicialització
function initCarousel() {
  if (slides.length === 0) {
    console.warn("No s'han trobat slides del carrusel");
    return;
  }
  
  updateSlide(); // Inicialitza el primer slide
  startAutoplay();
  
  // Habilita touch sempre, no només en mòbil
  enableTouchSwipe();
  
  // També pots habilitar només en mòbil si prefereixes:
  // if (window.innerWidth <= 991) {
  //   enableTouchSwipe();
  // }
}

// Inicialitza quan el DOM estigui carregat
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCarousel);
} else {
  initCarousel();
}

// També escolta l'event load per si de cas
window.addEventListener("load", () => {
  if (slides.length > 0 && !autoplayInterval) {
    initCarousel();
  }
});




document.querySelectorAll(".carouselx4").forEach(carousel => {
  const slidesx4 = carousel.getElementsByClassName("carouselSlidex4");
  const nextx4 = carousel.getElementsByClassName("nextx4")[0];
  const prevx4 = carousel.getElementsByClassName("prevx4")[0];
  const indicatorsx4 = carousel.querySelectorAll(".carouselIndicatorsx4 img");

  let currentIndexx4 = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  function updateIndicators() {
    for (let i = 0; i < indicatorsx4.length; i++) {
      if (i === currentIndexx4) {
        indicatorsx4[i].src = "media/icon/DotAccent.svg";
      } else {
        indicatorsx4[i].src = "media/icon/DotWhite.svg";
      }
    }
  }

  function updateSlide() {
    for (let i = 0; i < slidesx4.length; i++) {
      slidesx4[i].classList.remove("carouselSlideSelectedx4");
    }
    slidesx4[currentIndexx4].classList.add("carouselSlideSelectedx4");
    updateIndicators();
  }

  function NextCarrx4() {
    currentIndexx4++;
    if (currentIndexx4 >= slidesx4.length) {
      currentIndexx4 = 0;
    }
    updateSlide();
  }

  function PrevCarrx4() {
    currentIndexx4--;
    if (currentIndexx4 < 0) {
      currentIndexx4 = slidesx4.length - 1;
    }
    updateSlide();
  }

  // Gestió del swipe tàctil
  function handleSwipe() {
    const minSwipeDistance = 30;
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) >= minSwipeDistance) {
      if (swipeDistance < 0) {
        NextCarrx4(); // Swipe esquerra → següent
      } else {
        PrevCarrx4(); // Swipe dreta → anterior
      }
    }
  }

  // Suport tàctil
  function enableTouchSwipe() {
    carousel.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });

    carousel.addEventListener("touchmove", (e) => {
      const touchCurrentX = e.changedTouches[0].clientX;
      const touchCurrentY = e.changedTouches[0].clientY;
      const touchStartY = e.changedTouches[0].clientY;
      
      const diffX = Math.abs(touchCurrentX - touchStartX);
      const diffY = Math.abs(touchCurrentY - touchStartY);
      
      // Prevenir scroll si el moviment és majoritàriament horitzontal
      if (diffX > diffY && diffX > 10) {
        e.preventDefault();
      }
    }, { passive: false });

    carousel.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].clientX;
      handleSwipe();
    }, { passive: true });
  }

  // Event listeners per botons
  if (nextx4) {
    nextx4.addEventListener("click", NextCarrx4);
  }

  if (prevx4) {
    prevx4.addEventListener("click", PrevCarrx4);
  }

  // Event listeners per indicadors
  indicatorsx4.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentIndexx4 = index;
      updateSlide();
    });
  });

  // Inicialitzar el carrusel
  if (slidesx4.length > 0) {
    updateSlide();
    enableTouchSwipe();
  }
});


function banda() {
  setTimeout(() => {
    document.querySelector(".bandaInteractiva").style.padding = "85px 0px 30px 0px";
  }, 1000);
  setTimeout(() => {
    document.querySelector(".bandaInteractiva").style.padding = "0px 0px 0px 0px";
  }, 22000);
}

window.addEventListener('load', banda);



// Seguir Heart

const hearts = document.querySelectorAll(".seguirHeart img");

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    //el src mai serà exactament igual així que no es pot utilitzar per a comparar, s'usa includes
    if (heart.src.includes("HeartEmpty.svg")) {
      heart.src = "media/icon/HeartFull.svg";
    } else {
      heart.src = "media/icon/HeartEmpty.svg";
    }
  });
});







document.addEventListener("DOMContentLoaded", function () {
  const botoFiltres = document.querySelectorAll(".filtresJocP .textboto");
  const filtres = document.querySelectorAll(".capsulaVideojocTXTP .Filtre");

  botoFiltres.forEach(boto => {
    boto.addEventListener("click", function (e) {
      e.preventDefault();

      const index = this.getAttribute("data-filtre");

      // Posa flex al que toca i none a la resta
      filtres.forEach((filtre, i) => {
        filtre.style.display = i == index ? "flex" : "none";
      });

      botoFiltres.forEach(b => {
        b.classList.remove("accent");
        b.classList.add("white");
      });

      this.classList.remove("white");
      this.classList.add("accent");
    });
  });

  // Mostrar el primer filtre per defecte i marcar el primer botó
  filtres.forEach((filtre, i) => {
    filtre.style.display = i === 0 ? "flex" : "none";
  });

  if (botoFiltres.length > 0) {
    botoFiltres.forEach(b => b.classList.remove("accent"));
    botoFiltres.forEach(b => b.classList.add("white"));
    botoFiltres[0].classList.remove("white");
    botoFiltres[0].classList.add("accent");
  }
});

  // Accordio
  let titols = document.getElementsByClassName("titolAccJocP");

  function AccJocP() {
    for (let i = 0; i < titols.length; i++) {
      titols[i].addEventListener("click", unfolFoldAcc);
    }
  }
  
  function unfolFoldAcc(event) {
    let current = event.currentTarget;
    let allContents = document.querySelectorAll(".HeightAccJocP");
    let allTitles = document.querySelectorAll(".titolAccJocP");
  
    // Tanquem totes les seccions excepte la clicada
    for (let i = 0; i < allContents.length; i++) {
      if (allContents[i] !== current.nextElementSibling) {
        allContents[i].classList.add("accHeight");
        allTitles[i].classList.remove("accTit");

        let img = allTitles[i].querySelector("img");
        if (img) img.src = "media/icon/Plus.svg";
      }
    }
  
    // Alterna la secció clicada
    let content = current.nextElementSibling;
    content.classList.toggle("accHeight");
    current.classList.toggle("accTit");
  
    // Canviem la icona segons estat obert/tancat
    let icon = current.querySelector("img");
    if (icon) {
      if (content.classList.contains("accHeight")) {
        icon.src = "media/icon/Plus.svg";
      } else {
        icon.src = "media/icon/Remove.svg";
      }
    }
  }
  
  AccJocP();
  
//menuContingutJoc
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menuContingutJoc p");
    const sections = document.querySelectorAll(".contingutPaginaJoc");

    // Mostrar només la primera secció per defecte
    sections.forEach((section, i) => {
        section.style.display = i === 0 ? "block" : "none";
    });

    menuItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            // Canviar classes actives al menú
            menuItems.forEach(el => {
                el.classList.remove("accent");
                el.classList.add("white2");
            });
            item.classList.add("accent");
            item.classList.remove("white2");

            // Mostrar només la secció que toca
            sections.forEach((section, i) => {
                section.style.display = i === index ? "block" : "none";
            });
        });
    });
});



// Menu Responsive

document.addEventListener('DOMContentLoaded', () => {
  const menuHamburg = document.querySelector('.menuHamburg');
  const ulPrincipal = document.querySelector('.ulPrincipalResponsive');
  const articulosMenu = document.querySelector('.menuArticulosResponsive');
  const juegosMenu = document.querySelector('.menuJuegosResponsive');

  let menuOpen = false;

  // Obrir i tancar menú principal
  menuHamburg.addEventListener('click', () => {
      if (!menuOpen) {
          ulPrincipal.style.transform = 'translateX(0)';
          menuOpen = true;
      } else {
          ulPrincipal.style.transform = 'translateX(-200%)';
          articulosMenu.classList.remove('visible');
          juegosMenu.classList.remove('visible');
          menuOpen = false;
      }
  });

});

  const articulosMenu = document.querySelector('.menuArticulosResponsive');
   const juegosMenu = document.querySelector('.menuJuegosResponsive');

function OpenArticle() {
  articulosMenu.classList.toggle('visible');
  juegosMenu.classList.remove('visible');
}
function OpenJocs() {
  juegosMenu.classList.toggle('visible');
  articulosMenu.classList.remove('visible');
}



// Quines somos, botó ver más
function toggleRedactors() {
  const redactors = document.querySelectorAll('.Redactor.hide, .galImg > .hide');
  const showButton = document.getElementById('showMore');
  const hideButton = document.getElementById('hideMore');

  const areHidden = redactors[0].style.display === 'none';

  if (areHidden) {
      redactors.forEach(redactor => {
          redactor.style.display = 'block';
      });
      showButton.style.display = 'none';
      hideButton.style.display = 'inline-block';
  } else {
      redactors.forEach(redactor => {
          redactor.style.display = 'none';
      });
      showButton.style.display = 'inline-block';
      hideButton.style.display = 'none';
  }
}


// Max lenght

function myFunction(x, y) {
  if (y.length == x.maxLength) {
    var next = x.tabIndex;
    if (next < document.getElementById("myForm").length) {
      document.getElementById("myForm").elements[next].focus();
    }
  }
}


//Overlay Imatges

window.onload = function () {
  const galleryImagesOverlay = Array.from(document.querySelectorAll('.galImg img')).map(img => img.src);
  let currentImageIndexOverlay = 0;

  function openImageOverlay(index) {
    currentImageIndexOverlay = index;
    document.querySelector('.OverlayImatges').style.display = 'block';
    updateImageOverlay();
    filtre.style.display = "block";
  }

  function closeOverlay() {
    document.querySelector('.OverlayImatges').style.display = 'none';
    filtre.style.display = "none";
  }

  function updateImageOverlay() {
    const overlayImg = document.getElementById('imageOverlay');
    overlayImg.src = galleryImagesOverlay[currentImageIndexOverlay];
  }

  function nextImageOverlay() {
    currentImageIndexOverlay = (currentImageIndexOverlay + 1) % galleryImagesOverlay.length;
    updateImageOverlay();
  }

  function prevImageOverlay() {
    currentImageIndexOverlay = (currentImageIndexOverlay - 1 + galleryImagesOverlay.length) % galleryImagesOverlay.length;
    updateImageOverlay();
  }

  document.querySelectorAll('.galImg img').forEach((img, index) => {
    img.addEventListener('click', () => openImageOverlay(index));
  });

  window.nextImageOverlay = nextImageOverlay;
  window.prevImageOverlay = prevImageOverlay;
  window.closeOverlay = closeOverlay;
}


//Pròims llançaments
  const scrollContainer = document.querySelector('.TrackProxim');

  scrollContainer.addEventListener('wheel', function (e) {
    e.preventDefault(); // Evita el desplaçament vertical per defecte
    scrollContainer.scrollLeft += e.deltaY; // Mou horitzontalment segons el moviment vertical
  });


  //Comentaris
function toggleComments() {
  const content = document.getElementsByClassName("contentComent");

  for (let i = 0; i < content.length; i++) {
    // Toggle between 'none' and 'block'
    if (content[i].style.display === "none") {
      content[i].style.display = "block";
    } else {
      content[i].style.display = "none";
    }
  }
}

//Comentaris
function toggleComments(event) {
  const comment = event.target.closest('.capsaComent').querySelector('.contentComent');
  const tancarComent = event.target.closest('.capsaComent').querySelector('.tancarComent');
  
  // Afegir o treure la classe que amaga el comentari
  comment.classList.toggle('contentComentHide');

  // Canviar la imatge de l'icona
  if (comment.classList.contains('contentComentHide')) {
    tancarComent.src = 'media/icon/Plus.svg'; // Quan està ocult, posa la icona de "Plus"
  } else {
    tancarComent.src = 'media/icon/Remove.svg'; // Quan es mostra, torna la icona de "Remove"
  }
}
