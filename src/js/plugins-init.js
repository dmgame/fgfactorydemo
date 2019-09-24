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
  $('[data-toggle="popover"]').popover();
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
const teamData = [...new Array(20)].map((item, index) => ({
  img: `public/img/team-unit-${index + 1}.png`,
}));

console.log(teamData);

const teamSliderModule = (function() {
  let container = null;
  let itemList = [];
  let settings = {
    container: '[data-team-slider]',
  };

  function init(data, userSettings = {}) {
    settings = Object.assign(settings, userSettings);
    itemList = _updateItemCount(data.slice());

    _findContainer();

    if (!container) return console.warn('Container not found!');

    _renderItems(itemList);
  }

  function _findContainer() {
    container = document.querySelector(settings.container);
  }

  function _renderItems(items) {
    let fragment = '';
    items.forEach(item => {
      const template = _itemTemplate(item);
      fragment += template;
    });

    container.insertAdjacentHTML('afterbegin', fragment);
  }

  function _itemTemplate(item) {
    return `
      <div class="team-slider-item">
        <img src="${item.img}">
      </div>
    `;
  }

  function _randomize(items) {
    return items.sort(() => {
      const random1 = _randomNumber(items.length);
      const random2 = _randomNumber(items.length);
      return random1 - random2;
    });
  }

  function _randomNumber(count = 100) {
    return Math.floor(Math.random() * count);
  }

  function _updateItemCount(items) {
    return _randomize(items).concat(_randomize(items), _randomize(items));
  }

  return {
    init,
  };
})();

teamSliderModule.init(teamData);
