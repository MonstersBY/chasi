import $ from "jquery";

$('[data-modal="signup-modal"]').on("click", () => {
        $(".login-modal").removeClass("active");
        $(".signup-modal").addClass("active");
        applyIMask();
});

$(".modal-exit, .modal-back").on("click", function () {
    $(".signup-modal").removeClass("active");
});

function applyIMask() {
    IMask(document.getElementById("phoneInput"), {
        mask: "+{7}(000)000-00-00",
    });

    IMask(document.getElementById("newPhoneInput"), {
        mask: "+{7}(000)000-00-00",
    });
}

//input city dropdown list
let cityListArray = ["Анапа", "Ангарск", "Анжеро-Судженск", "Благовещенск", "Владимир", "Геленджик", "Дзержинск", "Жуков", "Зеленогорск", "Липецк", "Магнитогорск", "Москва"];
const $cityList = $(".city-list");

$.each(cityListArray, function (index, city) {
    const $liElement = $("<li>").addClass("city-list__item").text(city);
    $cityList.append($liElement);
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

    $("#confirmCodeButton, #confirmPasswordButton, #signUpButton, .code-input, .auth-modal-content__send-code-again, .city-list").hide();

    //switchers and form val checking
    $(function () {
        $(".switcher-content--signup").hide().filter('[data-inputs="emailReg"]').show();

        $(".switcher-form--signup").on("click", function (e) {
            e.preventDefault();
            const $this = $(this);
            const switcherType = $this.data("switcher");

            if (!$this.hasClass("switcher-form--active")) {
                $(".switcher-form--signup").removeClass("switcher-form--active");
                $this.addClass("switcher-form--active");

                $(".switcher-content--signup").hide().filter(`[data-inputs='${switcherType}']`).show();
                $(".switcher-content--signup").not(`[data-inputs='${switcherType}']`).find(".auth-modal-content__input").val("");
                $("#signupInfo").text("Создайте аккаунт, чтобы пользоваться всеми возможностями сервиса");
                $("#continueRegButton").prop("disabled", true);
            }
        });

        const $signupForms = $("#signupByEmailForm, #signupByPhoneForm");

        function checkRegForm(form) {
            const firstInput = form.find(".auth-modal-content__input").first();
            return firstInput.val().trim() !== "";
        }

        $signupForms.on("input", function () {
            $("#continueRegButton").prop("disabled", !checkRegForm($(this)));
        });
    });

    //send code
    $(function () {
        $("#continueRegButton").on("click", function (e) {
            e.preventDefault();

            $(".switcher-form--signup").prop("disabled", true);
            const activeForm = $(".switcher-form--signup.switcher-form--active").data("switcher");

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

            $("#signupInfo").text(`Для подтверждения регистрации введите код, который мы отправили на ${activeForm === "emailReg" ? "почту" : "номер"} ${userContact}`);

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

            $("#signupInfo").text("Придумайте пароль");
            $(".switcher-content--signup, .auth-modal-content__switchers, .auth-modal-content__send-code-again, #confirmCodeButton").hide();
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

            $("#signupInfo").text("Заполните данные для регистрации");
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

            //show city dropdown
            $("#cityInput").on("input", function () {
                const cityInputValue = $(this).val().trim().toLowerCase();
                const hasInput = cityInputValue.length > 0;
                $cityList.toggle(hasInput);

                $cityList.children().each(function () {
                    const $liElement = $(this);
                    const cityName = $liElement.text().toLowerCase();
                    const index = cityName.indexOf(cityInputValue);

                    $liElement.toggle(index !== -1);
                    $liElement.attr("data-index", index);
                });

                //sort the list by index
                const listItems = $cityList.children(".city-list__item").get();
                listItems.sort(function (a, b) {
                    const indexA = parseInt($(a).attr("data-index")) || 0;
                    const indexB = parseInt($(b).attr("data-index")) || 0;

                    return indexA - indexB;
                });

                $cityList.empty().append(listItems);
            });

            //handle click on city item
            $cityList.on("click", ".city-list__item", function () {
                const selectedCity = $(this).text();
                $("#cityInput").val(selectedCity);
                $cityList.hide();
            });

            //hide city list if click outside
            $(document).on("click", function (e) {
                const $target = $(e.target);

                if (!$target.closest("#cityInput").length && !$target.closest(".city-list").length) {
                    $cityList.hide();
                }
            });
        });
    });

    //sign up
    $(function () {
        $("#signUpButton").on("click", function (e) {
            e.preventDefault();
            console.log(userData);
            $(".signup-modal").removeClass("active");
            $('body').removeClass('lock');
        });
    });
});
