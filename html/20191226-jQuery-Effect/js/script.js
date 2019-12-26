$(document).ready(function(){
	$(".showBtn").click(function(){
		$(".ef_01").show(5000, function(){
			$(".ef_01").css("background", "#ffaaff");
		});
	});
	$(".hideBtn").click(function(){
		$(".ef_01").hide(0, function(){
			$(".ef_01").css("background", "#aaffff");
		});
	});

	$(".cont").click(function(){
		$(".detail_cont").stop().toggle(2000);
	});

	$(".fadeInBtn").click(function(){
		$(".ef_02").fadeIn(2000);
	});
	$(".fadeOutBtn").click(function(){
		$(".ef_02").fadeOut(1000);
	});

	$(".slideDownBtn").click(function(){
		$(".ef_03").slideDown(2000);
	});
	$(".slideUpBtn").click(function(){
		$(".ef_03").slideUp(1000);
	});
	$(".slideToggleBtn").click(function(){
		$(".ef_03").slideToggle(1000);
	});
	var $moveTo = 0;
	$(".ani_left").click(function(){
		$(".ef_04").animate({"margin-left":$moveTo-=100}, 500);
	});
	$(".ani_right").click(function(){
		$(".ef_04").animate({"margin-left":$moveTo+=100}, 500);
	});

	// $(".menu>li").hover(function(){
	// 	$(this).find("ul").stop().slideDown();
	// }, function(){
	// 	$(this).find("ul").stop().slideUp();
	// });
	//stop() : 이벤트가 중복 적용되는 부분을 막는 기능 1회만 적용

	$(".menu>li").click(function(){
		var $has = $(this).hasClass("active");
		console.log($has);
		if($has == true){
			$(".menu>li").removeClass("active");
			$(".menu>li").find("ul").stop().slideUp();
		}else{
			$(".menu>li").removeClass("active");
			$(".menu>li").find("ul").slideUp();
			$(this).addClass("active");
			$(this).find("ul").stop().slideDown();
		}
		return false;
	});
	setInterval(function(){
		var $first_child = $(".slide_01 ul li").eq(0);
		console.log($first_child);
		$(".slide_01 ul").animate({"margin-left":"-100%"},1000, function(){
			$(".slide_01 ul").append($first_child).css("margin-left", "0%");
		});
	}, 3000);	

	var $last_clone = $(".slide_02 ul li").last().clone(true);
	console.log($last_clone);
	$(".slide_02 ul").prepend($last_clone);
	$(".slide_02 ul li").last().remove();

	setInterval(function(){
		var $last_child = $(".slide_02 ul li").last();
		console.log($last_child);
		$(".slide_02 ul").animate({"margin-left":"0%"}, 1000, function(){
			$(".slide_02 ul").prepend($last_child).css("margin-left", "-100%");
		});
	}, 3000);

	setInterval(function(){
		var $first_child = $(".slide_03 ul li").first();
		$(".slide_03 ul").animate({"margin-top":"-500px"}, 1000, function(){
			$(".slide_03 ul").append($first_child).css("margin-top", 0);
		});
	},3000);

	var $last_clone =$(".slide_04 ul li").last();
	$(".slide_04 ul").prepend($last_clone);
	setInterval(function(){
		var $last_child = $(".slide_04 ul li").last();
		$(".slide_04 ul").animate({"margin-top":"0px"}, 1000, function(){
			$(".slide_04 ul").prepend($last_child).css("margin-top", "-500px");
		});
	},3000);

	$("#select").css({"background-color": "yellow", "font-size": "28px"});
	$(".test_03 p").not(".sience_02").css({"color": "#00dd00"});
	$(".test_04 p:eq(1), .test_04 p:eq(3)").css({"background": "#aaffff"});
	$(".test_05 p:eq(4)").siblings("p").css({"background": "#aaffff"});
	$(".test_06 li:eq(2)").closest(".menu").css({"background": "#fffff77"});

});