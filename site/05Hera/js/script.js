$(document).ready(function(){
  var h_slider_wrap = $(".h_slider_wrap").bxSlider({
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
  
    controls:false 
  });
  $(".pre_btn").click(function(){
    h_slider_wrap.goToPrevSlide(); 
    });
  $(".next_btn").click(function(){
    h_slider_wrap.goToNextSlide();
    });

  $(window).scroll(function(){
    console.log($(window).scrollTop());
    if($(window).scrollTop() == 2200){
      $(".h_item_slide").css({"transform": "translateY(550px)"});
    }
  });  

});