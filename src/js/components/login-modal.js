import $ from "jquery";
import IMask from "imask";

$('[data-modal="login-modal"]').on("click", () => {
    $(".signup-modal").removeClass("active");
    $(".login-modal").addClass("active");
    applyIMask();
});

// $(".modal-exit, .modal-back").on("click", function () {
//     $(".modal").removeClass("active");
// });

function applyIMask() {
    IMask(document.getElementById("phoneLoginInput"), {
        mask: "+{7}(000)000-00-00",
    });
}

$(function () {
    const $switchers = $(".switcher-form--auth");
    const $contents = $(".switcher-content--auth");
    const $loginBtn = $("#loginButton");

    $contents.hide().filter('[data-inputs="EmailLogin"]').show();

    $switchers.on("click", function (evt) {
        evt.preventDefault();
        const $this = $(this);
        const switcherType = $this.data("switcher");

        if (!$this.hasClass("switcher-form--active")) {
            $switchers.removeClass("switcher-form--active");
            $this.addClass("switcher-form--active");

            $contents.hide().filter(`[data-inputs='${switcherType}']`).show();

            $contents.not(`[data-inputs='${switcherType}']`).find(".auth-modal-content__input").val("");

            $loginBtn.prop("disabled", true);
        }
    });

    const $forms = $("#loginByEmailForm, #loginByPhoneForm");

    function checkForm(form) {
        const inputs = form.find(".auth-modal-content__input");
        return inputs.toArray().every((input) => $(input).val().trim() !== "");
    }

    $forms.on("input", function () {
        $loginBtn.prop("disabled", !checkForm($(this)));
    });
});
