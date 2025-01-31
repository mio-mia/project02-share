/*
	EzenAddClass 플러그인
	최종수정일 : 2024.07.30
*/

function EzenAddClass(tag="", options={}){
	//옵션기본값
	let obj = {
		class:'active',
		addTarget:'none',
		motion:'click',
		addBtn:'none',
		remove:'none',
	};

	//객체(옵션)병합
	Object.assign(obj, options);

	//변수선언
	let btn;
	var targetText
	let targetAll;
	var btns;


	//클릭시 실행
	window.addEventListener('load',function(){
		btn = document.querySelector(tag);
		obj.addBtn = (obj.addBtn == "none") ? '' : (","+obj.addBtn);
		obj.addTarget = (obj.addTarget == "none") ? '' : (","+obj.addTarget);
	 	targetText = btn.getAttribute("href")+obj.addTarget;

		targetAll = document.querySelectorAll(targetText);

		btns = document.querySelectorAll(tag+obj.addBtn);

		var allClass = [
			...btns,
			...targetAll
		];

		btns.forEach((item)=>{
			item.addEventListener(obj.motion , function(e){
				e.preventDefault();

				allClass.forEach((i)=>{
					i.classList.toggle(obj.class);
				});
			});
		});


		if(!obj.remove=="none"){
			remo = document.querySelector(obj.remove);
			remo.addEventListener(obj.motion , function(e){
				e.preventDefault();
				allClass.forEach((i)=>{
					i.classList.toggle(obj.class);
				});

			});
		};
	});




}//end:EzenAddClass()
