$(document).ready(function () {
  var swiper = new Swiper(".mySwiperHome", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });


  $('body').on('click','.burger',function (e) {
    if(!$(e.currentTarget).siblings('.navLinks').hasClass('active')){
      $(e.currentTarget).siblings('.navLinks').addClass('active');
    }else{
      $(e.currentTarget).siblings('.navLinks').removeClass('active');
    }
  });

});
