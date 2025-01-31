
var ott = new EzenAddClass(".pc");
var delievery = new EzenAddClass(".delievery");
var movie = new EzenAddClass(".movie");
var shopping = new EzenAddClass(".bag");
var car = new EzenAddClass(".car");
var ticket = new EzenAddClass(".trip");
var tuto_close = new EzenAddClass("#tuto_close");
var tuto_close = new EzenAddClass(".menu_btn");

var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});