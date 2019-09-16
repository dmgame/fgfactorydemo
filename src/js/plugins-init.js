import { initSlider, initSliderNav } from './slickSlider';

// Init carousel
const slider = $('[data-slick-slider]');
const carouselNav = $('.carousel-nav');
const caroiselNavItems = $('.carousel-nav .carousel-nav-item');

if (slider.length) {
  initSlider(slider);
}

if (carouselNav && caroiselNavItems.length) {
  initSliderNav(slider, caroiselNavItems);
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
