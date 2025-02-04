$(function(){
  $(".open_btn").on("click",function(){
    $(".open_btn").not(this).removeClass("active");
    $(this).toggleClass("active");
  });
});

var tuto_close = new EzenAddClass("#tuto_close",{
  class:"tutoActive",
});

var menu_btn = new EzenAddClass(".menu_btn",{
  class:"showActive",
  afterFun:function(){
    var allactive = document.querySelectorAll(".active");
    allactive.forEach(function(x){
      x.classList.remove("active");
    });
  }
});

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

if (matchMedia("screen and (max-width: 768px)").matches) {
  
};