function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  const menuItem = document.querySelectorAll(".menu__item-link");

  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active-burger");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    });
  });

  // Вот тут мы ставим брейкпойнт навбара
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
}
burgerMenu();

// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector("nav");

  //тут указываем в пикселях, сколько нужно проскроллить чтобы наше меню стало фиксированным
  const breakpoint = 1;
  if (window.scrollY > breakpoint) {
    nav.classList.add("fixed__nav");
  } else {
    nav.classList.remove("fixed__nav");
  }
}
window.addEventListener("scroll", fixedNav);

const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  /*modules: [Navigation, Pagination],*/
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //  Autoplay
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
