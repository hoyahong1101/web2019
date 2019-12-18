//JavaScript Event
//요소별 이벤트(click, mouseover, mouseout)

var $img;
var $realWidth; // 모니터 화면의 사이즈가 아닌 브라우저의 실제 가로값을 가져옴.
var $realHeight; 
var $write ;
var $box;
var $head_bg;
var $section;
window.onload = function(){
	$img = document.getElementById('import');
	$write = document.getElementById("writeSize");
	$box = document.getElementById("box");
	$head_bg = document.getElementById("head_part");
	$section = document.getElementById("sec");
	resizeEvt();scrollEvt();changeSize();
}

	
function importImg(){	
	$img.setAttribute("src", "img/pet.png");
}

function overImg(){	
	$img.setAttribute("src", "img/pet.png");
}

function outImg(){	
	$img.setAttribute("src", "img/dog.png");
}





function resizeEvt(){
	$realWidth = window.innerWidth;
	$realHeight = window.innerHeight;
	$write.innerHTML = "가로: " + $realWidth + " 세로: " + $realHeight;

	if($realWidth<1200){
		if($realWidth<768){
			$write.innerHTML +="<br><span> 모바일 구간</span>";
			$box.setAttribute("class", "mobile");
		}else{
			$write.innerHTML +="<br><span> 테블릿 구간</span>";
			$box.setAttribute("class", "tablet");
		}
	}else{
		$write.innerHTML +="<br><span> PC 구간</span>";
		$box.setAttribute("class", "pc");
	}

	changeSize();

}


function scrollEvt(){
	var $scrollY = window.scrollY;
	console.log($scrollY);
	if(scrollY >=72){
		$head_bg.style.background="#ffaaff";
		$head_bg.setAttribute("class", "sticky");
	}else{
		$head_bg.style.background="#cfcfcf";
		$head_bg.setAttribute("class", "");
	}

}

function changeSize(){
	var $bx_width = window.innerWidth;
	var $bx_height = window.innerHeight;
	$section.style.width = $bx_width + "px";
	$section.style.height = $bx_height + "px";
	$section.style.background = "#aaffaa";
}


