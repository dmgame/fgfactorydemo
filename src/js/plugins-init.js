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
  }
  
  for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener("click", closeMenu);
  
    function closeMenu(event) {
      event.preventDefault();
      menu.classList.toggle("header-active");
      menuBtn.classList.toggle("open-menu--active");
    }
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

// Map init
var mapElement = document.getElementById('map');

window.initMap = function initMap() {
// Basic options for a simple Google Map

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>

    if (mapElement) {
      //----------------- ADD YOUR SETTINGS HERE -----------------//
      // Add your coordinates. How to know coordinates: https://support.google.com/maps/answer/18539?hl=en
      var myLatlng = new google.maps.LatLng(49.985368, 36.236165);
      // Add your company name and some text about company
      var mapOptions = {

          // How zoomed in you want the map to start at (always required)
          zoom: 16,

          //scroll zoom false
          scrollwheel: false,
          clickable: false,
          disableDefaultUI: true,
          zoomControl: false,
          //on mobile
          draggable: !("ontouchend" in document),
          // The latitude and longitude to center the map (always required)
          center: new google.maps.LatLng(49.986369, 36.230165),

          // How you would like to style the map.
          // This is where you would paste any style found on Snazzy Maps.
          styles: [
            {elementType: 'geometry', stylers: [{color: '#1e1e1e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              "featureType": "poi.sports_complex",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.attraction",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.medical",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.place_of_worship",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.government",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.school",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.business",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            
            {
              "featureType": "transit.station",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#c7c8c8'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#c7c8c8'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#152123'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#7b7b7b'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#121212'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#121212'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#7b7b7b'}, {"weight": 0}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#121212'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#121212'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#121212'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#c7c8c8'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#2a2a2b'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
      };
      // Create the Google Map using out element and options defined above
      var map = new google.maps.Map(mapElement, mapOptions);
      console.log(map)
      if(window.innerWidth > 1199)
          map.panBy(200, 0);

      // Image of toogle
      var image = 'public/img/map-marker.png';
      var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          draggable: false,
          icon: image,
      });
      const mapContainer = document.querySelector('.map-container');
      
      function onFirstMapClick() {
        mapContainer.style.opacity = 0;
        mapContainer.style.zIndex = -1;
        map.setOptions({zoomControl: true});
      }

      function closeMapControls(e) {
        mapContainer.style.opacity = 1;
        mapContainer.style.zIndex = 1;
        map.setOptions({zoomControl: false});
      }

      google.maps.event.addListener(map, "click", closeMapControls);
      mapContainer.addEventListener('click', onFirstMapClick);
	}

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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// Update option on carousel nav
$('.service-home-tabs .carousel-nav, .service-tab-wrap .carousel-nav').slick({
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
})