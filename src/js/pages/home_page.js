import Swiper from "swiper";
import {
	Navigation,
	Pagination,
	Autoplay,
	EffectFade,
	EffectCoverflow,
	Thumbs,
	EffectCreative,
	Mousewheel,
} from "swiper/modules";

import $ from "jquery";

function remToPx(remValue) {
    // Получаем текущий базовый размер шрифта (font-size) из элемента <html>
    var htmlFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize
    );

    // Переводим значение из rem в px
    var pxValue = remValue * htmlFontSize;

    // Округляем значение до целых пикселей (по желанию)
    return Math.round(pxValue) + "px";
}

const main_page__swiper_small = new Swiper(".main-page__swiper-small", {
    modules: [Pagination],
    speed: 1500,
    slidesPerView: 1,
    spaceBetween: `${remToPx(2)}rem`,
    pagination: {
        el: ".main-page__swiper-small_pagination",
    },
});
const main_page__big_swiper = new Swiper(".main-page__big_swiper", {
    modules: [Pagination],
    speed: 1500,
    slidesPerView: 1,
    spaceBetween: `${remToPx(2)}rem`,
    pagination: {
        el: ".main-page__big_pagination",
    },
});

$('.like').on('click', function (evt) {
    $(this).toggleClass('like_liked')
})