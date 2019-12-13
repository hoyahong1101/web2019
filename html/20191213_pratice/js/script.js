// 2
var $num01 = 36;
var $num02 = 12;
	
document.write( "SUM: ", ($num01 + $num02) , "<br>");
document.write( "SUBSTRACT: ", ($num01 - $num02) , "<br>");
document.write( "MULTIPLY: ", ($num01 * $num02) , "<br>");
document.write( "DIVIDE: ", ($num01 / $num02) , "<br>");
document.write( "REMINDER: ", ($num01 % $num02) , "<br>");
//3
var $num03 = 36;
var $num04 = 12;
var $result;


$result = $num03 += $num04;
document.write( "$result(+=)", $result , "<br>");
$result = $num03 -= $num04;
document.write( "$result(-=)", $result , "<br>");
$result = $num03 *= $num04;
document.write( "$result(*=)", $result , "<br>");
$result = $num03 /= $num04;
document.write( "$result(/=)", $result , "<br>");
$result = $num03 %= $num04;
document.write( "$result(%=)", $result , "<br>");

// //4
// $width = Number(prompt("브라우저의 가로 값(px)",""));
// $height = Number(prompt("브라우저의 세로 값(px)",""));

// document.write("브라우저의 총 면적(px): " , $width * $height);

//5
var $t = "<table border='1'>";
	$t += "<tr><td>1</td><td>2</td><td>3</td></tr>";
	$t += "<tr><td>4</td><td>5</td><td>6</td></tr>";
	$t += "</table>";

document.write($t);

//6
/*$num_in = prompt("네자리 이상 숫자를 입력하시오", "");
if(Number($num_in)){
	if($num_in >= 1000 && $num_in <= 9999){
		if($num_in % 7 == 0){
			document.write( "입력한", $num_in, "은(는) 7의배수입니다." ,"<br>");
		}else{
			document.write( "입력한", $num_in, "은(는) 7의배수가 아닙니다." ,"<br>");
		}
	}else{
			alert("4자리 수가 아닙니다.");
			location.reload();
		}
}else{
			alert("숫자가 아닙니다.");
			location.reload();
		}
*/

//7
var $bx_num = 1;
for($bx_num = 1; $bx_num <= 10; $bx_num++ ){
	document.write("<div style=' width: 50px; height: 50px; background: #ffaaff; display: inline-block; margin: 5px;'></div>");
}
document.write("<br>");


//8

var $bx_limit = prompt("보여줄 박스의 개수를 입력하시오", "");
if(Number($bx_limit)){
	for($bx_num = 1; $bx_num <= $bx_limit; $bx_num++ ){
	document.write("<div style=' width: 50px; height: 50px; background: #ffaaff; display: inline-block; margin: 5px;'></div>");
	}

}else{
	alert("숫자가 아닙니다.");
	location.reload();

}
document.write("<br>");	
