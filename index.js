$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      responsiveBaseElement: 'body',
      responsiveClass: true,
      loop: true,
      margin: 10,
      nav: true,
      autoplay: false,
      autoplayTimeout: 5000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
     }
    });
  });
