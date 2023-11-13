import $ from "jquery";

$('[data-modal="auth-modal"]').on('click', () => {
    $('.auth-modal-placeholder').load('auth_modal.html', function () {
        $('.auth-modal').addClass('active');
    });
});

$('.modal-exit, .modal-back').on('click', function () {
    $('.modal').removeClass('active');
});


$(function () {
    const $switchers = $(".switcher-form");
    const $contents = $(".switcher-content");
  
    $contents.hide();
    let $activeContent = $contents.filter('.switcher-content--email');
    $activeContent.show();
  
    $switchers.on("click", function (evt) {
        evt.preventDefault();
        const $this = $(this);
        const classToFilter = $this.attr("class").split("--")[1];
        
        if (!$this.hasClass("switcher-form--active")) {
            $switchers.removeClass("switcher-form--active");
            $this.addClass("switcher-form--active");
  
            $contents.hide();
            $contents.filter(".switcher-content--" + classToFilter).show();
        }
    });
  });

  

