import { initSlider, initSliderNav } from "./slickSlider";
import { validate } from './validate';
import { showInputError, removeInputError } from './form';

// menu mobile
let menuBtn = document.querySelector(".open-menu");
let menu = document.querySelector(".header-nav--mobile");

if (menuBtn) {
  menuBtn.addEventListener("click", openMenu);

  function openMenu(event) {
    menu.classList.toggle("header-active");
    menuBtn.classList.toggle("open-menu--active");
    document.documentElement.style.overflowY = menu.classList.contains('header-active') ? 'hidden' : 'auto';
  }
}

// Init carousel
const slider = $('[data-slick-slider]');
const carouselNav = $('.carousel-nav');
const caroiselNavItems = $('.carousel-nav .carousel-nav-item');

if (slider.length) {
  initSlider(slider);
}

if (carouselNav && caroiselNavItems.length) {
  initSliderNav(caroiselNavItems);
}

// Init Tabs
$('[data-tab-nav] a').on('click', function(e) {
  e.preventDefault();
  $('[data-tab-nav] a').removeClass('active');
  $(this).tab('show');
});

// Range Image Slider
function rangeImageSlider() {
  const img = document.querySelector('.range-img');
  const naturalImg = document.querySelector('.range-img img');
  const control = $('#range-img-control');

  if (!control || !img) return;
  control.slider({
    value: 0,
    min: 0,
    max: 100,
    step: 0.5,
    slide: function(event, ui) {
      img.style.backgroundPositionX = `${ui.value}%`;
    },
  });

  let mouseIsPressed = false;
  let startPos = 0;
  let naturalImgWidth = naturalImg.naturalWidth;

  function onMouseDown() {
    mouseIsPressed = true
  }

  function onMouseUp() {
    mouseIsPressed = false;
    startPos = 0;
  }

  function onMouseMove(e) {
    if (!mouseIsPressed) {
      return;
    }

    if (startPos === 0) {
      startPos = e.offsetX || e.touches[0].screenX;
    }

    let difference = ((((e.offsetX || e.touches[0].screenX) - startPos) / naturalImgWidth) * 100) / 29;
    let currentBgPos = parseFloat(img.style.backgroundPositionX) || 0;
    let pos;
    // console.log('startPos', startPos);
    // console.log('difference', difference);
    // console.log('currentBgPos', currentBgPos);
    // console.log('naturalImgWidth', naturalImgWidth);
    // console.log('==========================');
    if (difference < 0) {
      pos = -currentBgPos + difference;
      if (pos < -100) return;
      control.slider('value', Math.abs(pos));
      img.style.backgroundPositionX = `${Math.abs(pos)}%`;
    } else {
      pos = currentBgPos - difference;
      if (Math.abs(pos) < 2) pos = 0;
      control.slider('value', Math.abs(pos));
      img.style.backgroundPositionX = `${Math.abs(pos)}%`;
    }
  }

  img.addEventListener('mousedown', onMouseDown);
  img.addEventListener('touchstart', onMouseDown);
  document.addEventListener('mouseup', onMouseUp);
  document.addEventListener('touchend', onMouseUp);
  img.addEventListener('mousemove', onMouseMove);
  img.addEventListener('touchmove', onMouseMove);
}
// init range image slider
rangeImageSlider();

// Set bg images
function setImageBgFromDataUrl() {
  const images = document.querySelectorAll('[data-image-bg]');
  if (!images.length) return;

  images.forEach(img => {
    const url = img.dataset.imageBg;
    img.style.backgroundImage = `url(${url})`;
  });
}

setImageBgFromDataUrl();

// Poppover init
$(function() {
  $('[data-toggle="popover"]').popover({ 
    trigger: 'hover',
    animation: true
  });
});

$('[data-toggle="popover"]').on('show.bs.popover', function(e) {
  const openedPoppover = document.querySelector('[id^="popover"]');
  $(openedPoppover).popover('hide');
});

$('[data-toggle="popover"]').on('shown.bs.popover', function(e) {
  e.currentTarget.classList.add('active-poppover');
  const parent = e.currentTarget.closest('.poppover-item');

  if (parent) {
    parent.classList.add('active-poppover-item');
  }
});

$('[data-toggle="popover"]').on('hidden.bs.popover', function(e) {
  e.currentTarget.classList.remove('active-poppover');
  const poppoverContainer = e.currentTarget.closest('.poppover-container');
  const parent = e.currentTarget.closest('.poppover-item');

  if (parent) {
    parent.classList.remove('active-poppover-item');
  }
});

// contact-us map slider

$('.map-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  infinity: true,
  autoplay: true
});

// Team slider
$('[data-team-slider]').slick({
  centerMode: true,
  centerPadding: '80px',
  slidesToShow: 8,
  infinite: true,
  dots: false,
  arrows: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1629,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});

let teamSliderInterval = null;
let timeout = 1000;

$('.team-carousel .slick-prev').on('mousemove', (e) => {
  timeout = (e.target.clientWidth - e.offsetX) / 100;
  clearInterval(teamSliderInterval);
  moveSlider('slickPrev', e);
});

$('.team-carousel .slick-prev').on('mouseover', (e) => moveSlider('slickPrev', e));
$('.team-carousel .slick-prev').on('mouseleave', (e) => clearInterval(teamSliderInterval));

$('.team-carousel .slick-next').on('mousemove', (e) => {
  timeout = (e.target.clientWidth - e.offsetX) / 100;
  clearInterval(teamSliderInterval);
  moveSlider('slickNext', e);
});

$('.team-carousel .slick-next').on('mouseover', (e) => moveSlider('slickNext', e));
$('.team-carousel .slick-next').on('mouseleave', (e) => clearInterval(teamSliderInterval));

function moveSlider(moveTo, e) {
  teamSliderInterval = setInterval(() => {
    $('[data-team-slider]').slick(moveTo);
  }, timeout);
}

// Init WoW animation
if (window.AOS) {
  AOS.init();
}

// animate header menu on scroll
(function($){
  $(window).on('load', function(){
    var tempScrollTop, currentScrollTop = 0;
    var header = $('.header');

    var windowWidth = $(window).width();
    if (windowWidth < 768) {
        header.addClass("pos-fixed is-fixed show-header");
        return;
    }
    function onScroll(){
      var windowHeight = $(window).height();

      currentScrollTop = $(window).scrollTop();

      if (currentScrollTop > windowHeight+100 ){
          header.addClass("is-fixed");
      } else if ( currentScrollTop == 0){
          header.removeClass("is-fixed");
      }
      if (tempScrollTop < currentScrollTop ){
          header.removeClass('show-header');
      }
      else if (tempScrollTop > currentScrollTop ){
          header.addClass('show-header');
      }
      tempScrollTop = currentScrollTop;
    }
    document.addEventListener('DOMContentLoaded', onScroll)
    $(window).on('scroll', onScroll);
  });
})(jQuery);

// Input file init
document.querySelectorAll('[data-upload-btn]').forEach(item => {
  item.addEventListener('change', e => {
    const parent = item.closest('.input-file');
    const inputText = parent.querySelector('[data-file-name]');
    inputText.value = item.value.replace('C:\\fakepath\\', '');
    inputText.classList.add('focused');
  });
});

// Range slider init for contact us form
function teamCountRangeSliderInit() {
  const control = $('.team-count-range');

  if (!control.length) return;

  control.slider({
    value: 0,
    min: 0,
    max: 10,
    step: 1,
    slide: function(event, ui) {
      const parent = ui.handle.closest('label');
      const mainCheckboxParent = ui.handle.closest('.project-type-checkbox-item');
      const mainCheckbox = mainCheckboxParent.querySelector('input[name="team-type"]');
      const counter = parent.querySelector('.team-counter');
      const nestedRadio = parent.querySelectorAll('.project-team-type-ragio-item input');
      counter.textContent = ui.value;
      nestedRadio.forEach(el => (el.disabled = !Boolean(ui.value)));
      mainCheckbox.checked = Boolean(ui.value);
      if (!ui.value) {
        nestedRadio.forEach(el => (el.checked = false));
      }
    },
  });
}

teamCountRangeSliderInit();

// input blur

 $('.input-item textarea').on('blur', addClassFormElement);

 $('.input-item input').on('blur', addClassFormElement);

 function addClassFormElement() {
  if ($(this).val() !== '') {
    $(this).addClass('focus-blur');
  } else {
    $(this).removeClass('focus-blur');
  }
 }

// Project timber, video dashboard
const gameIcons = document.querySelectorAll('[data-video-src]');
const gamePreviewVideo = document.querySelector('.game-preview-wrap video');

function onGameIconClick(e) {
  const parent = e.target.closest('.character-game-item');
  const newVideoSrc = parent.dataset.videoSrc;

  gameIcons.forEach(icon => icon.classList.remove('active'));
  parent.classList.add('active');

  const indexVideoSrc = gamePreviewVideo.src.indexOf('public/video');
  const oldSrc = gamePreviewVideo.src.slice(indexVideoSrc);
  if (oldSrc !== newVideoSrc) {
    gamePreviewVideo.src = newVideoSrc;
  }
}

if (gameIcons && gamePreviewVideo) {
  gameIcons.forEach(icon => icon.addEventListener('click', onGameIconClick));  
}

// Partners images carousel
// home-inner-partners data-slick-slider
$('.home-inner-partners').slick({
  dots: false,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 10,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});

$('.character-carousel-mobile').slick({
  dots: true,
  arrows: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
})

$('[data-tips-slider]').slick({
  "slidesToShow": 4,
  "slidesToScroll": 1,
  "dots": true,
  "adaptiveHeight": true,
  responsive: [
    {
      breakpoint: 1629,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})

$('.works-menu-carusel-mobile').slick({
  "dots": true,
  infinite: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

// Form validation
const form = document.querySelector('.contact-us-form form');
const [...inputs] = document.querySelectorAll('[data-required]');

if (form && inputs.length) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    onSubmit();
  });
  
  inputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)));
  
  // Handlers
  function onSubmit() {
    const isValidForm = inputs.every(el => {
      const isValidInput = validate(el);
      if (!isValidInput) {
        showInputError(el);
      }
      return isValidInput;
    });
  
    if (!isValidForm) return;
    // Made any actions
  }
}

// web services fixed process flow
const processFlowCarouselSettings = {
  dots: false,
  infinite: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1630,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
};

$('.process-flow-list-carousel a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  console.dir(e.target, e.relatedTarget);
  const carouselID = e.target.hash;
  console.log(carouselID)
  $(`${carouselID} .process-flow-list`).slick(processFlowCarouselSettings);
})

$('#first .process-flow-list').slick(processFlowCarouselSettings);


// timber-carousel
$('.timber-carousel .service-fade-carousel').slick({
  "slidesToShow": 1,
  "slidesToScroll": 1,
  "dots": false,
  "adaptiveHeight": false,
  "arrows": false,
  "fade": false,
  "centerMode": true,
  "centerPadding": "130px",
  "infinite": false,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        centerPadding: "90px",
      }
    },
    {
      breakpoint: 991,
      settings: {
        centerPadding: "50px",
      }
    },
    {
      breakpoint: 767,
      settings: {
        centerPadding: "20px",
      }
    },
    {
      breakpoint: 575,
      settings: {
        centerPadding: "0px",
      }
    },
  ]
});