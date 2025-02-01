
document.addEventListener("DOMContentLoaded", function() {
	fetch('../html/header.html')
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.text();}) // end of then
		.then(data => {
			document.getElementById('header-container').innerHTML = data;
	/*  🌊흐름
			표준 이벤트 모델 제작('문서의 컨텐츠가 로딩 완료되면', 함수호출(){
				파일요청('../html/header.html')
					.승인<= then>(기존 데이터 형식 => 만약 (아니다 데이터형식출력.ok){
						에러 출력('Network response was not ok');
						}
						텍스트 데이터 형식으로 변환();
					})
					.승인<= then>(데이터 => {문서에서.id추적('header-container').요소의 html 콘텐츠 = 데이터})
	*/
		
		// HTML이 DOM에 추가된 후에 이벤트 리스너 설정

		/* gnb 클릭 시, sub가 나오는 event class 추가 */
			const depth01Items = document.querySelectorAll('.depth_01 li');
			const depth02 = document.querySelector('#depth_02');
			
				depth01Items.forEach(item => {
					item.onclick = function() {
						depth02.classList.toggle('active');
					};
				});

				document.onclick = function(event) {
					if (!event.target.closest('.depth_02') && !event.target.closest('.depth_01 li')) {
						depth02.classList.remove('active');
					}
				};

		/*  🌊흐름
			depth01Items 변수 선언 = .depth_01 의 li 요소 모두 선택 <NodeList>
			depth02 변수 선언 = .depth_02 선택 <NodeList>
			search 변수 선언 = .search 선택 <NodeList>
		
			변수 depth01Items을.순서대로 반복(모든 아이탬에 대해, 함수 선언(){
				각 아이탬에.표준 이벤트 모델 제작('클릭 이벤트 부여', 함수 선언(){
				depth02에.class 부여.toggle방식('클래스명 .active');
				});
			});
		
			문서에.표준 이벤트 모델 제작('클릭 이벤트 부여', 함수 선언(event){
				만약(아니다<= !> 이벤트가.클릭된 요소<= 이벤트가 발생한 실제 객체>에.가장 가까운 부모가('li')
				둘다 참인 경우<=&&> 아니다<= !> 이벤트가.클릭된 요소<= 이벤트가 발생한 실제 객체>에.가장 가까운 부모가('.search')){
					depth02에.class.제거('클래스명 .active};
					}
				};
			=> if(이벤트가 실행되었을 때, 이벤트가 발생한 요소가 li의 자식이거나 .search의 자식이 아니라면){
				depth02에 .active 클래스를 제거한다.};
			// 여기서 target = 정확히는 event.target으로 이벤트가 발생한 요소를 의미
			// closest = 가장 가까운 부모를 찾는 메소드
		*/

		/* 검색창 클릭 시, 열리는 event class 추가 */
			const search = document.querySelector('#search');
			const searchBox = document.querySelector('#search .box');

				searchBox.addEventListener('click', () => {
					search.classList.add('open');
				});

				document.addEventListener('click', (event) => {
					if (!event.target.closest('#search') || event.target.closest('#search .del')) {
						search.classList.remove('open');
					} 
				});
		/*  🌊흐름
			search 변수 선언 = .#search 요소 모두 선택 <NodeList>
			searchBox 변수 선언 = #search .box 선택 <NodeList>
		
			searchBox.표준 이벤트 모델 제작('클릭 이벤트 부여', 함수 선언(){
				search에.class 부여.add('클래스명 .open');
			});
		
			searchBox.표준 이벤트 모델 제작('클릭 이벤트 부여', 함수 선언(event){
				만약(아니다<= !> 이벤트가.클릭된 요소<= 이벤트가 발생한 실제 객체>에.가장 가까운 부모가('#search')){
				search에.class.제거('클래스명 .open};
				}
			});
		*/

		/* ham 클릭 시, sub가 나오는 event class 추가 */
		const hamOpen = document.querySelector('#ham');
		
			hamOpen.onclick = function() {
				hamOpen.classList.toggle('active');
			};

		}) // end of then
		.catch(error => {
			console.error('Error loading header:', error);
		}); // end of catch
}); // end of catch


