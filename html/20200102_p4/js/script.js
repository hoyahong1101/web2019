$(document).ready(function(){
	var sliderNum = $("#ex_00 li").length;
	console.log(sliderNum);
	$("#ex_00 .total-Num").text(sliderNum);

	$("#ex_00 .img-box:eq(0)")

	$("#ex_00 .img-box").click(function(){
		var ex_00 = $("#ex_00 .img-box").eq(0);
		$("#ex_00 .slider").append(ex_00);
	});
	setInterval(function(){
		var ex_01 = $("#ex_01 .img-box").eq(0);
		$("#ex_01 .slider").append(ex_01);
	}, 3000);
		$("#ex_02 .img-box").not("#ex_02 .img-box:eq(0)").css("display","none");
	setInterval(function(){
		var ex_02 = $("#ex_02 .img-box").eq(0);
		$("#ex_02 .slider").append(ex_02);
		$("#ex_02 .img-box").eq(0).css("display","block");
		$("#ex_02 .img-box").not("#ex_02 .img-box:eq(0)").css("display","none");

	}, 3000);

	setInterval(function(){
		
		$("#ex_03 .slides").animate({"margin-left" :"-100%"}, 500, function(){
			var ex_03 = $("#ex_03 li").eq(0);
			console.log(ex_03);
			$("#ex_03 .slides").append(ex_03).css("margin-left", "0");
		});


	}, 3000);	
	setInterval(function(){
		
		$("#ex_04 .slides").animate({"margin-left" :"-100%"}, 500, function(){
			var ex_04 = $("#ex_04 li").eq(0);

			$("#ex_04 .slides").append(ex_04).css("margin-left", "0");
		});


	}, 3000);


		
		setInterval(function(){
			var $pause = $("#ex_05 .slides").hasClass("pause");
			if($pause == true){
			}else{
				$("#ex_05 .slides").animate({"margin-left" :"-100%"}, 500, function(){
					var ex_05 = $("#ex_05 li").eq(0);

					$("#ex_05 .slides").append(ex_05).css("margin-left", "0");
				});
			}
		}, 3000);



	$("#ex_05 .slides").hover(
		function(){
			$("#ex_05 .slides").addClass("pause");
		},
		function(){
			$("#ex_05 .slides").removeClass("pause");
		}
	);


	setInterval(function(){
			var $pause = $("#ex_06 .slides").hasClass("pause");
			if($pause == true){
			}else{
				$("#ex_06 .slides").animate({"margin-left" :"-100%"}, 500, function(){
					var ex_06 = $("#ex_06 li").eq(0);

					$("#ex_06 .slides").append(ex_06).css("margin-left", "0");
				});
			}
		}, 3000);



	$("#ex_06 .play_btn").click(
		function(){
			if($("#ex_06 .slides").hasClass("pause")){
				$("#ex_06 .slides").removeClass("pause");
				$(this).text("PAUSE");
			}else{
				$("#ex_06 .slides").addClass("pause");
				$(this).text("PLAY");
			}
		});

	$("#ex_07 .control_panel .control_button").click(
		function(){
				$("#ex_07 .control_panel .control_button").removeClass("active");
				$(this).addClass("active");
				var ml = 600 * $(this).index();

				$("#ex_07 .slider_panel").animate({"margin-left" : -ml +"px"}, 300);



		});


	setInterval(function(){
		
		$("#ex_08 .slider_panel").animate({"margin-left" :"-100%"}, 500, function(){
			var ex_08 = $("#ex_08 li").eq(0);

			$("#ex_08 .slider_panel").append(ex_08).css("margin-left", "0");
		});


	}, 3000);


});