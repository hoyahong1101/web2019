$(document).ready(function(){
	
	//배열순서 : 이미지, 타이틀, 내용, 가격, 업데이트 순서, 좋아요횟수	
	var $pd_arr = [
		["img1.jpg", "거실 인테리어4", "합리적인 실용주의 인테리어1", "30000", "20190807", "23"],
		["img2.jpg", "거실 인테리어2", "합리적인 실용주의 인테리어2", "4000", "20191101", "1"],
		["img3.jpg", "침실 인테리어1", "합리적인 실용주의 인테리어3", "502000", "20191104", "233"],
		["img4.jpg", "침실 인테리어2", "합리적인 실용주의 인테리어4", "70300", "20190616", "34"],
		["img5.jpg", "주방 인테리어", "합리적인 실용주의 인테리어5", "800", "20191224", "263"],
		["img6.jpg", "침실 인테리어2", "합리적인 실용주의 인테리어6", "90500", "20190303", "823"],
		["img7.jpg", "서재 인테리어", "합리적인 실용주의 인테리어7", "20060", "20190227", "9"],
		["img8.jpg", "욕실 인테리어", "합리적인 실용주의 인테리어8", "320700", "20190606", "2939"],
		["img9.jpg", "거실 인테리어1", "합리적인 실용주의 인테리어9", "118000", "20190705", "293"],
		["img1.jpg", "거실 인테리어4", "합리적인 실용주의 인테리어1", "30900", "20190807", "23"],
		["img2.jpg", "거실 인테리어2", "합리적인 실용주의 인테리어2", "40000", "20191101", "1"],
		["img3.jpg", "침실 인테리어1", "합리적인 실용주의 인테리어3", "50100", "20191104", "233"],
		["img4.jpg", "침실 인테리어2", "합리적인 실용주의 인테리어4", "70300", "20190616", "34"],
		["img5.jpg", "주방 인테리어", "합리적인 실용주의 인테리어5", "80040", "20191224", "263"],
		["img6.jpg", "침실 인테리어2", "합리적인 실용주의 인테리어6", "90400", "20190303", "823"],
		["img7.jpg", "서재 인테리어", "합리적인 실용주의 인테리어7", "20040", "20190227", "9"],
		["img8.jpg", "욕실 인테리어", "합리적인 실용주의 인테리어8", "3200", "20190606", "2939"],
		["img9.jpg", "거실 인테리어1", "합리적인 실용주의 인테리어9", "1100", "20190705", "293"],


	];

	var $pd_box = `
		<div class="pd_box">
			<div class="pd_photo">
				<img src="img/img1.jpg" alt="">
			</div>
			<div class="pd_info">
				<div class="pd_title">title</div>
				<div class="pd_text">context</div>
				<div class="pd_etc">
					<span class="pd_price">가격정보</span>
					<span class="pd_date">업데이트 날짜</span>
				</div>
				<p class="fav">좋아요&nbsp;<span>10</span></p>
			</div>
		</div>
	`;
	var $ea_item = 8; //각 페이지별로 8개의 아이템을 보여주겠다는 초기 선언
	var $pager_li =  Math.ceil(($pd_arr.length/$ea_item));
	for(k= 0; k < $pager_li; k++){
		$(".pager ul").append("<li>"+(k+1)+"</li>");
	}

	for(i = 0; i <$ea_item ; i++ ){
		$(".pd_frame").append($pd_box);
	}
	function pd_sort(){
		$(".pd_box").each(function(index)
		{
			$(".pd_box").show();
			$(this).find(".pd_photo img").attr("src", "img/"+$pd_arr[index][0]);
			$(this).find(".pd_title").text($pd_arr[index][1]);
			$(this).find(".pd_text").text($pd_arr[index][2]);
			$(this).find(".pd_price").text($pd_arr[index][3]+"원");
			$(this).find(".pd_date").text($pd_arr[index][4]);
			$(this).find(".fav span").text($pd_arr[index][5]);
		});
	};
	$pd_arr.sort(function(a, b){  //sort() 메서드 : 순차적으로 나열을 진행하는 요소
		return  a[4] - b[4];
	});
	$pd_arr.reverse();
	pd_sort();

	//만약 pager의 통제에 의한 페이지 보여주기에서 각 페이지 별로 8씩 보여주며야 한다면
	/*
		1번(인덱스 0) 페이지에 인덱스 0 ~ 7까지 보여주여야 한다.
		2번(인덱스 1) 페이지에 인덱스 8 ~ 15까지 보여주여야 한다.
		3번(인덱스 2) 페이지에 인덱스 16 ~ 23까지 보여주여야 한다.
		.....
		n번(인덱스 n-1) 페이지에 인덱스 (n-1)*8 ~ (n*8)-1까지 보여주여야 한다.

	*/


	$(".pager li").eq(0).addClass("active");
	$(".pager li").click(function(){
		var $pager_index =$(this).index();
		console.log($pager_index);
		$(".pager li").removeClass("active");
		$(this).addClass("active");
		$(".pd_box").show();
/*		for($i = $ea_item*$pager_index; $i <= $ea_item*($pager_index+1) -1 ; $i++){
			$(".pd_frame").append($pd_box);
		}*/	
		$(".pd_box").each(function(index){

			if($pd_arr[$ea_item*$pager_index+index] != undefined){

				$(this).find(".pd_photo img").attr("src", "img/"+$pd_arr[$ea_item*$pager_index+index][0]);
				$(this).find(".pd_title").text($pd_arr[$ea_item*$pager_index+index][1]);
				$(this).find(".pd_text").text($pd_arr[$ea_item*$pager_index+index][2]);
				$(this).find(".pd_price").text($pd_arr[$ea_item*$pager_index+index][3]+"원");
				$(this).find(".pd_date").text($pd_arr[$ea_item*$pager_index+index][4]);
				$(this).find(".fav span").text($pd_arr[$ea_item*$pager_index+index][5]);
			}else{
				$(this).hide();
			}
		});


	});

	//최신순
	$(".date_sort").click(function(){
		$pd_arr.sort(function(a, b){  //sort() 메서드 : 순차적으로 나열을 진행하는 요소
			return  a[4] - b[4];
		});
		console.log("최신순 나열하기 -x" + $pd_arr);
		$pd_arr.reverse();
		console.log("최신순 나열하기" + $pd_arr);		
		pd_sort();
		$(".pager li").removeClass("active");
		$(".pager li").eq(0).addClass("active");

	});


	//낮은 가격순
	$(".low_sort").click(function(){
		$pd_arr.sort(function(a, b){  //sort() 메서드 : 순차적으로 나열을 진행하는 요소
			return  a[3] - b[3];
		});
		console.log($pd_arr);
		pd_sort();
		$(".pager li").removeClass("active");
		$(".pager li").eq(0).addClass("active");
	});
	//높은 가격순
	$(".high_sort").click(function(){
		$pd_arr.sort(function(a, b){  //sort() 메서드 : 순차적으로 나열을 진행하는 요소
			return  a[3] - b[3];
		});
		$pd_arr.reverse();
		console.log($pd_arr);
		pd_sort();
		$(".pager li").removeClass("active");
		$(".pager li").eq(0).addClass("active");
	});
	//좋아요순
	$(".fav_sort").click(function(){
		$pd_arr.sort(function(a, b){  //sort() 메서드 : 순차적으로 나열을 진행하는 요소
			return  b[5] - a[5];
		});
		console.log($pd_arr);
		pd_sort();
		$(".pager li").removeClass("active");
		$(".pager li").eq(0).addClass("active");
	});
	$(".sort").change(function(){
		var $sel_select = $(this).val();
		console.log("select value: ", $sel_select);
		if($sel_select == "date"){
			$pd_arr.sort(function(a, b){  //sort() 메서드 : 순차적으로 나열을 진행하는 요소
				return  a[4] - b[4];
			});
			$pd_arr.reverse();	
			pd_sort();
			$(".pager li").removeClass("active");
			$(".pager li").eq(0).addClass("active");
 			
		}else if($sel_select == "low"){
			$pd_arr.sort(function(a, b){  //sort() 메서드 : 순차적으로 나열을 진행하는 요소
				return  a[3] - b[3];
			});	
			pd_sort();
			$(".pager li").removeClass("active");
			$(".pager li").eq(0).addClass("active");

		}else if($sel_select == "high"){
			$pd_arr.sort(function(a, b){  //sort() 메서드 : 순차적으로 나열을 진행하는 요소
				return  a[3] - b[3];
			});
			$pd_arr.reverse();	
			pd_sort();
			$(".pager li").removeClass("active");
			$(".pager li").eq(0).addClass("active");
		}else if($sel_select == "fav"){
			$pd_arr.sort(function(a, b){  //sort() 메서드 : 순차적으로 나열을 진행하는 요소
				return  a[5] - b[5];
			});
			$pd_arr.reverse();
			pd_sort();
			$(".pager li").removeClass("active");
			$(".pager li").eq(0).addClass("active");
			
		}

	});					
});