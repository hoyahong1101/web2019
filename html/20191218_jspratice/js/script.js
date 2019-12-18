var $str ="welcom to my home";
$str = $str.replace("home", "homepage");
$str = $str.replace("welcom", "Welcome");

	var x = 0;
	var y =1;
var $arr_01 = ["kakao_01.jpg", "kakao_02.jpg", "kakao_03.jpg"];
var $kakao_01 = ["kakao_01.jpg", "kakao_02.jpg", "kakao_03.jpg"];
var $kakao_02 = ["카카오 소풍", "카카오 나들이", "카카오 휴가"];

window.onload = function(){
	nextImg();nextImg2();
	var d = new Date();
	var date = d.getDate();
	var day = d.getDay();
	var hours = d.getHours();
	var minutes = d.getMinutes();
	var seconds = d.getSeconds();
	var month = d.getMonth();
	var year = d.getFullYear();


if(day ==1){
	day="월";
}else if(day ==2){
	day="화";
}else if(day ==3){
	day="수";
}else if(day ==4){
	day="목";
}else if(day ==5){
	day="금";
}else if(day ==6){
	day="토";
}else{
	day="일";
}
	var result_01 = document.getElementById("result_01");
	result_01.innerHTML = year+"년 ";
	result_01.innerHTML += (month+1)+"월 ";
	result_01.innerHTML += date+"일 ";
	result_01.innerHTML += day+"요일, ";
	result_01.innerHTML += hours+" : ";
	result_01.innerHTML += minutes+" : ";
	result_01.innerHTML += seconds;
	var result_02 = document.getElementById("result_02");
	result_02.innerHTML = $str;

	var result_03 = document.getElementById("result_03");
	for(i=0; i<$arr_01.length; i++){
		result_03.innerHTML += "<img src='./img/"+$arr_01[i]+"' alt='./img/"+$arr_01[i]+"'>";
	}

	var result_04 = document.getElementById("result_04");
	for(i=0; i<$kakao_01.length; i++){
		result_04.innerHTML += "<div class='kakao_bx'><img src='./img/"+$kakao_01[i]+"' alt='./img/"+$kakao_01[i]+"'><span>"+$kakao_02[i]+"</span></div>";
	}
}













var myVar = setInterval(myTimer, 1000);


function myTimer(){
	var d = new Date();
var date = d.getDate();
var day = d.getDay();
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();
var month = d.getMonth();
var year = d.getFullYear();


if(day ==1){
	day="월";
}else if(day ==2){
	day="화";
}else if(day ==3){
	day="수";
}else if(day ==4){
	day="목";
}else if(day ==5){
	day="금";
}else if(day ==6){
	day="토";
}else{
	day="일";
}
	var result_01 = document.getElementById("result_01");
	result_01.innerHTML = year+"년 ";
	result_01.innerHTML += (month+1)+"월 ";
	result_01.innerHTML += date+"일 ";
	result_01.innerHTML += day+"요일, ";
	result_01.innerHTML += hours+" : ";
	result_01.innerHTML += minutes+" : ";
	result_01.innerHTML += seconds;

}

function nextImg(){
	var $img_01 = new Array;
	for(i=0; i<9; i++){
		$img_01[i] = "img"+(i+1)+".jpg";
	}
	if(x==9){x=0;}

	var result_05 = document.getElementById("result_05");
	result_05.innerHTML ="<img src='./img/"+$img_01[x]+"' alt='./img/"+$img_01[x]+"'>";
	x++;
}
function preImg(){
	var $img_01 = new Array;
	for(i=0; i<9; i++){
		$img_01[i] = "img"+(i+1)+".jpg";
	}
	x--;
	if(x==-1){x=8;}

	var result_05 = document.getElementById("result_05");
	result_05.innerHTML ="<img src='./img/"+$img_01[x]+"' alt='./img/"+$img_01[x]+"'>";
	
}


function nextImg2(){

	if(y==4){y=1;}
	var result_06 = document.getElementById("result_06");
	result_06.children[0].setAttribute("src", "./img/sub_0"+y+".jpg");
	y++;
}

