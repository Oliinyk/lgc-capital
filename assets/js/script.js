$(document).ready(function () {

  // trusted-slider
  $('.trusted-slider').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          arrows: false,
          centerMode: true,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          arrows: false,
          centerMode: true,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }
    ]
  });

  //review-slider
  $('.review-slider').each(function() {
    $( this ).slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });
  });

});