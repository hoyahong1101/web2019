//javascript 객체 문법

/*객체 구성*/
var cell_phone = new Object();  //cell_phone라는 변수를 새로운 객체로 생성하겠다는 것을 의미

cell_phone.width = "8cm";
cell_phone.height = "14cm";
cell_phone.weight = "200g";
cell_phone.color = "classic blue";

document.write(cell_phone.width, "<br>");
document.write(cell_phone.height, "<br>");
document.write(cell_phone.weight, "<br>");
document.write(cell_phone.color, "<br>");

/*날짜 객체*/
var $t = new Date();  //연, 월, 일, 요일, 시간(시, 분, 초 등)의 날짜 정보를 받아오겠다는 의미
var nowYear = $t.getFullYear();  //연도정보
var nowMonth = $t.getMonth()+1;  //1월은 시스템 데이터 값에서 "0"이라는 값을 가져옴
var nowDate = $t.getDate();  //일 정보 (서수개념-첫째날, 둘째날,...) 1일에 대한 데이터의 값은 '1'
var nowDay = $t.getDay();  //요일 정보(일:0~토:6)

var nowHours = $t.getHours();  //현재 시 정보
var nowMinutes = $t.getMinutes();  //현재 분 정보
var nowSeconds = $t.getSeconds();  //현재 초 정보

document.write("현재 연도 : "+nowYear, "<br>");
document.write("현재 월 : "+nowMonth, "<br>");
document.write("현재 일 : "+nowDate, "<br>");
if(nowDay == 0){
	document.write("현재 요일 : 일요일", "<br>");
}else if(nowDay == 1){
	document.write("현재 요일 : 월요일", "<br>");
}else if(nowDay == 2){
	document.write("현재 요일 : 화요일", "<br>");
}else if(nowDay == 3){
	document.write("현재 요일 : 수요일", "<br>");
}else if(nowDay == 4){
	document.write("현재 요일 : 목요일", "<br>");
}else if(nowDay == 5){
	document.write("현재 요일 : 금요일", "<br>");
}else{
	document.write("현재 요일 : 토요일", "<br>");
}

document.write("현재 시 : "+nowHours, "<br>");
document.write("현재 분 : "+nowMinutes, "<br>");
document.write("현재 초 : "+nowSeconds, "<br>");


var mybirth = new Date("1979-10-25");
var theYear = mybirth.getFullYear();
var theMonth = mybirth.getMonth()+1;
var theDate = mybirth.getDate();
var theDay = mybirth.getDay();

if(theDay==0){
	ch_day = "일요일";
}else if(theDay==1){
	ch_day = "월요일";
}else if(theDay==2){
	ch_day = "화요일";
}else if(theDay==3){
	ch_day = "수요일";
}else if(theDay==4){
	ch_day = "목요일";
}else if(theDay==5){
	ch_day = "금요일";
}else{
	ch_day = "토요일";
}
document.write(theYear+"년 "+theMonth+"월 "+theDate+"일은 "+ch_day+"입니다.", "<br>");

/*요일별 이미지 적용하기*/
var $n_date = new Date();
var $nDay = $n_date.getDay();

if($nDay == 0){
	document.write("<img src='img/img-day/sunday.gif'>");
}else if($nDay == 1){
	document.write("<img src='img/img-day/monday.gif'>");
}else if($nDay == 2){
	document.write("<img src='img/img-day/tuesday.gif'>");
}else if($nDay == 3){
	document.write("<img src='img/img-day/wednesday.gif'>");
}else if($nDay == 4){
	document.write("<img src='img/img-day/thursday.gif'>");
}else if($nDay == 5){
	document.write("<img src='img/img-day/friday.gif'>");
}else if($nDay == 6){
	document.write("<img src='img/img-day/saturday.gif'>");
}

/*계절별 이미지 변경*/
var $nMonth = $n_date.getMonth()+1;
if($nMonth>=3 && $nMonth<=5){
	document.write("<img src='img/img-season/img-m.jpg'>", "<br>");
}else if($nMonth>=6 && $nMonth<=8){
	document.write("<img src='img/img-season/img-s.jpg'>", "<br>"); 
}else if($nMonth>=9 && $nMonth<=11){
	document.write("<img src='img/img-season/img-f.jpg'>", "<br>"); 
}else{
	document.write("<img src='img/img-season/img-w.jpg'>", "<br>"); 
}


/*숫자(Number) 객체*/
document.write("<h3>숫자(Number) 객체</h3>");
var maxNum = Math.max(12, 24, 5, 3, 30); //숫자 중에서 가장 큰 값을 출력
var minNum = Math.min(12, 24, 5, 3, 30); //숫자 중에서 가장 작은 값을 출력

document.write("최대값 반환하기 : "+maxNum, "<br>");
document.write("최소값 반환하기 : "+minNum, "<br>");

var num = 2.52345;
var roundNum = Math.round(num);  //저장된 숫자의 반올림한 값을 반환(정수 형태, 소수점 첫번째 자리에서 반올림 적용)
document.write("반올림 적용하기 : "+roundNum, "<br>");

var floorNum = Math.floor(num);  //저장된 숫자의 내림한 값을 반환(정수 형태, 소수점 첫번째 자리에서 내림 적용)
document.write("내림 적용하기 : "+floorNum, "<br>");

var ceilNum = Math.ceil(num);  //저장된 숫자의 올림한 값을 반환(정수 형태, 소수점 첫번째 자리에서 올림 적용)
document.write("올림 적용하기 : "+ceilNum, "<br>");

var randomNum = Math.random(); //0~1 사이의 숫자(실수)를 반환(소수점 아래 자리까지 출력)
document.write("무작위 숫자 가져오기 : "+randomNum, "<br>");

var piNum = Math.PI;
document.write("원주율 가져오기 : "+piNum, "<br>");

/*0~10 사이의 숫자를 난수로 반환*/
var randomNum = Math.random()*10; //0~1 사이의 숫자(실수)를 반환(소수점 아래 자리까지 출력)
document.write("0~10 사이 무작위 숫자 가져오기 : "+randomNum, "<br>");
/*0~10 사이의 정수를 난수로 반환*/

var randomNum = Math.floor(Math.random()*10); //0~1 사이의 숫자(실수)를 반환(소수점 아래 자리까지 출력)
document.write("0~10 사이 무작위 정수값 가져오기 : "+randomNum, "<br>");

/*폰트 사이즈를 10~110px 이하까지 랜덤으로 적용*/
document.getElementById("txt").style.fontSize = Math.floor((Math.random()*100)+10)+"px";
//document : 문서라는 객체에서
//.getElementById("txt") : 아이디명이  'txt'라고 설정되어 있는 요소로 접근
//.style : 접근한 요소에 스타일을 적용
//.fontSize : 폰트의 크기를 인라인 스타일 시트로 직접 적용하겠다는 의미
//<p id="txt" style="font-size:00px">문장<p>

/*랜덤을 통해서 출력되는 정수값을 1~9*/
var random_img = Math.floor((Math.random()*9)+1);
document.write("<img src='img/view"+random_img+".jpg'>");


/*문자객체*/
var txt = "Hello Thank You good luck to you";
/*Hello Thank you good luck to you
01234567890
*/

document.write(txt.charAt(7), "<br>");
document.write(txt.indexOf("you"), "<br>");
document.write(txt.indexOf("o", 10), "<br>");
document.write(txt.lastIndexOf("ou"), "<br>");
document.write(txt.match("good"), "<br>");
document.write(txt.search("luck"), "<br>");
document.write(txt.substr(12,3), "<br>");
document.write(txt.substring(16,20), "<br>");
document.write(txt.replace("You","Me"), "<br>");
document.write(txt.substring("You", ""), "<br>");







