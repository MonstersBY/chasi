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

$(function () {
    let previousContactType;

    const userData = {};

    function isInputValid(inputSelector) {
        const $input = $(inputSelector);
        const isValid = $input.is(":visible") && $input.val().trim() !== "";

        if (isValid) {
            switch (inputSelector) {
                case "#nameInput":
                    userData.name = $input.val().trim();
                    break;
                case "#surnameInput":
                    userData.surname = $input.val().trim();
                    break;
                case "#cityInput":
                    userData.city = $input.val().trim();
                    break;
                case "#newPhoneInput":
                case "#phoneRegInput":
                    userData.phone = $input.val().trim();
                    break;
                case "#newEmailInput":
                case "#emailRegInput":
                    userData.email = $input.val().trim();
                    break;
                default:
                    break;
            }
        }
        return isValid;
    }

    //switchers and form val checking
    $(function () {
        $("#confirmCodeButton, #confirmPasswordButton, #signUpButton, .code-input, .auth-modal-content__send-code-again").hide();
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
            e.preventDefault();

            $(".switcher-form--reg").prop("disabled", true);
            const activeForm = $(".switcher-form--reg.switcher-form--active").data("switcher");

            previousContactType = activeForm === "emailReg" ? "email" : "phone";

            $(".code-input, #confirmCodeButton, .auth-modal-content__send-code-again").show();
            $(".auth-modal-content__registration, #continueRegButton").hide();

            let userContact;
            let userType;

            if (activeForm === "emailReg") {
                userContact = $('[data-inputs="emailReg"] .auth-modal-content__input').val().trim();
                userType = "email";
            } else if (activeForm === "phoneReg") {
                userContact = $('[data-inputs="phoneReg"] .auth-modal-content__input').val().trim();
                userType = "phone";
            }

            $("#regInfo").text(`Для подтверждения регистрации введите код, который мы отправили на ${activeForm === "emailReg" ? "почту" : "номер"} ${userContact}`);

            $("#emailRegCode, #phoneRegCode").on("input", function () {
                if ($("#emailRegCode").val() != "" || $("#phoneRegCode").val() != "") {
                    $("#confirmCodeButton").prop("disabled", false);
                } else {
                    $("#confirmCodeButton").prop("disabled", true);
                }
            });

            userData[userType] = userContact;
        });
    });

    //create password
    $(function () {
        $("#confirmCodeButton").on("click", function (e) {
            e.preventDefault();

            $("#regInfo").text("Придумайте пароль");
            $(".switcher-content--reg, .auth-modal-content__switchers, .auth-modal-content__send-code-again, #confirmCodeButton").hide();
            $('[data-inputs="createPassword"], #confirmPasswordButton').show();

            $("#passwordInput, #repeatPasswordInput").on("input", function () {
                if ($("#passwordInput").val() != "" && $("#repeatPasswordInput").val() != "" && $("#passwordInput").val() === $("#repeatPasswordInput").val()) {
                    $("#confirmPasswordButton").prop("disabled", false);
                    userData.password = $("#passwordInput").val();
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

            $("#regInfo").text("Заполните данные для регистрации");
            $('[data-inputs="createPassword"], #confirmPasswordButton').hide();
            $('#signUpButton, [data-inputs="fillingUserData"]').show();

            if (previousContactType === "email") {
                $("#newEmailInputWrapper").hide();
            } else if (previousContactType === "phone") {
                $("#newPhoneInputWrapper").hide();
            }

            $("#newEmailInput, #nameInput, #surnameInput, #cityInput, #newPhoneInput").on("input", function () {
                const isNameInputValid = isInputValid("#nameInput");
                const isSurnameInputValid = isInputValid("#surnameInput");
                const isCityPasswordInputValid = isInputValid("#cityInput");
                const isNewPhoneInputValid = isInputValid("#newPhoneInput");
                const isNewEmailInputValid = isInputValid("#newEmailInput");

                if (isNameInputValid && isSurnameInputValid && isCityPasswordInputValid) {
                    if (isNewPhoneInputValid || isNewEmailInputValid) {
                        $("#signUpButton").prop("disabled", false);
                    } else {
                        $("#signUpButton").prop("disabled", true);
                    }
                } else {
                    $("#signUpButton").prop("disabled", true);
                }
            });
        });
    });

    //sign up
    $(function () {
        $("#signUpButton").on("click", function (e) {
            e.preventDefault();
            console.log(userData);
            $(".reg-modal").removeClass("active");
        });
    });
});
