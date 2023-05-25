import './index.html';


// new modules  // !Добавлять библиотеки до своих стилей, чтоб можно было перекрывать своими стилями

import 'swiper/scss';
import 'swiper/scss/pagination';
import { slidersInit } from './modules/sliders';
import { videoBackgroundInit } from './modules/videoBackground';
import { menuControl } from './modules/menuControl';

import './index.scss';


//use modules

videoBackgroundInit();
menuControl();

slidersInit('.about__slider', {
  pagination: {
    el: '.about__slider-pagination',
  },
});

// https://swiperjs.com/swiper-api#param-breakpoints
slidersInit('.career__slider', {
  pagination: {
    el: '.career__slider-pagination',
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 12,
      pagination: false,
    },
    1024: {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: false,

    },
    1240: {
      slidesPerView: 'auto',
      spaceBetween: 20,
      pagination: false,

    },
    1600: {
      slidesPerView: 'auto',
      spaceBetween: 24,
      pagination: false,
    },
    1920: {
      slidesPerView: 'auto',
      spaceBetween: 32,
      pagination: false,
    },
    2560: {
      slidesPerView: 'auto',
      spaceBetween: 40,
      pagination: false,
    },
  }
});
