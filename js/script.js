$(document).ready(function(){
  var ww = $(window).width();
  var wh = $(window).height();

  //AOS
  AOS.init();


  //풀페이지는 제거


  //banner 스와이퍼
  var swiper = new Swiper(".mySwiper.banner_mask", {
    effect: "fade",
    loop : true,
    autoplay :{
        delay : 3000
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  
  //contact btn
  //방문상담
  $('.sec-5_r label[for="ra_1"] a').click(function(){
    $('.sec-5_r label[for="ra_1"] .btn-inner').css({
      'opacity':'1'
    });
    $('.sec-5_r label[for="ra_2"] .btn-inner').css({
      'opacity':'0'
    });
  });
  $('.sec-5_r label[for="ra_2"] a').click(function(){
    $('.sec-5_r label[for="ra_2"] .btn-inner').css({
      'opacity':'1'
    });
    $('.sec-5_r label[for="ra_1"] .btn-inner').css({
      'opacity':'0'
    });
  });
  //개인정보
  $('.sec-5_r .input-bottom label a').click(function(){
    $('.sec-5_r .input-bottom label .btn-inner').toggleClass('active');
  });


  media();
  function media(){
    if(ww >= 1350){
      //스크롤이벤트(스크롤시 발생하는 이벤트는 전부 on스크롤이벤트 걸어놓은 한곳에 넣어줌)
      $(window).scroll(function(){
        var sct = $(window).scrollTop();
        console.log(sct);

      //헤더 사이즈,색상 변경
        if(sct < wh){
          $('.header-area').removeClass('active');
          $('.menu').removeClass('active');
          $('.header-area').removeClass('on');
          $('.menu').removeClass('on');
          $('.menu-btn').removeClass('active');

        }else if(sct >= wh, sct < wh*3){
          $('.header-area').addClass('active');
          $('.menu').addClass('active');
          $('.header-area').removeClass('on');
          $('.menu').removeClass('on');
          $('.menu-btn').removeClass('active');

        }else if(sct >= wh*3, sct < wh*7){
          $('.header-area').addClass('on');
          $('.menu').addClass('on');
          $('.menu-btn').addClass('active');

        }else{
          $('.header-area').removeClass('on');
          $('.menu').removeClass('on');
          $('.header-area').addClass('active');
          $('.menu').addClass('active');
          $('.menu-btn').removeClass('active');
        }


        //sec-3 영역일때 svg 애니메이션 시작되게
        if(sct >= wh*3){
          $('.sec-3 .shape.box1').addClass('active');
          $('.sec-3 .shape.box2').addClass('active');
        }else{
          $('.sec-3 .shape.box1').removeClass('active');
          $('.sec-3 .shape.box2').removeClass('active');
        }


      });


      //sec-4 스와이퍼
      var swiper = new Swiper(".mySwiper.sec-4_mask", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
   
    }else if(ww < 1350 && ww >= 960){
      //menu-btn
      $('.menu-btn').click(function(){
        $('.menu').css({
          'right':'0'
        });
        $(this).css({
          'display':'none'
        })
      });
      $('.menu-in-btn').click(function(){
        $('.menu').css({
          'right':''
        });
        $('.menu-btn').css({
          'display':'block'
        })
      });

  
      //스크롤이벤트
      $(window).scroll(function(){
        var sct = $(window).scrollTop();
        console.log(sct);

        if(sct < wh){
          $('.header-area').removeClass('active');
        }else{
          $('.header-area').addClass('active');
        }

      });

      $('.shape.box1').addClass('on');
      $('.shape.box2').addClass('on');


      //sec-4 스와이퍼
      var swiper = new Swiper(".mySwiper.sec-4_mask", {
        slidesPerView: 2,
        spaceBetween: 40,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
        
    }else if(ww < 960){

      //header-area
      $('.header-area').css({
        'padding':'0 30px',
        'height':'70px'
      });
      $('.header-area .header-logo a').css({
        'width':'180px'
      })


      //menu-btn
      $('.menu-btn').click(function(){
        $('.menu').css({
          'right':'0'
        });
        $(this).css({
          'display':'none'
        })
      });
      $('.menu-in-btn').click(function(){
        $('.menu').css({
          'right':''
        });
        $('.menu-btn').css({
          'display':'block'
        })
      });

  
      //스크롤이벤트
      $(window).scroll(function(){
        var sct = $(window).scrollTop();
        console.log(sct);

        if(sct < wh){
          $('.header-area').removeClass('active');
        }else{
          $('.header-area').addClass('active');
        }

      });

      $('.shape.box1').addClass('on');
      $('.shape.box2').addClass('on');
      
    }else{}



  }

  


})//end
