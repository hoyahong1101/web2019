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



























