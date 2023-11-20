import $ from "jquery";

$('[data-modal="reset-password-modal"]').on("click", () => {
    $(".login-modal").removeClass("active");
    $(".reset-password-modal").addClass("active");
});

$(".modal-exit, .modal-back").on("click", function () {
    $(".reset-password-modal").removeClass("active");
});

$(function () {
    $("#resetButton, #saveButton, .code-input, .reset-password-hint").hide();
    $(".switcher-content--reset-password").hide().filter('[data-inputs="resetPassword"]').show();

    function checkForm(form) {
        const firstInput = form.find(".auth-modal-content__input").first();
        return firstInput.val().trim() !== "";
    }

    $("#resetPasswordForm").on("input", function () {
        $("#sendCodeButton").prop("disabled", !checkForm($(this)));
    });

    //send code
    $(function () {
        $("#sendCodeButton").on("click", function () {
            $("#sendCodeButton").hide();
            $("#resetButton, .code-input, .reset-password-hint").show();

            $("#phoneOrEmail, #resetPasswordCode").on("input", function () {
                if ($("#phoneOrEmail").val() != "" && $("#resetPasswordCode").val() != "") {
                    $("#resetButton").prop("disabled", false);
                }
        });
    })
    });

    //create new password
    $(function(){
        $("#resetButton").on('click', function () {
            $("#resetButton, .reset-password-hint").hide()
            $("#saveButton").show()
            $(".switcher-content--reset-password").hide().filter('[data-inputs="createNewPassword"]').show();
            $(".auth-modal-content__desc").text('Придумайте новый пароль')

            $("#newPasswordInput, #repeatNewPasswordInput").on("input", function () {
                if ($("#newPasswordInput").val() != "" && $("#repeatNewPasswordInput").val() != "" && $("#newPasswordInput").val() === $("#repeatNewPasswordInput").val()) {
                    $("#saveButton").prop("disabled", false);
                } else {
                    $("#saveButton").prop("disabled", true);
                }
            });
        })
    })
    $("#saveButton").on('click', function (e) {
        e.preventDefault();
        $(".reset-password-modal").removeClass("active");
        $('body').removeClass('lock');
    })

});
