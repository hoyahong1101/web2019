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

  window.onscroll = function() {stickyFunction()};
  var navbar = $("#sticky");
  var sticky = navbar.offset();

function stickyFunction(){
    if (Number(window.pageYOffset) >= 800 && Number(window.pageYOffset) <= 1200) {
      $("#sticky").addClass("sticky");
       $("#sticky").removeClass("sticky2");
    }else if(Number(window.pageYOffset) >= 1200) {
      $("#sticky").removeClass("sticky");
      $("#sticky").addClass("sticky2");
    }else{
      $("#sticky").removeClass("sticky");
        $("#sticky").removeClass("sticky2");
    }
    console.log("sticky", sticky.top);
    console.log("window", window.pageYOffset);
  }
  $('.h-cont-slick-wrap').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true

  });


  for(var i = 0; i < 6; i ++){
      var $randomNumber = Math.floor((Math.random() * 6) + 1);
      var $item = $(".h-cont-random-wrap .item").eq($randomNumber);
      $(".h-cont-random-wrap").prepend($item);
  }

});