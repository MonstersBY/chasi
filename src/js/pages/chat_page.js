import $ from "jquery";

//Show chat on dialog click
$(function () {
    if (window.innerWidth < 769) {
        $(".chat__switcher-content").hide();
        $('.chat__switcher-content[data-content="dialogFirstVisit"]').show();
        handleMessageBtn();

        $(".chat__dialogs__item").on("click", function () {
            $(".chat__switcher-content").hide();
            let switcherValue = $(this).data("switcher");
            $('.chat__switcher-content[data-content="' + switcherValue + '"]').show();
            $(".chat__dialog").css("right", "0%");
            handleMessageBtn();
        });

        $(".btn--close-dialog").on("click", function () {
            $(".chat__dialog").css("right", "-100%");
        });
    } else {
        $(".chat__switcher-content").hide();
        $('.chat__switcher-content[data-content="dialogFirstVisit"]').show();
        handleMessageBtn();

        $(".chat__dialogs__item").on("click", function () {
            $(".chat__switcher-content").hide();
            let switcherValue = $(this).data("switcher");
            $('.chat__switcher-content[data-content="' + switcherValue + '"]').show();
            handleMessageBtn();
        });
    }
});

// $(function() {
//   const chat = $(".chat__dialog");
//   const dialogsItems = $(".dialogs__item");
//   const dialogsList = $(".chat__dialogs");
//   const btnBack = $("#btnBackToDialogs");

//   dialogsItems.on("click", function () {
//     if (window.innerWidth < 769) {
//       chat.css("display", "flex");
//       dialogsList.hide();
//     } else {
//       chat.css("display", "flex");
//       dialogsList.css("display", "flex");
//     }
//   });

//   btnBack.on("click", function () {
//     chat.css("display", "none");
//     dialogsList.css("display", "flex");
//   });
// });

//Dialogs switcher
$(function () {
    $(".chat__switcher-content").hide();
    $('.chat__switcher-content[data-content="dialogFirstVisit"]').show();
    handleMessageBtn();

    $(".chat__dialogs__item").on("click", function () {
        $(".chat__switcher-content").hide();
        let switcherValue = $(this).data("switcher");
        $('.chat__switcher-content[data-content="' + switcherValue + '"]').show();
        handleMessageBtn();
    });
});

//Show/hise send message btn
const handleMessageBtn = function () {
    const $dialog = $(".chat__switcher-content:visible");
    const $messageTextarea = $dialog.find(".chat__dialog__textarea");
    const $sendButton = $dialog.find(".btn--send");
    $sendButton.hide();
    $messageTextarea.on("input", function () {
        if ($messageTextarea.val().trim() !== "") {
            $sendButton.show();
        } else {
            $sendButton.hide();
        }
    });
};
