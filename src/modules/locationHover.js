import { gsap } from "gsap";

export const locationHover = () => {
  const locationList = document.querySelector('.location__list');
  const locationItems = document.querySelectorAll('.location__item');

  const mediaQueryLG = window.matchMedia('(min-width: 1024px)');
  const mediaQueryXL = window.matchMedia('(min-width: 1240px)');

  for (const item of locationItems) {
    const content = item.querySelector('.location__content');
    const title = item.querySelector('.location__title');
    const description = item.querySelector('.location__description');

    const timeLine = gsap.timeline({ paused: true });

    timeLine.to(content, { opacity: 0, duration: 0.4 })
      .to(content, {
        transform: 'none',
        left: 0,
        bottom: 0,
        top: 'auto',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        duration: 0,
      })
      .to(title, {
        whiteSpace: 'unset',
        hyphens: 'auto',
        color: '#ffaa05',
        marginBottom: mediaQueryXL.matches ? '40px' : '24px',
        duration: 0,
      })
      .to(description, {
        display: 'block',
        duration: 0
      })
      .to(content, {
        opacity: 1,
        duration: 0.4,
      });

    item.addEventListener('mouseenter', () => {
      if (mediaQueryLG.matches) {
        timeLine.play();

        gsap.to(locationList, {
          '--background-image': `url('${item.dataset.image}')`,
          '--opacity': 1,
          duration: 1,
        });
      }
    });

    item.addEventListener('mouseleave', () => {
      if (mediaQueryLG.matches) {
        timeLine.reverse();

        gsap.to(locationList, {
          '--opacity': 0,
          duration: 1,
        });
      }
    });

    // Прогрузить заранее картинки в location
    const linkPreload = document.createElement('link');
    linkPreload.rel = 'preload';
    linkPreload.href = item.dataset.image;
    linkPreload.as = 'image';

    // Если не мобилка, прогрузить картинки в location
    if (mediaQueryLG.matches) {
      document?.head.append(linkPreload);
    }

    mediaQueryLG.addEventListener('change', (e) => {
      if (!e.matches) {
        content.style = '';
        title.style = '';
        description.style = '';
      } else {
        // Если не мобилка, прогрузить картинки в location (запасная проверка на устройствах при перевороте экрана)
        document?.head.append(linkPreload);
      }
    });
  }
};