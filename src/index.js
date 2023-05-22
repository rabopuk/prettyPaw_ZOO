import './index.html';


// new modules  // !Добавлять библиотеки до своих стилей, чтоб можно было перекрывать своими стилями

import 'swiper/scss';
import 'swiper/scss/pagination';
import { slidersInit } from './modules/sliders';

import './index.scss';


//use modules

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
      spaceBetween: 30,
      pagination: false,
    },
    1024: {
      slidesPerView: 'auto',
      spaceBetween: 26,
      pagination: false,

    },
    1240: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      pagination: false,

    },
    // 1600: {
    //   slidesPerView: 'auto',
    //   spaceBetween: 20,
    //   pagination: false,
    // }
  }
});


const videoBG = document.querySelector('.video-bg');
videoBG.innerHTML = `
  <source src="video/video.mp4" type="video/mp4">
  <source src="video/video.webm" type="video/webm">
`;