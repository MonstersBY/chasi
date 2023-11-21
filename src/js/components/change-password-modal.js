import $ from "jquery";

$('[data-modal="change-password"]').on("click", () => {
    $(".change-password-modal").addClass("active");
});

$(".modal-exit, .modal-back").on("click", function () {
    $(".profile-modal-content__input").val("");
});

$(function () {
    $("#changePasswordNewInput, #changePasswordRepeatNewInput, #changePasswordCurrentInput").on("input", function () {
        if ($("#changePasswordCurrentInput").val() != "" && $("#changePasswordNewInput").val() != "" && $("#changePasswordRepeatNewInput").val() != "" && $("#changePasswordNewInput").val() === $("#changePasswordRepeatNewInput").val()) {
            $("#changePasswordButton").prop("disabled", false);
        } else {
            $("#changePasswordButton").prop("disabled", true);
        }
    });

    $("#changePasswordButton").on("click", function () {
        $(".change-password-modal").removeClass("active");
            $("body").removeClass("lock");
            $('#profilePassword').text($("#changePasswordNewInput").val())
            $(".profile-modal-content__input").val("");
    });
});