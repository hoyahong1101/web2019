$(document).ready(function(){
	$("#rv_01 button").click(function(){
		$("#rv_01").find("p").eq(2).addClass("active");
	});

	$("#rv_02").hover(function(){
		$("#rv_02 img").attr("src","img/image_02.jpg");
	},
	function(){
		$("#rv_02 img").attr("src","img/image_01.jpg");
	}
	);

	$("#rv_03 .add_02").click(function(){
		$("#rv_03 img:last").after(function(){
			return "<img src='img/image_02.jpg' alt='이미지-01'/>" ;
		})
		$("#rv_03 .add_02").attr("disabled","disabled");
	});

	$("#rv_03 .add_03").click(function(){
		$("#rv_03  img:last").after(function(){
			return "<img src='img/image_03.jpg' alt='이미지-01'/>" ;
		})
		$("#rv_03 .add_03").attr("disabled","disabled");
	});

	var i = 1;
	$("#rv_04 button").click(function(){
		i++;
		var x="0";
		if(i<10){
			x = x+i;
		}else{
			x = 10;
		}
		$("#rv_04  img:last").after(function(){
			return "<img src='img/image_"+ x +".jpg' alt='이미지-01'/>" ;
		})
		if(i == 10){
			$("#rv_04 button").attr("disabled","disabled");
		}
	});
var j = 1;

$("#rv_05 button").click(function(){
	j++;
	var y="0";
	if(j<10){
		y = y+j;
	}else{
		y = 10;
		j = 0;
	}
	$("#rv_05  img").attr("src","img/image_"+y+".jpg");
});


var k = 1;
$("#rv_06 .prev_btn").click(function(){
	k--;
	console.log("k"+ k);
	var z="0";
	if(k>0){
		z = z+k;
	}else if(k==0){
		z = "10";
		k = 10;
	}else if(k==-1){
		z = "09";
		k = 9;
	}
	$("#rv_06  img").attr("src","img/image_"+z+".jpg");

});


$("#rv_06 .next_btn").click(function(){
	k++;
	console.log("k"+ k);
	var z="0";
	if(k<10){
		z = z+k;
	}else if(k==10){
		z = "10";
		k = 0;
	}else if(k==11){
		z = "01";
		k = 1;
	}
	$("#rv_06  img").attr("src","img/image_"+z+".jpg");
});

});