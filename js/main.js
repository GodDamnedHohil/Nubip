$(document).ready(function(){
  $('.hero').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    dots: true,
    prevArrow: $('.header-arrow-wrap_left'),
    nextArrow: $('.header-arrow-wrap_right'),
    autoplay: true,
    draggable: false,
    swipe: true,
    touchThreshhold: 10,
    autoplaySpeed: 5000,
    responsive : [
      { 
      breakpoint: 790,
      settings: {
        speed: 1500
      }
    },
  {
    breakpoint: 430,
    settings: {
      speed: 1000,
      appendArrows: false,
      variableWidth: true
    }
  }]
  });

  $('.offer__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.offer-arrow-wrap_left'),
    nextArrow: $('.offer-arrow-wrap_right'),
    asNavFor: $('.offer__img'),
    speed: 1000,
    autoplay: true,
    draggable: false,
    swipe: true,
    touchThreshhold: 10,
    autoplaySpeed: 5000
  })
  $('.offer__img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: $('.offer__slider'),
    speed: 1000,
    variableWidth: true,
    appendArrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  })
  $('.reviews__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $('.reviews-arrow-wrap_left'),
    nextArrow: $('.reviews-arrow-wrap_right'),
    speed: 2000,
    autoplay: true,
    draggable: false,
    swipe: true,
    touchThreshhold: 10,
    autoplaySpeed: 5000,
    responsive : [
    { 
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 1500
      }
    },
    { 
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000
      }
    },
  ]
  })

  $('.video__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $('.video-arrow-wrap_left'),
    nextArrow: $('.video-arrow-wrap_right'),
    speed: 2000,
    responsive : [
    { 
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    { 
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000
      }
    },
  ]
  })

  $('#search-logo').on('click', function(){
   $('.form-search').show(300);
  });
  $('#search-close-btn').on('click', function() {
    $('.form-search').hide(300);
  })



  $('.modal-window-change-btn').on('click', function(){
      $('.modal-window').hide(1000);
      $('.authors').show(900);
      $('.modal-window-change-btn-icon').toggleClass('rotated');
  })
  $('.authors-window-change-btn').on('click', function(){
    $('.modal-window').show(1000);
    $('.authors').hide(900);
    $('.modal-window-change-btn-icon').removeClass('rotated');
  })
  $('#menu-logo').on('click', function(){
    if($('.modal-window').hasClass('initialized')) {
      $('.modal-window').hide(100);
      $('.header__inner').removeClass('moved');
      $('.modal-window').removeClass('initialized');
      $('.menu__menu-logo').removeClass('menu__menu-logo-initialized');
      $('.arrow-container').show(300);
    }
    else {
      $('.header__inner').toggleClass('moved');
      $('.modal-window').toggleClass('initialized');
      $('.menu__menu-logo').toggleClass('menu__menu-logo-initialized');
      $('.arrow-container').hide(100);
      $('.modal-window').show(900);
    }
  })
  
  $("#authors-close-btn").on('click', function(){
    $('.authors').hide(500);
    $('.header__inner').removeClass('moved');
    $('.authors').removeClass('initialized');
    $('.menu__menu-logo').removeClass('menu__menu-logo-initialized');
    $('.arrow-container').show(300);
  })

  $(".modal-window-close-btn").on('click', function(){
    $('.modal-window').hide(500);
    $('.header__inner').removeClass('moved');
    $('.modal-window').removeClass('initialized');
    $('.menu__menu-logo').removeClass('menu__menu-logo-initialized');
    $('.arrow-container').show(300);
  })

  $('.header__logo-container').on('click', function(){
    if($('body').width() <= 790) {
      if($('.sidebar').hasClass('initialized')){
        $('.sidebar').hide(300);
        $('.sidebar').removeClass('initialized');
        $('.header__inner').removeClass('moved_alt');
        $('.arrow-container').show(300)
      }
      else {
        $('.sidebar').show(300);
        $('.sidebar').toggleClass('initialized');
        $('.header__inner').toggleClass('moved_alt');
        $('.arrow-container').hide(100)
      }
    }
  })
  $('.sidebar__close-btn').on('click', function() {
    $('.sidebar').hide(300);
    $('.sidebar').removeClass('initialized');
    $('.header__inner').removeClass('moved_alt');
    $('.arrow-container').show(300)
  })

	$(".development__tab-item").not(":first").hide();
  $(".development__tab-container .development__tab-buttons").click(function() {
	  $(".development__tab-container .development__tab-buttons").removeClass("development__tab-buttons-active").eq($(this).index()).addClass("development__tab-buttons-active");
    $(".development__tab-item").hide().eq($(this).index()).fadeIn();
    if($('#petAm').hasClass('development__tab-buttons-active') || $('#silica').hasClass('development__tab-buttons-active')) {
      if($('.development').hasClass('development_large')) {
        return 0;
      }
      else {
        $('.development').toggleClass('development_large');
      }
    }else{
      $('.development').removeClass('development_large')
    }
  } ).eq(0).addClass("development__tab-buttons-active");
})