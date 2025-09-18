
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle');
navToggle?.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
});
function imgGallery() {
    const mainImg = document.querySelector('.details__img'),
          smallImgs = document.querySelectorAll('.details__small-img');

    smallImgs.forEach((img) => {
        img.addEventListener('click', function() {
            mainImg.src = this.src;
        });
    });
}
var swiperCategories = new Swiper(".categories__container", {
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        350: { slidesPerView: 2, spaceBetween: 24 },
        768: { slidesPerView: 3, spaceBetween: 24 },
        992: { slidesPerView: 4, spaceBetween: 24 },
        1200: { slidesPerView: 5, spaceBetween: 24 },
        1400: { slidesPerView: 6, spaceBetween: 24 },
    },
});
var swiperProducts = new Swiper(".new__container", {
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: { slidesPerView: 2, spaceBetween: 24 },
        992: { slidesPerView: 3, spaceBetween: 24 },
        1400: { slidesPerView: 4, spaceBetween: 24 },
    },
});
const tabs = document.querySelectorAll("[data-target]"),
      tabContents = document.querySelectorAll(".tab__item");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach(content => {
            content.classList.remove("active-tab");
        });
        target.classList.add("active-tab");
        tabs.forEach(t => t.classList.remove("active-tab"));
        tab.classList.add("active-tab");
    });
});
imgGallery();
