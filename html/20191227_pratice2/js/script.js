$(document).ready(function(){
	$("#ex_01_title").click(function(){
		$(".p_03").css("background-color","#ffaaff");
	})
	$("#ex_02").click(function(){
        if($(this).prop("checked") == true){
            $("#ex_02_title").text("전체해제");
            $("input[name*='item_']").click();
        }
        else if($(this).prop("checked") == false){
            $("#ex_02_title").text("전체선택");
            $("input[name*='item_']").click();
        }
      });
	$(".ch_03_img span").click(function(){
		$(this).closest(".ch_03_img").slideUp("slow");
	});
	var $move = parseInt($(".ch_04_01 img").css("margin-left"));
	$(".go").click(function(){
		$move -=50;
		$(".ch_04_01 img").animate({"margin-left" : $move});
	});
	$(".back").click(function(){
		$move +=50;
		$(".ch_04_01 img").animate({"margin-left" : $move});
	});

	$(".tab_btn div").click(function(){
		$(".tab_btn div").removeClass("activeBtn");
		$(this).addClass("activeBtn");
		$(".tab_box>div").removeClass("activeBox");
		$(".tab_box>div").eq($(this).index()).addClass("activeBox");
	
		if($("#tab_01").hasClass("activeBtn")){
			$(".bg-bk").animate({"left" : "0"});
		}else{
			$(".bg-bk").animate({"left": "600px"});
		}
		
	});
	$(".title .less, .title p").hide();

	$(".title .more").click(function(){
		$(this).hide();
		$(this).siblings(".less").show();
		$(this).closest(".title").find("p").slideDown();
	});
	$(".title .less").click(function(){
		$(this).hide();
		$(this).siblings(".more").show();
		$(this).closest(".title").find("p").slideUp();
	});

	$(".q_box p").hide();
	$(".q_box h5").click(function(){
		if($(this).siblings("p").css("display")=="none"){
			$(".q_box p").slideUp();
			$(this).siblings("p").slideToggle();
		}else{
			$(this).siblings("p").slideToggle();
		}
	});
	
	$(".per_bar_frame").click(function(){
		$(this).find(".per_bar").animate({"width": $(this).attr("data-percent")},2000);
		$(this).find(".cur_per").text($(this).attr("data-percent"));
	});
	$(".login-box").css("display","none");
	$("#ex_09 .op_btn").click(function(){
		$(".dark-bg").css("z-index", "1");
		$(".dark-bg").addClass("active_bg");
		$(".login-box.ex_09").css("display","table");
	});
	$(".cls_btn, .dark-bg").click(function(){
		$(".dark-bg").css("z-index", "-2");
		$(".dark-bg").removeClass("active_bg");
		$(".login-box").css("display","none");
	});
	$(".login-box").css("display","none");
	$(".register-box").css("display","none");
	$("#ex_10 .op_btn").click(function(){
		$(".dark-bg").css("z-index", "1");
		$(".dark-bg").addClass("active_bg");
		$(".login-box.ex_10").css("display","table");
	});
	$("#ex_10 .rg_btn").click(function(){
		$(".dark-bg").css("z-index", "1");
		$(".dark-bg").addClass("active_bg");
		$(".register-box").css("display","table");
	});
	$(".cls_btn, .dark-bg").click(function(){
		$(".dark-bg").css("z-index", "-2");
		$(".dark-bg").removeClass("active_bg");
		$(".login-box").css("display","none");
		$(".register-box").css("display","none");
	});
	$(".login-box h6").click(function(){
		$(".login-box").css("display","none");
		$(".register-box").css("display","table");
	});
	$(".register-box h6").click(function(){
		$(".register-box").css("display","none");
		$(".login-box.ex_10").css("display","table");
	});
	
	$(".cont-box>div").css("display","none");
	$("#ex_11 .img_op_btn").click(function(){
		$(".cont-bg").slideDown( 5000, function(){
			$(".cont-img").slideDown( 5000, function(){
				$(".cont-text").slideDown( 5000, function(){
				});
			});
		});
	});
	// $(".per_bar_frame:eq(0) .per_bar").css("width", $(".per_bar_frame").eq(0).attr("data-percent"));
	// $(".per_bar_frame:eq(1) .per_bar").css("width", $(".per_bar_frame").eq(1).attr("data-percent"));
	// $(".per_bar_frame:eq(2) .per_bar").css("width", $(".per_bar_frame").eq(2).attr("data-percent"));


});

