import $ from "jquery";

$('[data-modal="reg-modal"]').on("click", () => {
    $(".auth-modal-placeholder").load("reg_modal.html", function () {
        $(".auth-modal").removeClass("active");
        $(".reg-modal").addClass("active");
    });
});

$(".modal-exit, .modal-back").on("click", function () {
    $(".reg-modal").removeClass("active");
});

//switchers and form val checking
$(function () {
    
    $("#confirmCodeButton").hide();
    $("#confirmPasswordButton").hide();
    $("#signUpButton").hide();
    
    $(".switcher-content--reg").hide().filter('[data-inputs="emailReg"]').show();

    $(".switcher-form--reg").on("click", function (e) {
        e.preventDefault();
        const $this = $(this);
        const switcherType = $this.data("switcher");

        if (!$this.hasClass("switcher-form--active")) {
            $(".switcher-form--reg").removeClass("switcher-form--active");
            $this.addClass("switcher-form--active");

            $(".switcher-content--reg").hide().filter(`[data-inputs='${switcherType}']`).show();
            $(".switcher-content--reg").not(`[data-inputs='${switcherType}']`).find(".auth-modal-content__input").val("");
            $(".code-input").css("display", "none");
            $("#regInfo").text("Создайте аккаунт, чтобы пользоваться всеми возможностями сервиса");
            $("#continueRegButton").prop("disabled", true);
        }
    });

    const $regForms = $("#regByEmailForm, #regByPhoneForm");

    function checkRegForm(form) {
        const firstInput = form.find(".auth-modal-content__input").first();
        return firstInput.val().trim() !== "";
    }

    $regForms.on("input", function () {
        $("#continueRegButton").prop("disabled", !checkRegForm($(this)));
    });
});

//send code
$(function () {
    $("#continueRegButton").on("click", function (e) {
        et.preventDefault();

        $(".switcher-form--reg").prop("disabled", true);
        const activeForm = $(".switcher-form--reg.switcher-form--active").data("switcher");

        $(".code-input").css("display", "block");
        $(".auth-modal-content__registration").css("display", "none");
        $(".auth-modal-content__send-code-again").css("display", "block");
        $("#continueRegButton").hide();
        $("#confirmCodeButton").show();

        let userContact;
        if (activeForm === "emailReg") {
            userContact = $('[data-inputs="emailReg"] .auth-modal-content__input').val().trim();
        } else if (activeForm === "phoneReg") {
            userContact = $('[data-inputs="phoneReg"] .auth-modal-content__input').val().trim();
        }

        const message = `Для подтверждения регистрации введите код, который мы отправили на ${activeForm === "EmailReg" ? "почту" : "номер"} ${userContact}`;
        $("#regInfo").text(message);

        $("#emailRegCode, #phoneRegCode").on("input", function () {
            if ($("#emailRegCode").val() != "" || $("#phoneRegCode").val() != "") {
                $("#confirmCodeButton").prop("disabled", false);
            } else {
                $("#confirmCodeButton").prop("disabled", true);
            }
        });
    });
});

//create password
$(function () {
    $("#confirmCodeButton").on("click", function (e) {
        e.preventDefault();

        $(".switcher-content--reg").hide();
        $(".auth-modal-content__switchers").hide();
        $(".auth-modal-content__send-code-again").hide();
        $("#regInfo").text('Придумайте пароль');
        $('[data-inputs="createPassword"]').show();
        $("#confirmCodeButton").hide();
        $("#confirmPasswordButton").show().prop("disabled", true);

        $("#passwordInput, #repeatPasswordInput").on("input", function () {
            if ($("#passwordInput").val() != "" && $("#repeatPasswordInput").val() != "" && $("#passwordInput").val() === $("#repeatPasswordInput").val()) {
                $("#confirmPasswordButton").prop("disabled", false);
            } else {
                $("#confirmPasswordButton").prop("disabled", true);
            }
        });        

    });
});

//fill user data
$(function () {
    $("#confirmPasswordButton").on("click", function (e) {
        e.preventDefault();

        $("#regInfo").text('Заполните данные для регистрации');
        $('[data-inputs="createPassword"]').hide();
        $('[data-inputs="fillingUserData"]').show();
        $("#confirmPasswordButton").hide();
        $("#signUpButton").show();
    });
});

