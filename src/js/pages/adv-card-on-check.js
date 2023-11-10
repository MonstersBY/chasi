import $ from "jquery";

$(".btn--close").on('click', function () { 
    $('.adv-card__pop-up').hide();
    $('.adv-card__header').css('margin-bottom', '0rem')
});