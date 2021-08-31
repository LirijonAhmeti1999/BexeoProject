const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 1,
    centeredSlides: true,
    slideToClickedSlide: true,
    loop: true,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    
  });

    var swiperi = new Swiperi(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".mySwiperPagination",
            clickable: true
        }
    });