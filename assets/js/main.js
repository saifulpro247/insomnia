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
<<<<<<< HEAD

       // mobile menu
       $(".menu_humberger").on("click", function () {
        $(".mobile_menus").toggleClass("d-block");
        
        $(".has-menu").on("click", function () {
          $(".sub-menu").toggleClass("d-block").css("opacity", "1");
        });
      });
=======
    
    // mobile menu
    $(".menu_humberger").on("click", function () {
      $(".mobile_menus").toggleClass("d-block");
      
      $(".has-menu").on("click", function () {
        $(".sub-menu").toggleClass("d-block").css("opacity", "1");
      });
    });
>>>>>>> 5525d1c8ba16c0b4f1bf17df4848b4b83da6ae0c

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
