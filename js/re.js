
// 버튼 클릭 시, 버튼이 클릭되는 event (depth_01)
document.addEventListener('DOMContentLoaded', function() {
  const customBtns = document.querySelectorAll('.card-btn');

  customBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // 기존의 checked 클래스를 가진 버튼에서 checked 클래스를 제거
      customBtns.forEach(b => b.classList.remove('checked'));
      
      // 클릭된 버튼에 checked 클래스 추가
      this.classList.add('checked');
    });
  });
});
  /* 🌊흐름 
    표준 이벤트 모델 제작('문서가 로드되면', 함수선언(){
      customBtns 변수 선언 = .card-btn 요소 모두 선택 <NodeList>

      customBtns.순서대로 반복(모든 버튼에 대해<= function(btn)> => {
        btn에 표준 이벤트 모델 제작('클릭 이벤트 부여', 함수 선언(){
          customBtns.순서대로 반복(모든 버튼에 대해<= function(b)> => {
            b에.class.제거('클래스명 .checked');
          });
          this<= 클릭된 버튼>에.class 부여.add 방식('클래스명 .checked');
        });
      });
    });
  */

// 버튼 클릭 시, 버튼이 클릭되는 event (depth_02)
document.addEventListener('DOMContentLoaded', function() {
  const customBtns = document.querySelectorAll('.custom-btn');

  customBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const checkedBtns = document.querySelectorAll('.custom-btn.checked');

      if (this.classList.contains('checked')) {
        // 이미 체크된 버튼을 클릭하면 체크 해제
        this.classList.remove('checked');
      } else if (checkedBtns.length < 4) {
        // 체크된 버튼이 4개 미만일 때만 체크 추가
        this.classList.add('checked');
      } else {
        // 체크된 버튼이 4개 이상일 때 경고 메시지 표시
        alert('4개까지만 선택 가능합니다.');
      }
    });
  });
});
  /* 🌊흐름 
    표준 이벤트 모델 제작('문서가 로드되면', 함수 선언(){
      customBtns 변수 선언 = .custom-btn 요소 모두 선택 <NodeList>

      customBtns.순서대로 반복(모든 버튼에 대해<= function(btn)> => {
        btn에 표준 이벤트 모델 제작('클릭 이벤트 부여', 함수선언(){
          checkedBtns 변수 선언 = .custom-btn.checked 요소 모두 선택 <NotoList>

          만약 (이 버튼<= 클릭된 버튼>에. class 부여되어있다. 자식에('클래스명 checked')){
            이 버튼<= 클릭된 버튼>에. class를. 제거('클래스명 checked');
          } 아니라면 만약 (checkedBtns.length<= 체크된 버튼의 개수> < 4){
            이 버튼<= 클릭된 버튼>에. class를. 추가가('클래스명 checked');
          } 아니라면 {
            경고창에 메시지 출력('4개까지만 선택 가능합니다.'); 
          }
        });
      });
    });
  */
  // contains = 특정 요소가 해당 요소의 자식인지 여부를 확인함 (자기 자신도 포함)
  // length = 배열 객체에 포함된 요소의 갯수 (ArryList와 NodeList에서 사용 가능)