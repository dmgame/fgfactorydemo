import { initSlider, initSliderNav } from "./slickSlider";

// menu mobile

let menuBtn = document.querySelector(".open-menu");
let menu = document.querySelector(".header-nav--mobile");
let menuLink = document.querySelectorAll(".header-nav--mobile a");

if (menuBtn) {
  menuBtn.addEventListener("click", openMenu);

  function openMenu(event) {
    menu.classList.toggle("header-active");
    menuBtn.classList.toggle("open-menu--active");
    document.body.style.overflowY = menu.classList.contains('header-active') ? 'hidden' : 'auto';
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
    trigger: 'hover'
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

  const poppoverContainer = e.currentTarget.closest('.poppover-container');
  if (!poppoverContainer) return;
  const [...children] = poppoverContainer.children;
  children.forEach(el => {
    if (!el.classList.contains('active-poppover-item')) {
      el.style.color = '#bcbfca';
    }
  });
});

$('[data-toggle="popover"]').on('hidden.bs.popover', function(e) {
  e.currentTarget.classList.remove('active-poppover');
  const poppoverContainer = e.currentTarget.closest('.poppover-container');

  if (!poppoverContainer) return;

  const [...children] = poppoverContainer.children;
  children.forEach(el => (el.style.color = ''));
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

$('.team-carousel .slick-prev').on('mouseover', (e) => moveSlider('slickPrev'));
$('.team-carousel .slick-prev').on('mouseleave', (e) => clearInterval(teamSliderInterval));

$('.team-carousel .slick-next').on('mouseover', (e) => moveSlider('slickNext'));
$('.team-carousel .slick-next').on('mouseleave', (e) => clearInterval(teamSliderInterval));

function moveSlider(moveTo) {
  teamSliderInterval = setInterval(() => {
    $('[data-team-slider]').slick(moveTo);
  }, 500);
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
    $(window).on('scroll', function(){
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
    });
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
      const counter = parent.querySelector('.team-counter');
      const nestedRadio = parent.querySelectorAll('.project-team-type-ragio-item input');
      counter.textContent = ui.value;
      nestedRadio.forEach(el => (el.disabled = !Boolean(ui.value)));
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

// Update option on carousel nav
$('.service-home-tabs .carousel-nav').slick({
  dots: false,
  infinite: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});
$('.service-tab-wrap .carousel-nav').slick({
  dots: false,
  infinite: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});

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
})