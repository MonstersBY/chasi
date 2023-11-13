import $ from "jquery";

$('[data-modal="reg-modal"]').on('click', () => {
    $('.auth-modal-placeholder').load('reg_modal.html', function () {
        $('.auth-modal').removeClass('active');
        $('.reg-modal').addClass('active');
    });
});

$('.modal-exit, .modal-back').on('click', function () {
    $('.reg-modal').removeClass('active');
});