import $ from "jquery";

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

//sections switcher

$(function() {
  let $cardsContainer = $('.creating-adv__cards');
  let $cards = $cardsContainer.find('.creating-adv__card');
  
  $cards.hide();
  $cards.filter('.card--dafts').show();

  $('.switcher').on('click', function(evt) {
    evt.preventDefault();
    let $this = $(this);
    let classToFilter = $this.attr('class').split('--')[1];

    if (!$this.hasClass('switcher--active')) {
      $this.siblings('.switcher').removeClass('switcher--active');
      $this.addClass('switcher--active');
 
      $cards.hide();
      $cards.filter('.card--' + classToFilter).show();
    }
  });
});

//if no cards show .creating-adv__empty

$(function() {
  let $cardContainer = $('.creating-adv__cards');
  let $emptyBlock = $('.creating-adv__empty');

  if ($cardContainer.find('.creating-adv__card').length === 0) {
      $('.creating-adv__header, .creating-adv__sections, .creating-adv__cards').hide();
      $emptyBlock.show();
  } else {
      $emptyBlock.hide();
  }
});







