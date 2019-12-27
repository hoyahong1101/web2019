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
	$(".test_15 p").hide();
	$(".test_15 .show-btn").click(function(){
		$(".test_15 p").show();
	});
	$(".test_15 .hide-btn").click(function(){
		$(".test_15 p").hide();
	});
	$(".test_16 p").hide();
	$(".test_16 .show-btn").click(function(){
		$(".test_16 p.normal").show();
		$(".test_16 p.very-fast").show(50);
		$(".test_16 p.fast").show("fast");	
		$(".test_16 p.slow").show("slow");	
		$(".test_16 p.very-slow").show(2000);	
	});
	$(".test_16 .hide-btn").click(function(){
		$(".test_16 p.normal").hide();
		$(".test_16 p.very-fast").hide(50);
		$(".test_16 p.fast").hide("fast");	
		$(".test_16 p.slow").hide("slow");	
		$(".test_16 p.very-slow").hide(2000);
	});
	$(".test_17 p").hide();
	$(".test_17 .out-btn").click(function(){
		$(".test_17 p").fadeOut();
	});
	$(".test_17 .in-btn").click(function(){
		$(".test_17 p").fadeIn();
	});
	$(".test_18 p").hide();
	$(".test_18 .up-btn").click(function(){
		$(".test_18 p").slideUp();
	});
	$(".test_18 .down-btn").click(function(){
		$(".test_18 p").slideDown();
	});
	var x = 0;
	$(".test_19 button").click(function(){
		x +=500;
		$(".test_19 img").animate({"left":x},1000);
	});
	$(".test_20 img").click(function(){
		var $title = $(".test_20 img").attr("title");
		$(".test_20 p").text($title);
	});
	$(".test_21 button").click(function(){
		$(".test_21 img").attr("src","img/kakao_img2.jpg" );
	});
	$(".test_22 .left_add").click(function(){
		$(".test_22 .img_frame").prepend("<img src='img/wall_img1.jpg' alt='카카오프렌즈'>");
	});
	$(".test_22 .right_add").click(function(){
		$(".test_22 .img_frame").append("<img src='img/wall_img3.jpg' alt='카카오프렌즈'>");
	});
	$(".test_23 .before_add").click(function(){
		$(".test_23 #kakao").before("<img src='img/wall_img4.jpg' alt='카카오프렌즈'>");
	});
	$(".test_23 .after_add").click(function(){
		$(".test_23 #kakao").after("<img src='img/wall_img6.jpg' alt='카카오프렌즈'>");
	});
	$(".test_24 .effect_add").click(function(){
		$(".test_24 #band").addClass("effect");
	});
	$(".test_24 .effect_remove").click(function(){
		$(".test_24 #band").removeClass("effect");
	});
	$(".test_25 .effect_confirm").click(function(){
	
		if($(".test_25 #refresh").hasClass("effect")){

			$(".test_25 #refresh").removeClass("effect");
		}else{
			$(".test_25 #refresh").addClass("effect");
		}
	});
	$(".test_26 .img_frame img").not(".test_26 .img_frame img:eq(0)").hide();
	$(".test_26 .fadein_img").click(function(){
		$(".test_26 img:eq(1)").fadeIn(1000, function(){
			$(".test_26 img:eq(2)").fadeIn(1000, function(){
				$(".test_26 img:eq(3)").fadeIn(1000, function(){
					$(".test_26 img:eq(4)").fadeIn(1000, function(){
					});
				});
			});
		});
	});

});