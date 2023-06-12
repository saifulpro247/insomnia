(function($) {
    "use strict";


      $(".slider").owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        navText: ["<i class='bi bi-arrow-left-short'></i>", "<i class='bi bi-arrow-right-short'></i>"],
        dots: true,
        responsive:{
        576:{
            nav:false,
        }
        }
      });

    

})($);