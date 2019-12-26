$(document).ready(function(){
	$("#select").css({"background-color": "yellow", "font-size": "28px"});
	$(".test_03 p").not(".sience_02").css({"color": "#00dd00"});
	$(".test_04 p:eq(1), .test_04 p:eq(3)").css({"background": "#aaffff"});
	$(".test_05 p:eq(4)").siblings("p").css({"background": "#aaffff"});
	$(".test_06 li:eq(2) a").closest(".menu").css({"background": "#ffff77"});
	$(".port").closest(".main_menu").siblings("#side_menu").css({"background": "#aaffff"});
	$(".port").closest(".main_menu").siblings("#side_menu").find("span").css({"color": "#ff0000"});
	$("input[type='text']").css({"background": "#aaffff"});
	$(".test_09 p").css({"background": "green"}).text("텍스트변경완료");
	
	$(".test_10 p").click(function(){$(this).slideUp();})
	$(".test_11 p").hover(
		function(){$(this).addClass("highlight");
	}, function(){$(this).removeClass("highlight");
	});
	$(".test_12 .result").text($(".test_12 select").val());
	$(".test_12 select").change(function(){
		$(".test_12 .result").text($(".test_12 select").val());
	});
	$(".test_13 .widthTxt").text($(window).width());
	$(".test_13 .heightTxt").text($(window).height());
	$(window).resize(function(){
		$(".test_13 .widthTxt").text($(window).width());
		$(".test_13 .heightTxt").text($(window).height());
	});
	$(".test_14 .scroll_location").text($(window).scrollTop());
	$(window).scroll(function(){
		$(".test_14 .scroll_location").text($(window).scrollTop());
	});
});