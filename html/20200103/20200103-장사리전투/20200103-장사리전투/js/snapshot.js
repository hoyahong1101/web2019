$(document).ready(function(){
	$(".more_frame button").click(function(){
		$.ajax({
			url:"snapshot_sub.html",
			type:"post",
			success:function(result){
				$(".sp_second").html(result);
			}
		});
		$(this).cloest(".more_frame").slideUp("slow");
		$(".sp_second").slideDown("slow");
	});
});