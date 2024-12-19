// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import {Navigation, Pagination, Keyboard} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const heroSwiper = new Swiper('.premiere', {
  modules: [Navigation, Pagination, Keyboard],
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
  // when window width is >= 1440px
    1440: {
      pagination: {
        clickable: true,
      },
      // управление с клавиатуры
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      slideToClickedSlide: true,
    },
  },
});

/*if (index === slides.length - 1) {
  index = 0;
} else {
  index = index + 1;
}*/
/*
  heroSlider.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
      //const index = heroSwiper.activeIndex;
      for(let i = 0; i <= slides.length - 1; i++) {
        const bullet = paginationBullets[i].classList.contains('swiper-pagination-bullet-active');
      console.log(bullet);
      }
    }
  });
*/
/*const heroSlider = document.querySelector('.hero__slides'); // swiper
const slides = heroSlider.querySelectorAll('.premiere__slide'); // swiper-slide
let index = heroSwiper.activeIndex;
const paginationBullets = heroSlider.querySelectorAll('.swiper-pagination-bullet');

heroSlider.addEventListener('keydown', (event) => {
  if (event.key === 'Tab') {
    if (index === slides.length - 1) {
      index = 0;
    } else {
      index = index + 1;
    }

    heroSwiper.slideTo(index);
    paginationBullets.forEach((bullet) => bullet[index].focus());
  }
});*/

heroSwiper.init();
