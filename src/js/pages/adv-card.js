import Swiper from "swiper";
import "swiper/css";
import 'swiper/css/pagination';
import { Thumbs, Pagination } from "swiper/modules";
import $ from "jquery";

function remToPx(remValue) {
  var htmlFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  var pxValue = remValue * htmlFontSize;
  return Math.round(pxValue) + "px";
}

const swiperThumbnail = new Swiper(".swiper-thumbnail", {
  loop: true,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
  spaceBetween: `${remToPx(1.2)}rem`,
});

const swiper = new Swiper(".adv-card__swiper", {
  loop: true,
  modules: [Thumbs, Pagination],
  spaceBetween: `${remToPx(1.2)}rem`,
  thumbs: {
    swiper: swiperThumbnail,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
});

//Show currency on click

$(function () {
  const priceButton = $(".btn--price");
  const currencyList = $(".currency-list");
  const priceIcon = $(".btn--price img");

  priceButton.on("click", function () {
    currencyList.toggle();
    priceIcon.toggleClass("open");
  });
});

//Show seller's phone

$(function () {
  const btnShowNumer = $('.btn--show-number');
  const sellerPhone = $('#sellerPhone')

  btnShowNumer.on('click', function () {
    btnShowNumer.addClass('open')
    sellerPhone.text('+7 (000) 123-45-67')
  })
})

//If no .adv-card__buttons--mobile reduce margin bottom 
$(function() {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function checkWindowSize() {
        if (mediaQuery.matches) {
            if ($('.adv-card__buttons--mobile').length === 0) {
                $('.adv-card').css('margin-bottom', '4.8rem');
            } else {
                $('.adv-card').css('margin-bottom', '35rem');
            }
        } else {
            $('.adv-card').css('margin-bottom', '');
        }
    }
    checkWindowSize();
});