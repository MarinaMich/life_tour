// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import {Navigation, Pagination, Keyboard} from 'swiper/modules';

const heroSwiper = new Swiper('.premiere', {
  modules: [Navigation, Pagination, Keyboard],
  loop: true,
  grabCursor: true,
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
// Слайдер с вариантами туров по горам

const tours = new Swiper('.tours__slides', {
  modules: [Navigation, Keyboard],
  loop: false,
  grabCursor: true,
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      slideToClickedSlide: true,
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.tours__button-next',
    prevEl: '.tours__button-prev',
  },
});

// Слайдер с информацией о тренерах

const trainers = new Swiper('.training__slides', {
  modules: [Navigation, Keyboard],
  loop: false,
  grabCursor: true,
  initialSlide: 2,
  breakpoints: {
    // when window width is >= 768px
    768: {
      initialSlide: 0,
      slidesPerView: 3,
      spaceBetween: 20,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      slideToClickedSlide: true,
    },
    // when window width is >= 1440px
    1440: {
      initialSlide: 0,
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.training__button-next',
    prevEl: '.training__button-prev',
  },
});

// Слайдер с отзывами

const reviews = new Swiper('.reviews__slides', {
  modules: [Navigation, Keyboard],
  loop: false,
  autoHeight: true,
  grabCursor: true,
  breakpoints: {
    // when window width is >= 768px
    768: {
      autoHeight: false,
      slidesPerView: 1.232,
      spaceBetween: 30,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      slideToClickedSlide: true,
    },
    // when window width is >= 1440px
    1440: {
      autoHeight: false,
      slidesPerView: 1.72,
      spaceBetween: 120,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },
});

// слайдер преимуществ

const advSlides = new Swiper('.adv__slides', {
  modules: [Navigation],
  enabled: false,
  slidesPerView: 'auto',
  breakpoints: {
    1440: {
      enabled: true,
      spaceBetween: 30,
      initialSlide: 1,
      grabCursor: true,
      loop: true,
      slidesPerGroup: 2,
      slidesPerView: 'auto',
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      slideToClickedSlide: true,
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.adv__button-next',
    prevEl: '.adv__button-prev',
  },
});


// галерея

const gallery = new Swiper ('.gallery__slides', {
  modules: [Navigation],
  enabled: true,
  spaceBetween: 5,
  loop: true,
  slidesPerView: 'auto',
  grabCursor: true,
  breakpoints: {
  // when window width is >= 768px
    768: {
      slidesPerView: 'auto',
      spaceBetween: 5,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
        slideToClickedSlide: true,
      },
    },
    // when window width is >= 1440px
    1440: {
      enabled: false,
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.gallery__button-next',
    prevEl: '.gallery__button-prev',
  },
});

heroSwiper.init();
tours.init();
trainers.init();
reviews.init();
advSlides.init();
gallery.init();
