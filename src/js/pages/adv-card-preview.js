import $ from "jquery";

$('.btn--unpublish').on('click', function () {
    $('.modal').removeClass('active');
	$('body').removeClass('lock');
})

$('[data-modal="unpublish"]').on('click', () => {
    $('.unpublish-modal').addClass('active');
});

