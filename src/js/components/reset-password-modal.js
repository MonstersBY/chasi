import $ from "jquery";

$(function () {
    function resetResPwdFormFields() {
        $("#phoneOrEmailInput, #phoneOrEmailInputDisabled, #resetPasswordCode, #newPasswordInput, #repeatNewPasswordInput").val("");
        $(".reset-password-modal .btn").prop("disabled", true);
    }

    $('[data-modal="reset-password-modal"]').on("click", () => {
        $(".login-modal").removeClass("active");
        $(".reset-password-modal").addClass("active");
        resetResPwdFormFields();
        showFirstResPwdStage();
    });

    function showFirstResPwdStage() {
        $(".reset-password-first-stage").show();
        $(".reset-password-second-stage, .reset-password-third-stage").hide();
        $("#resetPasswordInfo").text("Введите свой номер или почту и мы отправим вам код для восстановления пароля");

        $("#phoneOrEmailInput").on("input", function () {
            $("#sendCodeButton").prop("disabled", !($("#phoneOrEmailInput").val().trim() !== ""));
        });

        //handle click on sendCodeButton
        $("#sendCodeButton").on("click", function () {
            $("#phoneOrEmailInputDisabled").val($("#phoneOrEmailInput").val());
            showSecondResPwdStage();
        });
    }

    function showSecondResPwdStage() {
        $(".reset-password-second-stage").show();
        $(".reset-password-first-stage, .reset-password-third-stage").hide();

        $("#resetPasswordCode").on("input", function () {
            $("#resetButton").prop("disabled", !($("#resetPasswordCode").val().trim() !== ""));
        });

        //handle click on resetButton
        $("#resetButton").on("click", function () {
            showThirdResPwdStage();
        });
    }

    function showThirdResPwdStage() {
        $(".reset-password-third-stage").show();
        $(".reset-password-first-stage, .reset-password-second-stage").hide();
        $("#resetPasswordInfo").text("Придумайте новый пароль");

        $("#newPasswordInput, #repeatNewPasswordInput").on("input", function () {
            if ($("#newPasswordInput").val() != "" && $("#repeatNewPasswordInput").val() != "" && $("#newPasswordInput").val() === $("#repeatNewPasswordInput").val()) {
                $("#saveButton").prop("disabled", false);
            } else {
                $("#saveButton").prop("disabled", true);
            }
        });

        //handle click on resetButton
        $("#saveButton").on("click", function () {
            $(".reset-password-modal").removeClass("active");
            $("body").removeClass("lock");
            resetResPwdFormFields();
        });
    }
});
