import $ from "jquery";

$('[data-modal="change-email"]').on("click", () => {
    $(".change-email-modal").addClass("active");
});

$(".modal-exit, .modal-back").on("click", function () {
    $(".profile-modal-content__input").val("");
});

$(function () {
    $(".change-email-hint, .profile-modal__send-code-again, .email-code-input").hide();

    $("#changeEmailInput").on("input", function () {
        if ($("#changeEmailInput").val() != "") {
            $("#sendCodeOnEmailButton").prop("disabled", false);
        } else {
            $("#sendCodeOnEmailButton").prop("disabled", true);
        }
    });

    $("#sendCodeOnEmailButton").on("click", function () {
        $(".email-code-input, .change-email-hint, .profile-modal__send-code-again").show();
        $("#sendCodeOnEmailButton").hide();
    });

    //close modal on 4 symbols in #codeEmailInput
    $("#codeEmailInput").on("input", function () {
        if ($(this).val().trim().length === 4) {
            $(".change-email-modal").removeClass("active");
            $("body").removeClass("lock");
            $('#profileEmail').text($("#changeEmailInput").val())
            $(".profile-modal-content__input").val("");

            $(".pop-up").addClass("showed");
            $(".pop-up__text").text("Почта успешно обновлена");
            setTimeout(() => {
                $(".pop-up").removeClass("showed");
            }, 5000);

            $(".pop-up")
                .find("svg")
                .on("click", () => {
                    $(".pop-up").removeClass("showed");
                });
        }
    });
});