function setEvents(slider, externalNav) {
  // Set event on slider for change class of navigation
  slider.on('afterChange', function(event, slick, currentSlide) {
    externalNav.each((index, item) => {
      const slideIndex = item.dataset.slideIndex;
      if (parseInt(slideIndex) === currentSlide) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  });

  externalNav.on('click', e => {
    const slideIndex = parseInt(e.currentTarget.dataset.slideIndex);
    if (!isNaN(slideIndex) && typeof slideIndex === 'number') {
      slider.slick('slickGoTo', slideIndex);
    }
  });
}

export function initSlider(slider) {
  slider.slick();
}

export function initSliderNav(slider, caroiselNavItems) {
  setEvents(slider, caroiselNavItems);
}
