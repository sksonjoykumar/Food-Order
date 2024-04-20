var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Change img src
const allImg = document.querySelectorAll("img");
const mainImg = document.getElementById("main-img");

allImg.forEach(function (sc) {
  sc.addEventListener("click", function () {
    mainImg.src = sc.src;
  });
});
