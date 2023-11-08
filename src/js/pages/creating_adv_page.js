import $ from "jquery";
import Swiper from "swiper";
import "swiper/css";

//sections switcher

$(function () {
  const $switchers = $(".switcher");
  const $cards = $(".creating-adv__card");

  $switchers.on("click", function (evt) {
      evt.preventDefault();
      const $this = $(this);
      const classToFilter = $this.attr("class").split("--")[1];
      const $parent = $this.parent();

      if (!$parent.hasClass("creating-adv__section--active")) {
          $switchers.parent().removeClass("creating-adv__section--active");
          $parent.addClass("creating-adv__section--active");

          $cards.hide();
          $cards.filter(".card--" + classToFilter).show();
      }
  });
});

//sections swiper on mobile

const swiper = new Swiper(".switcherSwiper", {
    slidesPerView: 3,
});

//if no cards show .creating-adv__empty

$(function () {
    let $cardContainer = $(".creating-adv__cards");
    let $emptyBlock = $(".creating-adv__empty");

    if ($cardContainer.find(".creating-adv__card").length === 0) {
        $(
            ".creating-adv__header, .creating-adv__sections, .creating-adv__cards"
        ).hide();
        $emptyBlock.show();
    } else {
        $emptyBlock.hide();
    }
});
