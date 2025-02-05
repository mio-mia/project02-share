$(function(){
  $(".open_btn").on("click",function(){
    $(".open_btn").not(this).removeClass("active");
    $(this).toggleClass("active");
  });
});
// 6개의 점들에게 모두 open_btn 이라는 클래스가 부여된 상태에서
// 이것을 클릭할 시 나 자신 이외의 모든 것들은 active 클래스가 부여되는 것을 지우고
// 나 자신에게만 active 클래스가 토글 형태로 부여되게 함

var tuto_close = new EzenAddClass("#tuto_close",{
  class:"tutoActive",
});
// 튜토리얼 창에 별도로 클래스를 부여하는 플러그인 사용
// 다른 6개의 점들과는 독립되게 동작하기 위해서 클래스 명을 다르게 지정함

var menu_btn = new EzenAddClass(".menu_btn",{
  class:"showActive",
  afterFun:function(){
    var allactive = document.querySelectorAll(".active");
    allactive.forEach(function(x){
      x.classList.remove("active");
    });
  }
});
// 화면 우측 카메라 버튼으로 동작하는 전체메뉴 버튼
// 이것 역시 다른 것들과는 독립되게 동작하기 위해서 클래스 명을 다르게 지정했고
// 마찬가지로 클릭 시 나 자신에게만 active 클래스가 부여되고
// 다른 것들에게서는 클래스 부여 상태를 취소함

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
// swiper 홈페에지에서 나오는 기본 설정들을 대부분 그대로 가져옴