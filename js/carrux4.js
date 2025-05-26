
// function initCarouselx4(wrapper) {
//     const slides = wrapper.getElementsByClassName("carouselSlidex4");
//     const nextBtn = wrapper.getElementsByClassName("nextx4")[0];
//     const prevBtn = wrapper.getElementsByClassName("prevx4")[0];
//     const indicators = wrapper.querySelectorAll(".carouselIndicatorsx4 img");
  
//     let currentIndex = 0;
  
//     function updateSlides() {
//       for (let i = 0; i < slides.length; i++) {
//         slides[i].classList.remove("carouselSlideSelectedx4");
//       }
//       slides[currentIndex].classList.add("carouselSlideSelectedx4");
//       updateIndicators();
//     }
  
//     function updateIndicators() {
//       for (let i = 0; i < indicators.length; i++) {
//         indicators[i].src = i === currentIndex ? "media/icon/DotAccent.svg" : "media/icon/DotWhite.svg";
//       }
//     }
  
//     nextBtn.addEventListener("click", () => {
//       currentIndex = (currentIndex + 1) % slides.length;
//       updateSlides();
//     });
  
//     prevBtn.addEventListener("click", () => {
//       currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//       updateSlides();
//     });
  
//     updateSlides(); // Inicia amb el primer seleccionat
//   }
  
//   document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll('.carouselx4-comptador').forEach(initCarouselx4);
//   });
  