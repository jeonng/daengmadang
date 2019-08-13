$(function(){
   $('.banner ul').bxSlider({
      controls: false
   });

   $('main .public ul').bxSlider({
      controls: false,
      pager: false,
      moveSlides :1,
      minSlides:2,
      maxSlides:2,
      slideWidth:163,
      slideMargin:10
   });

});