(function($) {
    "use strict";
// Menu js for Position fixed
    $(window).scroll(function(){
      var window_top = $(window).scrollTop() + 1; 
      if (window_top > 200) {
        $('.header_menu_area').addClass('menu_fixed animated fadeInDown');
      } else {
        $('.header_menu_area').removeClass('menu_fixed animated fadeInDown');
      }
    }); 


// testimonial slider
  $(".single_slider_item").owlCarousel({
    items: 3,
    margin: 30,
    loop: true,
    dots: true,
    responsiveClass: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      767: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  }); 
  
  $(".single_service_slider").owlCarousel({
    items: 3,
    margin: 30,
    loop: true,
    dots: true,
    responsiveClass: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      767: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  $(".related_slider").owlCarousel({
    items: 4,
    margin: 30,
    loop: true,
    dots: true,
    responsiveClass: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      767: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });


  // mixitup
  var mixer = mixitup('.project_filter');

    

})($);
