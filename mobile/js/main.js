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

   //메뉴 햄버거 누르기 
   var $bars = $('.top_icon .bars');

   $bars.click(function(e){
      e.preventDefault();
      $('body').addClass('aside_open');

   });
   //x버튼 누르기 
   var $aside_close = $('.close .times');

   $aside_close.click(function(e){
      e.preventDefault();
      $('body').removeClass('aside_open');
   });
   //aside 메뉴 slideup
   var $slidemenu = $('aside .main_menu ul'),
       $aside_menu= $slidemenu.siblings('div');
       

   $slidemenu.slideUp();

   $aside_menu.click(function(e){
      e.preventDefault();
      $(this).toggleClass('upDown');
      $(this).find('a').toggleClass('click');
      $(this).find('svg').toggleClass('click');
      if($(this).hasClass('upDown')){
         $(this).siblings('ul').slideDown(350);
      }else{
          $(this).siblings('ul').slideUp(350);
      }
   });   

});