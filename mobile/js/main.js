$(function(){

   //배너 슬라이드
   $('.banner ul').bxSlider({
      controls: false
   });

   //top5
   $('main .public ul').bxSlider({
      controls: false,
      pager: false,
      moveSlides :1,
      minSlides:2,
      maxSlides:5,
      slideWidth:163,
      slideMargin:10,
      responsive: true
   });

   //review 리뷰

   $('main .review ul').bxSlider({
      controls: false,
   });
});