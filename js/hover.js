// Seguir Heart

const hearts = document.querySelectorAll(".seguirHeart img");

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.src = "media/icon/HeartFull.svg";
  });
});
