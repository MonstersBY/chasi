import $ from "jquery";
import IMask from "imask";

$('[data-modal="change-tel"]').on("click", () => {
    $(".change-tel-modal").addClass("active");
    applyIMask();
});

$(".modal-exit, .modal-back").on("click", function () {
    $(".profile-modal-content__input").val("");
});

function applyIMask() {
    IMask(document.getElementById("changeTelInput"), {
        mask: "+{7}(000)000-00-00",
    });
}

$(function () {
    $(".change-tel-hint, .profile-modal__send-code-again, .tel-code-input").hide();

    $("#changeTelInput").on("input", function () {
        if ($("#changeTelInput").val() != "") {
            $("#sendCodeOnTelButton").prop("disabled", false);
        } else {
            $("#sendCodeOnTelButton").prop("disabled", true);
        }
    });

    $("#sendCodeOnTelButton").on("click", function () {
        $(".tel-code-input, .change-tel-hint, .profile-modal__send-code-again").show();
        $("#sendCodeOnTelButton").hide();
    });

    //close modal on 4 symbols in #codeTelInput
    $("#codeTelInput").on("input", function () {
        if ($(this).val().trim().length === 4) {
            $(".change-tel-modal").removeClass("active");
            $("body").removeClass("lock");
            $("#profileTel").text($("#changeTelInput").val());
            $(".profile-modal-content__input").val("");
        }
    });
});
