$(document).ready(function(){
	$(".sp-box").mouseover(function(){
		$(".sp-box").css("width","20%");
		$(this).css("width", "40%");
	});
	$(".sp-box").mouseleave(function(){
		$(".sp-box").css("width","25%");
	});
	$(".video").hover(hoverVideo, hideVideo);
	function hoverVideo(e){
		$("video", this).get(0).play();
	}
	function hideVideo(e){
		$("video", this).get(0).pause();
	}
});