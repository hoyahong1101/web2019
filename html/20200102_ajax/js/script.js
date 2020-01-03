$(document).ready(function(){
	//document loaded and then call main.html
	$.ajax({
		url:"main.html",
		type:"post",
		// data:d,
		success:function(result){
			$("#section").html(result);
		}
	});
	$(".logo").click(function(){
		console.log("working");
		$.ajax({
			url:"main.html",
			type:"post",
			// data:d,
			success:function(result){
				$("#section").html(result);
			}
		});
		return false;
	});		
	$(".menu_01").click(function(){
		console.log("working");
		$.ajax({
			url:"sub01.html",
			type:"post",
			// data:d,
			success:function(result){
				$("#section").html(result);
			}
		});
		$("#section").css("background", "gold");
		return false;
	});
	$(".menu_02").click(function(){
		console.log("working");
		$.ajax({
			url:"sub02.html",
			type:"post",
			// data:d,
			success:function(result){
				$("#section").html(result);
			}
		});
		$("#section").css("background", "pink");
		return false;
	});
	$(".menu_03").click(function(){
		console.log("working");
		$.ajax({
			url:"sub03.html",
			type:"post",
			// data:d,
			success:function(result){
				$("#section").html(result);
			}
		});
		$("#section").css("background", "lightblue");
		return false;
	});
	$(".menu_04").click(function(){
		console.log("working");
		$.ajax({
			url:"sub04.html",
			type:"post",
			// data:d,
			success:function(result){
				$("#section").html(result);
			}
		});
		$("#section").css("background", "lightblue");
		return false;
	});						
});


