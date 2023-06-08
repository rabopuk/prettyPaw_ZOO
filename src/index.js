import './index.html';
import './page.html';

// new modules
// !Добавлять библиотеки до своих стилей, чтоб можно было перекрывать своими стилями
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';

import { slidersInit } from './modules/sliders';
import { videoBackgroundInit } from './modules/videoBackground';
import { menuControl } from './modules/menuControl';
import { locationHover } from './modules/locationHover';
import { initScrollButton } from './modules/scrollTopButton';
import { pageControlInit } from './modules/pageControl';


//use modules

videoBackgroundInit();
menuControl();
locationHover();
initScrollButton('arrow-top', {
	hover: false,
});
pageControlInit();

slidersInit('.about__slider', {
	pagination: {
		el: '.about__slider-pagination',
		enabled: true,
	},
});

const careerImageItems = document.querySelectorAll('.career__image-item');

careerImageItems.forEach((item, i) => {
	item.classList.add(`career__image-item_${i % 2 ? 'even' : 'odd'}`);
});

// https://swiperjs.com/swiper-api#param-breakpoints
slidersInit('.career__slider', {
	pagination: {
		el: '.career__slider-pagination',
		enabled: true,
	},
	breakpoints: {
		768: {
			slidesPerView: 'auto',
			spaceBetween: 12,
			pagination: {
				enabled: false,
			}
		},
		1024: {
			slidesPerView: 'auto',
			spaceBetween: 16,
			pagination: {
				enabled: false,
			}
		},
		1240: {
			slidesPerView: 'auto',
			spaceBetween: 16,
			pagination: {
				enabled: false,
			}
		},
		1600: {
			slidesPerView: 'auto',
			spaceBetween: 24,
			pagination: {
				enabled: false,
			}
		},
		1920: {
			slidesPerView: 'auto',
			spaceBetween: 32,
			pagination: {
				enabled: false,
			}
		},
		2560: {
			slidesPerView: 'auto',
			spaceBetween: 40,
			pagination: {
				enabled: false,
			}
		},
	}
});
