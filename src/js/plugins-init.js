import { initSlider, initSliderNav } from './slickSlider';

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
      console.log(ui);
      img.style.backgroundPositionX = `${ui.value}%`;
    },
  });

  let mouseIsPressed = false;
  let startPos = 0;
  let naturalImgWidth = naturalImg.naturalWidth;

  img.addEventListener('mousedown', () => (mouseIsPressed = true));
  document.addEventListener('mouseup', () => {
    mouseIsPressed = false;
    startPos = 0;
  });

  img.addEventListener('mousemove', e => {
    if (!mouseIsPressed) {
      return;
    }

    if (startPos === 0) {
      startPos = e.offsetX;
    }

    let difference = (((e.offsetX - startPos) / naturalImgWidth) * 100) / 29;
    let currentBgPos = parseFloat(img.style.backgroundPositionX) || 0;
    let pos;
    console.log('startPos', startPos);
    console.log('difference', difference);
    console.log('currentBgPos', currentBgPos);
    console.log('naturalImgWidth', naturalImgWidth);
    console.log('==========================');
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
  });
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

// Team slider
$('[data-team-slider]').slick({
  centerMode: true,
  centerPadding: '80px',
  slidesToShow: 8,
  infinite: true,
  dots: false,
  arrows: true,
  cssEase: 'linear'
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
    var header = $('header');

    var windowWidth = $(window).width();
    if (windowWidth < 768) {
        header.addClass("pos-fixed");
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


// Paralax on scroll
var scale_tween = TweenMax.to('#scale-animation', 1, {
  transform: 'scale(.75)',
  ease: Linear.easeNone
});

var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  triggerElement: '#paralax-target-1',
})
.setTween(scale_tween);
// .setPin("#paralax-target-1")

// Add Scenes to ScrollMagic Controller
controller.addScene([
  scene,
]);