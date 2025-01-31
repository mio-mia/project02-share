document.addEventListener("DOMContentLoaded", function() {
  fetch('../html/footer.html')
    .then(response => {
      if (!response.ok) {
      throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('footer-container').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
});

/*
  🌊흐름
  표준 이벤트 모델 제작('문서의 컨텐츠가 로딩 완료되면', 함수호출(){
    파일요청('../html/footer.html')
      .승인<= then>(기존 데이터 형식 => 텍스트 데이터 형식으로 변환())
      .승인<= then>(데이터 => {문서에서.id추적('footer-container').요소의 html 콘텐츠 = 데이터})
      .거부<= catch>(에러 => 콘솔에 에러 출력('Error loading footer:', 에러));
  });
*/


/*
   fetch
   - 웹에서 서버로부터 데이터를 가져오는데 사용되는 메소드(다른 서버에 파일을 요청하고 응답을 받아올 수 있게함)
   - 대표적인 비동기 메소드
    * 비동기 메소드
      = 어떤 작업에 대한 요청을 보낸 후, 그 요청에 대한 작업이 완료될 때까지 기다리지 않고
        다른 작업을 수행하는 것이 가능한 메소드
      (즉, 콜백이 완료되지 않아도 기존 프로그램이 멈추지 않고 실행함)
   - fetch 메소드는 요청에 대한 값으로 Promise 객체를 반환함

   * Promise 객체
   - 비동기 객체의 처리를 위해 사용되는 객체
   - 3가지 상태를 가지는데
      1) pending(대기) : 연산 진행 중. 완료되지 않음.
      2) fulfilled(이행) : 연산이 성공적으로 완료된 상태
      3) rejected(거부) : 연산이 실패한 상태

   * fetch 메소드의 반환 객체
   1) then = 성공값을 처리하는 객체.
   2) catch = 실패값을 처리하는 객체.
*/

/* 예시
  fetch('https://example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

  1. fetch('NNN.com') = 괄호 안의 서버의 데이터를 요청
  2. .then(response => response.json()) = 1번에서 받아온 데이터를 json 형식으로 변환
  3. .then(data => console.log(data)) = 2번에서 변환한 데이터를 콘솔에 출력
  4. .catch(error => console.error('Error:', error)); = 에러가 발생하면 콘솔에 에러 출력
*/

