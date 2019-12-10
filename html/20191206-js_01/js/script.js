//자바스크립 기초
document.write("안녕하세요!!", "<br>");

//데이터의 종류(string, number, boolen, null)
//#1. 문자형 데이터

var msg = "string data";
var br = "<br>"

document.write(msg, br);
var $tag = "<h2 class='txt_01'>Title</h2>";
document.write($tag, br);


var studentName ="홍길동";


//#2 숫자형 데이터
var num_01 = 6;
var num_02 = Number("6");

document.write(num_01, br);
document.write(num_02, br);
document.write(num_01 + num_02, br);

//#3 논리형 데이터
var  $real_01 = false;
var  $big = 24<21;
var  $isTxt = Boolean("hi");

document.write($real_01, br);
document.write($big, br);
document.write($isTxt, br);


//4. null and undefined
var $init;
var $null = null;
document.write($init, br);
document.write($null, br);


//console.log : 검색창의 console 창에 값이 표현
var $num_03 = 3; 
var $num_04 = 4;
console.log( $num_03 + $num_04);

// identify what type data is using console log
console.log(typeof msg);
console.log(typeof num_01);
console.log(typeof num_01 + typeof num_02);
console.log(typeof $real_01);
console.log(typeof $init);

/*산술 연산자*/
var $num_01 = 27;
var $num_02 = 4;

var $sum = $num_01 + $num_02;
document.write($sum + br);

var $subtract = $num_01 - $num_02;
document.write($subtract + br);


var $multiple = $num_01 * $num_02;
document.write($multiple + br);

var $divide = $num_01 / $num_02;
document.write($divide + br);

var $share = $num_01 % $num_02;
document.write($share + br);

//문자 결합 연산자 : 예약금액 * 예약인원 


var $text_01 = "바나나 우유";
var $text_02 = 500;
var $text_03 = "ml";
var $txt_result = $text_01 + $text_02 + $text_03;
document.write($txt_result +br);
console.log(typeof $txt_result );

//대입연사자
var $no_01 = 13;
var $no_02 = 6;

$no_01 += $no_02;
document.write($no_01 + br);


$no_01 -= $no_02;
document.write($no_01 + br);


$no_01 *= $no_02;
document.write($no_01 + br);


$no_01 /= $no_02;
document.write($no_01 + br);

$no_01 %= $no_02;
document.write($no_01 + br);


//table	

var $t = "<table border='1' style='border-collapse:collapse'>";
$t += "<tr>";
$t += "<td>1</td>"; 
$t += "<td>2</td>"; 
$t += "<td>3</td>"; 
$t += "<td>4</td>"; 
$t += "</tr>"; 
$t += "</table>"; 

document.write($t + br);
console.log($t);

//증감 연산자
/*
	받아오는 변수가 없는 경우
*/
var $no = 12;
$no++;
document.write($no + br);
++$no;
document.write($no + br);
$no--;
document.write($no + br);
--$no;
document.write($no + br);


var $no_ch;
$no_ch = $no++;
document.write($no_ch + br);
$no_ch =  ++$no;
document.write($no_ch + br);

var $number_01 =10;
var $number_02 =20;
$number_01++;
document.write($number_01 + br);
$rst = ++$number_02;
document.write($rst + br);
$rst = $number_02++;
document.write($rst + br);

var i= 1;
var j = i++ +1;
var k = +i +1;

document.write(i + br +  j + br + k + br);

//비교 연산자
var $num_01 = 24;
var $num_02 = 7;
var $num_03 = "12";
document.write($num_01 == 24 , br , $num_02 == "7", br , $num_03 == 12, br);
document.write($num_01 === 24 , br , $num_02 === "7", br , $num_03 === 12, br);

document.write($num_01 > $num_02 , br , $num_02 > $num_03, br);
document.write("20191209 논리연산자 " , "<br>");
//논리연산자 (|| or 연산자)
var $a = 10;
var $b = 12;
var $c = 24;
var $d = 21;

var $result;
$result = $a > $b || $c > $d;

document.write($result, br);


//논리연산자 (&& and 연산자)
var $result;
$result = $a > $b && $c > $d;

document.write($result, br);

// 논리연산자 !연산자 not 연산자
$result = !($a>$b);
document.write($result, br);
//시험
var num = 12;
num += 10;
num++;
num %= 4;
document.write(num, br);

var a= 10;
var b= 40;
var a = a++;
var b = --b;
var c = a+b;
c++;
document.write(c, br);


var $p = 45;
var $q = 50;
var $r = 55;
var result = $p >= $q || $r < $q || $p <= $r;
document.write(result, br);


/*삼항조건 연산자 조건문? 실행문 1 : 실행문 2*/
var $hour = 14;
var $result = $hour >= 12 ?  "오후" +($hour-12) + "시" : "오전" +($hour) + "시";
document.write($result, "<br>");



//조건식	
// var $age = prompt("당신의 나이는 얼마입니까?", "");
var $age = 17;
if($age >= 0 && $age != Number){
	if($age >= 20){
		document.write("당신은 성인입니다." + br);
	}
	else if($age >=13 && $age <20){
		document.write("당신은 청소년입니다." + br);

	}
	else{
		document.write("당신은 아동입니다." + br);
	}
}else{
	document.write("입력한 값이 올바르지 않습니다. 재입력 부탁드립니다." + br);
	location.reload();
}


// var $uName	= prompt("방문자의 성함을 입력하세요", "홍길동"); 
var $uName = "홍성민";
if($uName){
	document.write($uName + "님의 방문을 환영합니다." +br);
}


// //중첩 if
// var $in_num = parseInt(prompt("네자리 이상의 수를 입력하세요", "0000"));
// console.log($in_num);
// if($in_num >= 1000){
// 	if($in_num%3 == 0){
// 		document.write("입력한 값은 3의배수입니다. ");
// 	}else{
// 		document.write("입력한 값은 3의배수가 아닙니다. ");
// 	}
// }else{
// 	alert("입력한 숫자가 유효하지 않습니다. 재입력 해 주세요.");
// 	location.reload();
// }

/*
var $season = prompt("현재 월을 입력하세요", "");
if($season >= 0 && $season <= 12){	
	if($season >= 3 && $season <=5){
		document.write("새싹이 솟아나는 따뜻한 봄입니다." +br);
	}else if($season >= 6 && $season <= 8){
		document.write("뜨거운 태양이 작렬하는 여름입니다." +br);
	}else if($season >= 9 && $season <= 11){
		document.write("천고마비의 계절입니다." +br);
	}else{
		document.write("흰눈이 내리는 겨울입니다." +br);
	}
}else{
	alert("입력한 숫자가 유효하지 않습니다. 재입력 해 주세요.");
	location.reload();
}
*/
// var $month = parseInt(prompt("현재월을 입력하세요", ""));
// if($month >= 1 && $month <=12){
// 	document.write("<img src = 'img/m_"+$month+".png' alt='"+$month+"월'>" + br);
// }



// if login
// var $user_id = "ajw1079";
// var $user_password = "1234";
// var $in_id = prompt("아이디를 입력하세요", "");
// var $in_password = prompt("비밀번호를 입력하세요", "");
// if($user_id == $in_id  && $user_password == $in_password){
// 	document.write($in_id + "님의 방문을 환영합니다." + br);
// }else{
// 	alert("입력한 정보가 일치하지 않습니다. 재입력바랍니다.");
// 	location.reload();
// }

/*switch*/
// var $select = prompt("자주 사용하는 포털 사이트는 어디인가요? 조건: 네이버, 구글, 다음, 네이트 중에서 선택하여 입력하시오.", "");
// var $url;
// switch($select){
// 	case "네이버" : $url = "https://www.naver.com";
// 	break;
// 	case "구글" : $url = "https://www.google.com";
// 	break;
// 	case "다음" : $url = "https://www.daum.com";
// 	break;
// 	case "네이트" : $url = "https://www.nate.com";
// 	break;
// 	default : alert("조건에 제시된 사이트명이 아닙니다.");
// }

// if($url){
// 	location.href = $url;
// }




/*var $room = prompt("자주 사용하는 포털 사이트는 어디인가요? 조건: 네이버, 구글, 다음, 네이트 중에서 선택하여 입력하시오.", "");
var $url;
switch($select){
	case "네이버" : $url = "https://www.naver.com";
	break;
	case "구글" : $url = "https://www.google.com";
	break;
	case "다음" : $url = "https://www.daum.com";
	break;
	case "네이트" : $url = "https://www.nate.com";
	break;
	default : alert("조건에 제시된 사이트명이 아닙니다.");
}

if($url){
	location.href = $url;
}
*/
/*var $session = prompt("관심 있는 분양의 세션 번호를 선택하세요. \n 힌트 : 1 - 디자인, 2 - 개발파트, 3 - 마케팅", "1");
console.log(typeof $session);
//문자형 데이터를  숫자형 데이터로 변경 : Number

switch($session){
	case "1" : document.write("<img src='img/img_01.png'><p>세미나실 201호입니다.</p>", "<br>");
	break; 
	case "2" : document.write("<img src='img/img_02.png'><p>세미나실 202호입니다.</p>", "<br>");
	break; 
	case "3" : document.write("<img src='img/img_03.png'><p>세미나실 203호입니다.</p>", "<br>");
	break; 
	default  : alert("조건에 제시된 세션번호가 아닙니다. 아닙니다.");
	location.reload();
}*/

/*반목문 세가지 필수항목 (1) 초기값, (2)조건문(또는 조건식), (3)증감식*/
document.write("<h3>while 문</h3>");
/*이미지 3장을 반복문응ㄹ 통해 생성하겠다.*/
var $n = 1;
while($n<4){
	document.write("<div class ='box box"+$n+"'><img src='img/img_0"+$n+".png'></div>");
	$n++;
}


//20191210
document.write("20191210", br);
var $i = 1;
while($i<=50){
	document.write($i, br);
	$i++;
}
/*12개의 박스를 반복문을 통해서 구성*/
var $box_num = 1;
while($box_num<=12){
	if($box_num%3 == 0){ //3의 배수인 숫자
		document.write("<div class='bx bx_"+$box_num+"' style='background : #ffaaff'>"+$box_num+"</div>" );
	}else{
	document.write("<div class='bx bx_"+$box_num+"' style='background : #ffffaa'>"+$box_num+"</div>" );
	}
	$box_num++;
} 

document.write("<div class='clear'></div>");
document.write("<h3>do~while 문</h3>"); //먼저 실행을 하고나서 조건식을 검사하여 반복한다.
var $dw = 1;
do{
	document.write("<div class='dw_bx'>"+$dw+"</div>");
	$dw++;
}while($dw<=9)

document.write("<div class='clear'></div>");
document.write("<h3>for 문</h3>"); 

for(var i = 0 ; i <10 ; i ++){
	for(j=0; j <= i; j++){
	document.write("*")
	}
	document.write(br);
}

/*var n = 10
var s=n-1;
for(var i=1;i<=n;i++)
{
     for (var c = 1;c<=s;c++)
      document.write(" ");

    s--;

     for(c=1;c<=2*i-1;c++)
         document.write("*");
         
     document.write("<br>");
}
s=1;

for(i=1;i<=n-1;i++)
{
   for(c=1;c<=s;c++) 
    document.write(" ");
    
    s++;
    
    for(c=1;c<=2*(n-i)-1;c++)
     document.write("*");
     
    document.write("<br>");
}


*/


for(k=1; k<=50; k++){
	if(k%3==0 && k%4!=0 ){
		document.write("<div class='for_bx2' style='background: #ffffaa'>"+k+"</div>");
	}else if(k%3!=0 && k%4==0 ){
		document.write("<div class='for_bx2' style='background: #aaffaa'>"+k+"</div>");
	}else if(k%3==0 && k%4==0 ){
		document.write("<div class='for_bx2' style='background: #ffaaff'>"+k+"</div>");		
	}else{
		document.write("<div class='for_bx2' style='background: #aaa'>"+k+"</div>");
	}
}

document.write("<div class='clear'></div>");
document.write("<h3>break 문</h3>");

for($m=1; $m<=10; $m++){
	document.write("<div class='for_break'>"+$m+"</div>");
}

// var x = prompt("구구단 몇?","");
// document.write("<h1>"+x+"단</h1>");
// for(i=1; i<=9 ; i++){
// 	document.write(x+ "×" +i+ "=" +x*i, br);
// }

/*var x = prompt("구구단 몇?","");

for(x=x; x<=9; x++){
	document.write("<h1>"+x+"단</h1>");
	for(i=1; i<=9 ; i++){
		document.write(x+ "×" +i+ "=" +x*i, br);
	}
}*/


document.write("<h3>형 변환</h3>");
var numString = 24;
console.log(typeof numString);
console.log(typeof String(numString));

var stringNumber = "24";
console.log(typeof stringNumber);
console.log(typeof Number(stringNumber));

var strNo = "3.14592";
var rstNo1 = parseInt(strNo);
console.log(rstNo1);
console.log(typeof rstNo1);
var rstNo2 = parseFloat(strNo);
console.log(rstNo2);
console.log(typeof rstNo2);

var number1 = Number(prompt("첫 번재 숫자를 입력하세요",""));
var number2 = Number(prompt("두 번재 숫자를 입력하세요",""));

alert("입력받은 수: " + number1 +"," + number2 +"\n"+
		"SUM: " + (number1 + number2) + "\n"+
		"SUBSTRACT: " + (number1 - number2));











