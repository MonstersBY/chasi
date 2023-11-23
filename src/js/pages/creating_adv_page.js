import $ from "jquery";

//sections switcher

$(function () {
    const $switchers = $(".switcher-adv");
    const $cards = $(".creating-adv__card");
    let lastCards = $(".card--awaiting:visible:last, .card--published:visible:last, .card--archive:visible:last");
    lastCards.addClass("no-border");

    $cards.hide();
    let $cardsAwaiting = $cards.filter(".card--awaiting");
    $cardsAwaiting.show();

    $switchers.on("click", function (e) {
        e.preventDefault();
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

//crad--published: hide status if there's status-time

$(function () {
    const publishedCards = $('.card--published');
    publishedCards.each(function () {
        const card = $(this);
        const statusTime = card.find('.status-time');
        const status = card.find('.status');

        if (statusTime.length > 0) {
            status.hide();
        }
    });
});