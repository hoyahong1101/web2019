$(document).ready(function(){
	$("#txt_ch").css({"color":"red","font-size":"20px"});
	var $txt_02 = $(".txt_02").text();
	console.log($txt_02);
	$(".txt_sel span").text($txt_02);
	$("h4#ex_03").append("<p id='vo_05'>서울</p>");
	$("h4#ex_03 p").last().css({"color":"red"});
	$("#ex_04").attr("src","img/image_01.jpg");	
	$("#ex_05").attr("src","img/image_02.jpg");	
	$("#ex_06").attr("src","img/image_02.jpg");	
	$("#ex_06").animate({"margin-left":"200px"}, 2000);
	$("#ex_07 .num_03").addClass("active");
	$("#ex_08 p:eq(3)").remove();
	
	var $ex_09 = $("#ex_09 p:eq(3)");
	$("#ex_09 .ho_01").before($ex_09);

	var $ex_10 = $("#ex_10 input:eq(2)").val();
	console.log($ex_10);
	$ex_10 ="대전";
	$("#ex_10 input:eq(2)").val($ex_10);

	$("#ex_11 li ul").css({"display":"none"});

	$("#ex_11 li").click(function(){
		if($(this).children("ul").css("display") == "block"){
			$(this).children("ul").stop().slideUp();
		}else{

			$(this).children("ul").stop().slideDown();
		}
		return false;
	});
		$("#ex_11>li").hover(function(){
			$(this).find("a").css("color","red");
			$(this).children("ul").stop().slideDown();
		},function(){
			$(this).find("a").css("color","black");
			$(this).children("ul").stop().slideUp();
		});
	console.log($(".slider li").length);
	$("#ex_12 li").eq(0).css("z-index","1");
	$(".slide_num li").eq(0).addClass("activeli");
	$(".slide_num li").click(function(){
		console.log($(this).index());
		var $index = $(this).index();
		$("#ex_12 li").css("z-index","0");


		$("#ex_12 li").eq($index).css("z-index","1");

		//var $hasClass = $(this).hasClass("activeli");
		$(".slide_num li").removeClass("activeli");
		$(this).addClass("activeli");
	

	});

});

