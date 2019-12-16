


window.onload=function(){
	var $firstObj = document.getElementById("title");
	console.log($firstObj);
	$firstObj.style.color ="red";
	$firstObj.style.backgroundColor ="#ffffaa"
	$firstObj.innerHTML ="더보기"
	$firstObj.innerHTML ="감추기"


	var menuObj = document.getElementById("menu");
	console.log(menuObj);

	menuObj.getElementsByTagName("p")[1].style.backgroundColor="#ffaaff";
};