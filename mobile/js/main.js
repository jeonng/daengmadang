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

   //가입 오류 
   var $join_btn =$('.go_join'),
       $join_input = $('.join_con .input-group');
       
   $join_btn.click(function(e){   
      e.preventDefault();
     
      $join_input.find('input').each(function(){
         var $join_val = $(this).val();
         var $sex_val = $('.join_con .sex input:checked').val();

         if($join_val == '' || $sex_val == undefined){
            $(this).parent('div').addClass('fail');
            $(this).siblings('div').addClass('error');
         }else{
            $(this).parent('div').removeClass('fail');
            $(this).siblings('div').removeClass('error');
         }

      });
   });


   $join_input.find('input').click(function(){
      $(this).parent('div').removeClass('fail');
      $(this).siblings('div').removeClass('error');
   });

   //DETAIL PAGE 
   var $detail_slide = $('.detail_top ul');

      $detail_slide.bxSlider({
         controls: false
      });

   //하트누르기 
   var $heart_click = $('.detail_top .icon a.heart');

   $heart_click.click(function(e){
      e.preventDefault();
      $(this).toggleClass('click');
   });

   //상세정보, 후기, 문의 
   var $detail_tab =$('.detail_info');
   var $detail_btn = $('.detail_info ul li');

   $detail_tab.tabs();

   $detail_btn.click(function(){
      $(this).addClass('check').siblings().removeClass('check');
   });

   //spinner
   var $count = $('#count');

   $count.spinner({
      min:1
   });

   //구매하기

   var $purchase_btn = $('.purchase > a '),
       $close_purchase = $('.purchase form >a ');
   
       $purchase_btn.click(function(e){
          e.preventDefault();
         $(this).siblings('form').addClass('purchase_up');
         $('div.bg').addClass('black');
       }); 

       $close_purchase.click(function(e){
          e.preventDefault();
         $(this).parent('form').removeClass('purchase_up');
         $('div.bg').removeClass('black');
       });
      // 수량 올리면 가겨증가 
   var $product_Count =$('.ui-button-icon');

   $product_Count.click(function(){
      var count_num = $('#count').attr('aria-valuenow');
      var total_money = 12100*count_num;

      $('.money_count').text(addComma(total_money)+'원('+count_num+'개)');

   });
   function addComma(num) {
      var regexp = /\B(?=(\d{3})+(?!\d))/g;
      return num.toString().replace(regexp, ',');
   }
       
       //장바구니 전체선택 
   var $allselect =$('.all-select'),
       $selectCart = $('input[name="select-cart"]:checkbox');

   $allselect.click(function(){
      $(this).toggleClass('all');
      if($(this).hasClass('all')){
         $selectCart.prop('checked',true);
      }else {
         $selectCart.prop('checked',false);
      }
   });

   
   var $value = 0;

   $('.chk').click(function(){
      if($selectCart.filter(':checked').length == 2){
         $allselect.siblings().prop('checked',true);
      }else{
         $allselect.siblings().prop('checked',false);
      }
   });

});