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
      $(this).parent('li').siblings('li').find('ul').slideUp();
      $(this).parent('li').siblings('li').find('div').removeClass('upDown');
      $(this).next().slideToggle();
   });   

   // 탑버튼 
   var top_btn = $('.top_btn'),
       $window = $(window);

      $window.scroll(function(){
         if($(this).scrollTop() >=400){
            top_btn.fadeIn(700);
         }else{
            top_btn.fadeOut(700);
         }
      });

      top_btn.click(function(e){
         e.preventDefault();
         $('html').animate({scrollTop:0},500,'easeOutQuart');
      });

   //카테고리 정렬 

   var $list_btn = $('.select li');

   $list_btn.click(function(){
      $list_btn.find('svg').removeClass('choose');
      $(this).find('svg').addClass('choose');
      if($list_btn.find('.fa-th-list').hasClass('choose')){
         $('main').addClass('list');
      }else{
         $('main').removeClass('list');
      }
   });

   //로그인 

   var tab_login =$('.login_con'),
       member_mode =$('.login_con ul li'),
       $login_input =$('.lg_join .input-group'),
       $login_btn =$('.login_con button.goBtn');

   tab_login.tabs();

   member_mode.click(function(){
      member_mode.find('a').removeClass('mode');
      $login_input.removeClass('fail');
      $(this).find('a').addClass('mode');
      if($(this).find('a').attr('href')=='#nonmember'){
         $('.login_top div').html('비회원 이신가요?!');
      }else{
         $('.login_top div').html('로그인 해주세요!');
      }
   });
   //로그인 오류 
   
   $login_btn.on("click",function(e){
      e.preventDefault();
      $login_input.find('input').each(function(idx){
         var lg_value = $(this).val();

         if(lg_value==''){
            $(this).parent('div').addClass('fail');
            $(this).siblings('div').addClass('error');
         }else{
            $(this).parent('div').removeClass('fail');      
            $(this).siblings('div').removeClass('error');
         }

      });
      
      $login_input.find('input').click(function(){
         $(this).parent('div').removeClass('fail');
         $(this).siblings('div').removeClass('error');
      });  

   });


   //가입하기 

   var join_input = $('.join_con input'),
       sex_input =$('.join_con .sex input');

   join_input.click(function(){
      $(this).addClass('label_top');

      if(!sex_input.val()==''){
         $(this).siblings('div').addClass('check');
      }
   });



       
});