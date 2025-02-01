
document.addEventListener("DOMContentLoaded", function() {
	fetch('../html/header.html')
	.then(response => {
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return response.text();
	}) // end of then
	.then(data => {document.getElementById('header-container').innerHTML = data;

		// HTML이 DOM에 추가된 후에 이벤트 리스너 설정

			/* 변수 선언 */
			const depth01Items = document.querySelectorAll('.depth_01 li');
			const depth02 = document.querySelector('#depth_02');
			const search = document.querySelector('#search');
			const searchBox = document.querySelector('#search .box');
			const hamOpen = document.querySelector('#ham');


		/* gnb 클릭 시, sub가 나오는 event class 추가 */
			document.addEventListener('click', (event) => {
				if (event.target.closest('.depth_01 li')) {
						depth02.classList.toggle('active');
				} else if (event.target.closest('#ham')) {
						hamOpen.classList.toggle('active');
						depth02.classList.toggle('active');
						search.classList.toggle('open');
				}
		});
		
		// depth02의 #del 클릭 시, 닫히는 event class (451px 이상에서 작동)
		document.addEventListener('click', (event) => {
				if (event.target.closest('#depth_02.active #del')) {
						depth02.classList.remove('active');
				}
		});

		// #ham.active 클릭 시, 변수에 대응하거나 닫히는는 event class (450px 이하에서 작동)
		document.addEventListener('click', (event) => {
			if (event.target.closest('#ham.active')) {
					depth02.classList.add('active');
					search.classList.add('open');
			} else if (event.target.closest('#ham.active') 
				&& event.target.closest('#depth_02.active')) {
				search.classList.add('open');
			} else if (event.target.closest('#ham.active') 
				&& event.target.closest('#depth_02.active')
				&& event.target.closest('#search.open')) {
				depth02.classList.remove('active');
				search.classList.remove('open');
			} else if (event.target.closest('#ham') 
				&& event.target.closest('#depth_02.active')
				&& event.target.closest('#search.open')) {
				depth02.classList.remove('active');
				search.classList.remove('open');
			} else if (event.target.closest('#ham') 
					&& event.target.closest('#depth_02')
					&& event.target.closest('#search.open')) {
					search.classList.remove('open');
			}
		});


		/* 검색창 클릭 시, 열리는 event class 추가 */
		searchBox.addEventListener('click', () => {
				search.classList.add('open');
		});

		// 화면 넓이가 451px 이상일 때
		const mediaQueryList = window.matchMedia('(min-width: 451px)');
		mediaQueryList.addEventListener('change', (event) => {
			if (event.matches) {
				// 451px 이상일 때
				document.addEventListener('click', handleLargeScreenClick);
				document.removeEventListener('click', handleSmallScreenClick);
			} else {
				// 450px 이하일 때
				document.addEventListener('click', handleSmallScreenClick);
				document.removeEventListener('click', handleLargeScreenClick);
			}
		});

		// 초기 로드 시 이벤트 리스너 설정
		if (mediaQueryList.matches) {
			document.addEventListener('click', handleLargeScreenClick);
		} else {
			document.addEventListener('click', handleSmallScreenClick);
		}

		function handleLargeScreenClick(event) {
			if (!event.target.closest('#search.open') 
				&& !event.target.closest('#ham.active')) {
				search.classList.remove('open');
			}
		}

		function handleSmallScreenClick(event) {
			if (event.target.closest('#search .del') 
				&& event.target.closest('#ham.active')) {
				search.classList.remove('open');
			}
		}


	}) // end of then
	.catch(error => {
		console.error('Error loading header:', error);
	}); // end of catch
}); // end of DOMContentLoaded



	/* 🌊흐름
		표준 이벤트 모델 제작('문서의 컨텐츠가 로딩 완료되면', 함수호출(){
			파일요청('../html/header.html')
				.승인<= then>(기존 데이터 형식 => 만약 (아니다 데이터형식출력.ok){
					에러 출력('Network response was not ok');
					}
					텍스트 데이터 형식으로 변환();
				})
				.승인<= then>(데이터 => {문서에서.id추적('header-container').요소의 html 콘텐츠 = 데이터
				
				변수 선언
				depth01Items = 문서에서 전체 선택('.depth_01 li');
				depth02 = 문서에서 선택('#depth_02');
				search = 문서에서 선택('#search');
				searchBox = 문서에서 선택('#search .box');
				hamOpen = 문서에서 선택('#ham');


				1) gnb 클릭 시, sub가 나오는 event class 추가

				표준 이벤트 모델 작성('클릭 이벤트 생성', 함수 선언(event) => {
					만약 (이벤트.타겟의.부모가('.depth_01 li' 라면)){
						depth02에.클래스리스트.toggle('active');
					}	아니라면 만약 (이벤트.타겟의.부모가('#ham' 이라면)){
						hamOpen에.클래스리스트.toggle('active');
						depth02에.클래스리스트.toggle('active');
						search에.클래스리스트.toggle('open');
					}
				});
				
				1-1) depth02의 #del 클릭 시, 닫히는 event class 추가 (451px 이상에서 작동)
				표준 이벤트 모델 작성('클릭 이벤트 생성', 함수 선언(event) => {
					만약 (이벤트.타겟의.부모가('#depth_02.active #del' 이라면)){
						depth02에.클래스리스트.remove('active');
					}
				});

				1-2) #ham.active 클릭 시, 변수에 대응하거나 닫히는는 event class 추가 (450px 이하에서 작동)
				표준 이벤트 모델 작성('클릭 이벤트 생성', 함수 선언(event) => {
					만약 (이벤트.타겟의.부모가('#ham.active' 라면)){
						depth02에.클래스리스트.add('active');
					}	아니라면 만약 (이벤트.타겟의.부모가('#ham.active')
						이고<= &&> 이벤트.타겟의.부모가('#depth_02.active' 라면)){
						search에.클래스리스트.add('open');
					}	아니라면 만약 (이벤트.타겟의.부모가('#ham.active')
						이고<= &&> 이벤트.타겟의.부모가('#depth_02.active')
						이고<= &&> 이벤트.타겟의.부모가('#search.open' 라면)){
						depth02에.클래스리스트.remove('active');
						search에.클래스리스트.remove('open');
					}	아니라면 만약 (이벤트.타겟의.부모가('#ham')
						이고<= &&> 이벤트.타겟의.부모가('#depth_02.active')
						이고<= &&> 이벤트.타겟의.부모가('#search.open' 라면)){
						depth02에.클래스리스트.remove('active');
						search에.클래스리스트.remove('open');
					}	아니라면 만약 (이벤트.타겟의.부모가('#ham')
						이고<= &&> 이벤트.타겟의.부모가('#depth_02')
						이고<= &&> 이벤트.타겟의.부모가('#search.open' 라면)){
						search에.클래스리스트.remove('open');
					}
				});
			❤️ 위에 이벤트에 토글이 3개 들어가는 바람에 이벤트가 오류 나는 경우가 생길 수 있어서
				  if문 1,2번은 add 클래스가 추가되지 않았을 때, 변수를 추가하는 코드를
					if문 3,4,5번은 변수에 따른 active 제거 코드로 작성
				


				2) 검색창 클릭 시, 열리는 event class 추가
				searchBox에.클릭 이벤트 생성('클릭 이벤트 생성', 함수 선언(){
					search에.클래스리스트.add('open');
				});

				#search .del 클릭 시, 닫히는 event class 추가
				🔥 해석해서 각주 달기기 🔥
				

			})	// end of then
			.거부<= catch>(에러 => {
				에러 출력('Error loading header:', 에러);
			});	// end of catch
		}); // end of DOMContentLoaded
	*/