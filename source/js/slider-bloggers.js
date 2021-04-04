'use strict';

(function () {
  var sliderBloggers = document.querySelector('.bloggers-other');

  if (sliderBloggers) {
    var initBloggersSlider = new Swiper('.bloggers-other__container', {
      speed: 700,
      pagination: {
        el: '.bloggers-other__pagination',
        clickable: true,
        type: 'bullets',
      },
      navigation: {
        nextEl: '.bloggers-other__arrow--next',
        prevEl: '.bloggers-other__arrow--prev',
      },
      scrollbar: {
        el: '.bloggers-other__scrollbar',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 15,
        }
      },
    });
  }
  return initBloggersSlider;
})();
