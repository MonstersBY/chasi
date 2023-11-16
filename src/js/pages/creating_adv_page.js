import $ from "jquery";

//sections switcher

$(function () {
    const $switchers = $(".switcher");
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

//if no cards show .creating-adv__empty

$(function () {
    let $cardContainer = $(".creating-adv__cards");
    let $emptyBlock = $(".creating-adv__empty");

    if ($cardContainer.find(".creating-adv__card").length === 0) {
        $(".creating-adv__header, .creating-adv__sections, .creating-adv__cards").hide();
        $emptyBlock.show();
    } else {
        $emptyBlock.hide();
    }
});
