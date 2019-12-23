
$(document).ready(function(){

	//템플릿 리터럴
	var $temp = `<li><a href="#">경영소개</a></li>`;

	//before() 메소드 
	$(".before_after_add li").eq(1).before($temp); 
	$(".before_after_add li").last().after("<li><a href='#'>공지사항</a></li>");


	$("<h5>이벤트 기간 : 2019.12.23~2019.12.31</h5>").insertBefore(".insert_before_after h4");
	$("<p>엄마는 외계인</p>").insertAfter(".insert_before_after p:eq(2)");

	$(".append ul").append("<li><a href='#'>Portfolio</a></li>");
	$(".prepend ").prepend("<p>영국</p>");

	/*
		#1. 배열값으로 메뉴에 대한 항목을 저장
		#2. for문을 이용하여 구조를 .add_menu의 자식으로 반복하여 넣겠다.
		#3. each문을 활용하여 배열 값을 각각의 분기점 항목의 내부에 넣겠다.
	*/

	/*
		2차배열을 활용한 항목 넣기 (메뉴명, 링크주소) 
	*/

	var $menu_arr =[
		["About", "about.html"],
		["Dishes", "dishes.html"], 
		["Event", "event.html"], 
		["Notice", "notice.html"]
	];
	for(i = 0; i < $menu_arr.length ; i ++){
		$(".add_menu").append("<li><a href=''>"+i+"</a></li>");
	}
	$(".add_menu li").each(function(index){
		console.log($menu_arr[index][1]);
		$(this).find("a").text($menu_arr[index][0]);
		$(this).find("a").attr("href", $menu_arr[index][1]);
	});

	// setInterval(function(){
	var $f_img = "<li><img src='img/tree-1.jpg' alt=''></li>";

	console.log($f_img);
	var $f_img = $(".slide li").eq(0); //첫번째 <li> 이하를 저장
	//선택자를 저장(내부의 항복 뿐만 아니라 내부의 dom 요소들을 포함한 모든 노드값을 모두 가져온다.)
	console.log($f_img);

	$(".slide").append($f_img);  //저장된 첫번째 <li> 이하를 부모 영역인 .slide의 맨 마지막 자식으로 넣어주겠다.
	// },1000);


	var $color_clone = $(".clone p:eq(0)").clone(false);
	console.log($color_clone);
	$(".clone").append($color_clone);

	//clone(true) 선택한 항목의 하위 요소를 모두 복제하겠다는 의미를 갖고 있음

	$(".empty p ").empty();
	$(".remove ").remove();

	$(".replaceWith p").replaceWith("<p>오렌지</p>");


	$(".unwrap p").unwrap();
	// $(".unwrap p").wrap("<div />");
	$(".unwrap p").wrapAll("<div>");
	$(".unwrap p").wrapInner("<a>");

	// $("#myList li:not(:first)").css("background-color", "blue");
	// $("#myList li:not(:eq(0))").css("background-color", "blue");
	$("#myList li").not("li:eq(0)").css("background-color", "blue");
	$("#myList li:eq(2)").css("background-color", "green");




























})