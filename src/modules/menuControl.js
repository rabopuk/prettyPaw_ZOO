import { gsap } from "gsap";

export const menuControl = () => {
	const navigationButton = document.querySelector('.navigation__button');
	const navigationList = document.querySelector('.navigation__list');
	const navigationItems = document.querySelectorAll('.navigation__item');

	const timeLine = gsap.timeline({ paused: true });

	timeLine.fromTo(navigationList,
		{ opacity: 0, display: 'none' },
		{ opacity: 1, display: 'block' });

	navigationItems.forEach((elem, i) => {
		const x = i % 2 ? 500 : -500;
		timeLine.from(elem, { opacity: 0, x, duration: 0.4 }, '-=0.4');
	});

	const openMenu = () => {
		navigationButton.classList.add('navigation__button_active');
		timeLine.play();
	};

	const closeMenu = () => {
		navigationButton.classList.remove('navigation__button_active');
		timeLine.reverse();
	};

	navigationButton.addEventListener('click', () => {
		if (navigationButton.classList.contains('navigation__button_active')) {
			closeMenu();
		} else {
			openMenu();
		}
	});

	const checkScreenSize = (e) => {
		// console.log('mediaQuery');
		if (e.matches) {
			gsap.set(navigationList, { opacity: 1, display: 'flex' });
			navigationItems.forEach((elem) => {
				gsap.set(elem, { opacity: 1, x: 0 });
			});
		} else {
			gsap.set(navigationList, { opacity: 0, display: 'none' });
			navigationItems.forEach((elem, i) => {
				const x = i % 2 ? 500 : -500;
				gsap.set(elem, { opacity: 0, x, duration: 0.4 });
				if (navigationButton.classList.contains('navigation__button_active')) {
					timeLine.restart();
				}
			});
		}
	};

	const mediaQuery = window.matchMedia('(min-width: 1240px)');

	mediaQuery.addEventListener('change', checkScreenSize);
	checkScreenSize(mediaQuery);

	navigationList.addEventListener('click', ({ target }) => {
		if (target.closest('.navigation__link') && !mediaQuery.matches) {
			closeMenu();
		}
	});
};