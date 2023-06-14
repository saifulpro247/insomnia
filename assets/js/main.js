(function($) {
    "use strict";


  $('.single_slider_item').owlCarousel({
    items: 3,
    margin: 30,
    loop: true,
    dots: true,
    responsiveClass: true,
    responsive:{
      0:{
        items: 1,
        dots: false,
      },
      767:{
        items: 2
      },
      1200:{
        items: 3
      }

    }
  })

    

})($);
