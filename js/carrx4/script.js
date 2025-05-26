// Log In
let filtre = document.getElementsByClassName("filtreModal")[0];

function showLogIn() {
  document.querySelector(".login").style.display = "flex";
  filtre.style.display = "block";
}
function showRegsiter() {
  document.querySelector(".register").style.display = "flex";
  filtre.style.display = "block";
}
  function closeModal() {
    document.querySelector(".register").style.display = "none";
    document.querySelector(".login").style.display = "none";
    filtre.style.display = "none";
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










function initCarouselX4(carouselRoot) {
  const slidesx4 = carouselRoot.getElementsByClassName("carouselSlidex4");
  const nextx4 = carouselRoot.getElementsByClassName("nextx4")[0];
  const prevx4 = carouselRoot.getElementsByClassName("prevx4")[0];
  const indicatorsx4 = carouselRoot.querySelectorAll(".carouselIndicatorsx4 img");

  let currentIndexx4 = 0;

  function updateIndicators() {
    indicatorsx4.forEach((indicatorx4, i) => {
      indicatorx4.src = i === currentIndexx4 ? "media/icon/DotAccent.svg" : "media/icon/DotWhite.svg";
    });
  }

  function showSlide(index) {
    for (let i = 0; i < slidesx4.length; i++) {
      slidesx4[i].classList.remove("carouselSlideSelectedx4");
    }
    slidesx4[index].classList.add("carouselSlideSelectedx4");
    updateIndicators();
  }

  nextx4.addEventListener("click", () => {
    currentIndexx4 = (currentIndexx4 + 1) % slidesx4.length;
    showSlide(currentIndexx4);
  });

  prevx4.addEventListener("click", () => {
    currentIndexx4 = (currentIndexx4 - 1 + slidesx4.length) % slidesx4.length;
    showSlide(currentIndexx4);
  });

  // Inicialització
  showSlide(currentIndexx4);
}

document.querySelectorAll(".carousel").forEach(c => {
  if (c.querySelector(".carouselSlidex4")) {
    initCarouselX4(c);
  }
});





function banda() {
  setTimeout(() => {
    document.querySelector(".banda").style.padding = "85px 0px 30px 0px";
  }, 1000);
  setTimeout(() => {
    document.querySelector(".banda").style.padding = "0px 0px 0px 0px";
  }, 7000);
}

window.addEventListener('load', banda);