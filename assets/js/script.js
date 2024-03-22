$(document).ready(function(){

  // trusted-slider
  if($('.trusted-slider').length) {
    $('.trusted-slider').slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    });
  }

  //review-slider
  if($('.review-slider').length) {
    $('.review-slider').each(function() {
      $( this ).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
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
              arrows: false,
            }
          }
        ]
      });
    });
  }

  // modal
  $('.modal-toggle').on('click', function(e) {
    e.preventDefault();

    $('.modal-form .iconPlacejs img').remove();
    let checkedId = $('input[type=radio]:checked').attr('id');
    $('<img src="assets/images/'+checkedId+'.svg" alt="'+checkedId+'">').appendTo('.modal-form .iconPlacejs');

    $('.modal').toggleClass('is-visible');
  });

});