('use strict');

const body = document.querySelector('body');

// BUTTONS
const btnScrollTo = document.querySelectorAll('.btn--scroll-to');
const logoButton = document.getElementById('logo-button');

// SCROLLING
const offerSec = document.getElementById('offer');
const aboutSec = document.getElementById('about');
const realizationSec = document.getElementById('realization');
const contactSec = document.getElementById('contact');
const navigationListMobile = document.getElementById('navigationListMobile');
const navigationListDesktop = document.getElementById('navigationListDesktop');

// SEARCH BAR
const searchBar = document.getElementById('search-bar-roll');
const searchIcon = document.getElementById('search-icon');

// SLIDER
const slider = document.getElementById('slider');
const silderBtnLeft = document.getElementById('slider-btn--left');
const silderBtnRight = document.getElementById('slider-btn--right');
const slides = document.querySelectorAll('.slide');

// GALLERY
const galleryBtn = document.getElementById('btn-gallery');
const galleryGradient = document.getElementById('gallery__gradinet');
const galleryBox = document.getElementById('section__gallery');
const galleryOverflow = document.getElementById('gallery-overflow');
const galleryImiages = document.querySelectorAll('.gallery__image');

// MODAL
const modalOverlay = document.getElementById('modal__overlay');
const modalContainer = document.getElementById('modal__container');
const modalBtnBefor = document.getElementById('modal__btn-befor');
const modalBtnNext = document.getElementById('modal__btn-next');
const modalImage = document.querySelector('.modal__image');

// NAVIGATION
const mobileMenuSwitch = document.getElementById('mobile-menu-switch');
const mobileMenu = document.getElementById('mobile-menu');
const dropdownButton = document.getElementById('dropdownButton');
const dropdownNavbar = document.getElementById('dropdownNavbar');
const dropdownButtonMobile = document.getElementById('dropdownButtonMobile');
const dropdownNavbarMobile = document.getElementById('dropdownNavbarMobile');
const navigation = document.querySelector('nav');

// CARDS
const cardButtonProject = document.getElementById('card__button--project');
const cardInfoProject = document.getElementById('card__info--project');
const cardButtonVisualization = document.getElementById(
  'card__button--visualization',
);
const cardInfoVisualization = document.getElementById(
  'card__info--visualization',
);
const cardButtonRealisation = document.getElementById(
  'card__button--realisation',
);
const cardInfoRealisation = document.getElementById('card__info--realisation');

///////////////////////////////////////
// SLIDER

const calcHeight = function () {
  let sliderHeightTemp = 0;

  slides.forEach(slide => {
    if (sliderHeightTemp < slide.offsetHeight) {
      sliderHeightTemp = slide.offsetHeight;
    }
  });
  slider.style.height = `${sliderHeightTemp}px`;
};

let curSlide = 0;
const maxSlide = slides.length;

const slideFunc = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

const transitionTimeOut = function () {
  slides.forEach(s => {
    s.style.transition = 'transform 0.3s ease-out';
  });
};

const nextSlide = function () {
  if (curSlide == maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slideFunc(curSlide);
};

const previusSlide = function () {
  if (curSlide == 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  slideFunc(curSlide);
};

window.addEventListener('load', function () {
  calcHeight();
});

setTimeout(slideFunc(0));
setTimeout(transitionTimeOut, 100);

silderBtnRight.addEventListener('click', nextSlide);
silderBtnLeft.addEventListener('click', previusSlide);

///////////////////////////////////////
// SEARCH BAR

searchIcon.addEventListener('click', function () {
  searchBar.focus();
});

///////////////////////////////////////
//// CARDS

const cardsAnimation = function (trigger, target) {
  trigger.addEventListener('click', function () {
    target.focus();
  });
};

cardsAnimation(cardButtonProject, cardInfoProject);
cardsAnimation(cardButtonRealisation, cardInfoRealisation);
cardsAnimation(cardButtonVisualization, cardInfoVisualization);

///////////////////////////////////////
//// SCROLLING EVENTS

const navHeight = navigation.offsetHeight;

logoButton.addEventListener('click', function () {
  slider.scrollIntoView({ behavior: 'smooth' });
});

btnScrollTo.forEach(btn => {
  btn.addEventListener('click', function () {
    const yPosition = realizationSec.offsetTop;
    window.scrollTo({ top: yPosition - navHeight, behavior: 'smooth' });
  });
});

const smoothSlide = function (selector) {
  selector.addEventListener('click', function (event) {
    event.preventDefault();

    if (
      event.target.classList.contains('nav__link') ||
      event.target.classList.contains('nav-mobile__link')
    ) {
      const id = event.target.getAttribute('href');
      const yPosition = document.querySelector(id).offsetTop;
      const top = yPosition - navHeight;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  });
};

smoothSlide(navigationListDesktop);
smoothSlide(navigationListMobile);

///////////////////////////////////////
// MOMILE MENU

const toggleDisplay = function (trigger, target) {
  if (!target || !trigger) {
    console.warn('element not existing');
    return;
  }
  let defaultDisplay = window
    .getComputedStyle(target)
    .getPropertyValue('display');
  trigger.addEventListener('click', e => {
    target.style.display =
      target.style.display === 'block' ? defaultDisplay : 'block';
  });
};

const toggleMobileDropdown = function (trigger, target) {
  if (!target || !trigger) {
    console.warn('element not existing');
    return;
  }
  let defaultDisplay = window
    .getComputedStyle(target)
    .getPropertyValue('display');
  trigger.addEventListener('click', e => {
    target.style.display =
      target.style.display === 'contents' ? defaultDisplay : 'contents';
  });
};

const closeDrodownMenu = function (menuButton, dropDownMenu, event) {
  const outTargetDropdown = !dropDownMenu.contains(event.target);
  const outTargetDropdownButton = !menuButton.contains(event.target);

  if (outTargetDropdown === true && outTargetDropdownButton === true) {
    dropDownMenu.style.display = 'none';
  }
};

window.addEventListener('click', function (event) {
  closeDrodownMenu(dropdownButtonMobile, dropdownNavbarMobile, event);
  closeDrodownMenu(dropdownButton, dropdownNavbar, event);
});

toggleDisplay(mobileMenuSwitch, mobileMenu);
toggleDisplay(dropdownButton, dropdownNavbar);
toggleMobileDropdown(dropdownButtonMobile, dropdownNavbarMobile);

mobileMenuSwitch.addEventListener('click', function () {
  if (mobileMenu.style.display === 'none') {
    navigation.style.borderBottomRightRadius = '0px';
    navigation.style.borderBottomLeftRadius = '0px';
  } else if (
    mobileMenu.style.display === 'block' ||
    mobileMenu.style.display === ''
  ) {
    navigation.style.borderBottomRightRadius = '24px';
    navigation.style.borderBottomLeftRadius = '24px';
  }
});

///////////////////////////////////////
// GALERY

const imagesArray = [
  './src/img/project-1.jpg',
  './src/img/project-2.jpg',
  './src/img/project-3.jpg',
  './src/img/project-4.jpg',
  './src/img/project-5.jpg',
  './src/img/project-6.jpg',
  './src/img/project-7.jpg',
  './src/img/project-8.jpg',
  './src/img/project-9.jpg',
  './src/img/project-10.jpg',
  './src/img/project-11.jpg',
];

///////////////////////////////////////
// src for dynamic loading in build version
// const imagesArray = [
//   './img/project-1.jpg',
//   './img/project-2.jpg',
//   './img/project-3.jpg',
//   './img/project-4.jpg',
//   './img/project-5.jpg',
//   './img/project-6.jpg',
//   './img/project-7.jpg',
//   './img/project-8.jpg',
//   './img/project-9.jpg',
//   './img/project-10.jpg',
//   './img/project-11.jpg',
// ];

let targetImgSource = '';

imagesArray.forEach((el, index) => {
  let img = document.createElement('img');
  img.src = el;

  img.addEventListener('click', function (e) {
    modalOverlay.style.display = 'block';
    modalContainer.style.display = 'flex';
    targetImgSource = e.target.src;

    modalImage.src = targetImgSource;
  });

  if (index < 6) {
    img.classList.add('gallery__image');
  } else {
    img.classList.add(
      'gallery__image',
      'load-img',
      'hidden',
      'opacity-0',
      'transition-all',
      'duration-300',
    );
  }
  galleryBox.appendChild(img);
});

const findImageIndex = () =>
  imagesArray
    .map(
      currentValue =>
        currentValue.split('/')[currentValue.split('/').length - 1],
    )
    .indexOf(targetImgSource.split('/')[targetImgSource.split('/').length - 1]);

modalBtnBefor.addEventListener('click', function () {
  let index = findImageIndex();

  if (index === 0) {
    modalImage.src = imagesArray[imagesArray.length - 1];
    targetImgSource = imagesArray[imagesArray.length - 1];
  } else {
    modalImage.src = imagesArray[index - 1];
    targetImgSource = imagesArray[index - 1];
  }
});

modalBtnNext.addEventListener('click', function () {
  let index = findImageIndex();

  if (index === imagesArray.length - 1) {
    modalImage.src = imagesArray[0];
    targetImgSource = imagesArray[0];
  } else {
    modalImage.src = imagesArray[index + 1];
    targetImgSource = imagesArray[index + 1];
  }
});

const gallery = new Macy({
  container: '#section__gallery',
  mobileFirst: true,
  columns: 2,
  breakAt: {
    960: {
      columns: 3,
    },
    1280: {
      margin: {
        x: 44,
        y: 44,
      },
    },
    1460: 4,
  },
  margin: {
    x: 30,
    y: 30,
  },
});

let galleryImigesLoading = document.querySelectorAll('.load-img');

galleryBtn.addEventListener('click', function () {
  galleryGradient.style.height = '0';
  gallery.runOnImageLoad(function () {
    galleryImigesLoading.forEach(el => {
      el.style.display = 'block';
      el.style.opacity = 1;
    });
    gallery.recalculate(true);
  }, true);

  galleryBtn.style.display = 'none';
  galleryOverflow.style.height = 'auto';
});

modalOverlay.addEventListener('click', function (e) {
  modalOverlay.style.display = 'none';
  modalContainer.style.display = 'none';
});

window.addEventListener('load', function () {
  let galleryDinamicSize = galleryBox.offsetHeight;
  galleryOverflow.style.height = `${galleryDinamicSize / 1.5}px`;
});

///////////////////////////////////////
// ALL RESIZE OPTIONS
window.addEventListener('resize', function () {
  // FOR SILDER
  calcHeight();
  // FOR GALLERY
  let galleryDinamicSize = galleryBox.offsetHeight;
  galleryOverflow.style.height = `${galleryDinamicSize / 1.5}px`;
  galleryGradient.style.height = '100%';
  galleryBtn.style.display = 'block';

  // FOR NAVIGATION
  mobileMenu.style.display = 'none';
  navigation.style.borderBottomRightRadius = '0px';
  navigation.style.borderBottomLeftRadius = '0px';
});
//
///////////////////////////////////////
