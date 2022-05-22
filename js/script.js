const carouselImage = document.querySelector(".carousel img");
const carouselTitle = document.querySelector(".carousel__description h2");
const carouselDescription = document.querySelector(".carousel__description p");
const nav = document.querySelector(".header__nav");
const navLiItems = document.querySelectorAll(".header__nav ul li");
const activeBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".fa-times");
const burgerButton = document.querySelector(".header__burger");
const gallerySwiper = document.querySelector(".swiper-wrapper");

let activeElement = 0;
const timeChange = 5000;

const carousel = () => {
  activeElement++;
  if (activeElement == CAROUSEL.length) {
    activeElement = 0;
  }
  carouselImage.setAttribute("src", CAROUSEL[activeElement].img);
  carouselTitle.textContent = CAROUSEL[activeElement].title;
  carouselDescription.textContent = CAROUSEL[activeElement].description;
};

setInterval(carousel, timeChange);
carousel();

const showMobileMenu = () => {
  nav.classList.remove("hide-mobile-nav");
  nav.classList.add("show-mobile-nav");
  burgerButton.style.position = "fixed";
};

const hideMobileMenu = () => {
  nav.classList.remove("show-mobile-nav");
  nav.classList.add("hide-mobile-nav");
  closeBtn.classList.add("hide");
  activeBtn.classList.remove("hide");
  burgerButton.style.position = "absolute";
};

const burgerMenu = () => {
  nav.classList.toggle("active");
  burgerButton.classList.toggle("active");
  closeBtn.classList.toggle("hide");
  activeBtn.classList.toggle("hide");

  if (nav.classList.contains("active")) {
    showMobileMenu();
  } else {
    hideMobileMenu();
  }
};

const listItems = GALLERY.map(function (item) {
  return `<div class="swiper-slide"><img src="${item.img}" alt="${item.alt}"</a></div>`;
}).join("");

gallerySwiper.innerHTML = listItems;

navLiItems.forEach((item) => item.addEventListener("click", hideMobileMenu));
burgerButton.addEventListener("click", burgerMenu);
