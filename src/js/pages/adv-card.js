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


