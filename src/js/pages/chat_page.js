import $ from "jquery";

//Show chat on dialog click
$(function () {
    if (window.innerWidth < 769) {
        $(".chat__switcher-content").hide();
        handleMessageBtn();

        $(".chat__dialogs__item").on("click", function () {
            $(".chat__switcher-content").hide();
            let switcherValue = $(this).data("switcher");
            $('.chat__switcher-content[data-content="' + switcherValue + '"]').show();
            $(".chat__dialog").css("right", "0%");
            handleMessageBtn();
            let activeMessagesContainer = $('.chat__switcher-content[data-content="' + switcherValue + '"]').find(".chat__dialog__messages");
            activeMessagesContainer.addClass("active");
            activeMessagesContainer.scrollTop(activeMessagesContainer.prop("scrollHeight"));
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
            let activeMessagesContainer = $('.chat__switcher-content[data-content="' + switcherValue + '"]').find(".chat__dialog__messages");
            activeMessagesContainer.addClass("active");
            activeMessagesContainer.scrollTop(activeMessagesContainer.prop("scrollHeight"));

        });
    }
});

//Show/hide send message btn
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

//add photo
// let input = document.getElementById("addFile");
// let thumbnailsContainer = $("#thumbnailsContainer");

// $("#addFile").on("change", function () {
//     if (input.files && input.files.length > 0) {
//         for (let i = 0; i < input.files.length; i++) {
//             let file = input.files[i];
//             let reader = new FileReader();
//             let thumb = $('<div class="chat__dialog__thumbnail"></div>');

//             reader.onload = function (e) {
//                 thumb.append(
//                     '<img class="chat__dialog__thumbnail__img" src="' +
//                         e.target.result +
//                         '" alt="Thumbnail" /><button class="chat__dialog__thumbnail__btn-delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M8 8L16 16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 8L8 16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'
//                 );
//                 input.value = "";
//             };

//             reader.readAsDataURL(file);
//             thumbnailsContainer.append(thumb);
//             $(".chat__dialog__messages.active").scrollTop( $(".chat__dialog__messages.active").prop("scrollHeight"));
//         }
//     }
// });

// thumbnailsContainer.on("click", ".chat__dialog__thumbnail__btn-delete", function (e) {
//     e.preventDefault();
//     console.log("click");
//     $(this).closest(".chat__dialog__thumbnail").remove();
// });


//FIX!!
$(".input--add-photo").on("change", function () {
    let input = this;
    let thumbnailsContainer = $(this).closest(".chat__dialog__footer").find(".chat__dialog__thumbnails-container");

    if (input.files && input.files.length > 0) {
        for (let i = 0; i < input.files.length; i++) {
            let file = input.files[i];
            let reader = new FileReader();
            let thumb = $('<div class="chat__dialog__thumbnail"></div>');

            reader.onload = function (e) {
                thumb.append(
                    '<img class="chat__dialog__thumbnail__img" src="' +
                    e.target.result +
                    '" alt="Thumbnail" /><button class="chat__dialog__thumbnail__btn-delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M8 8L16 16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 8L8 16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'
                );
                input.value = "";
            };

            reader.readAsDataURL(file);
            thumbnailsContainer.append(thumb);
            thumbnailsContainer.closest(".chat__dialog__messages.active").scrollTop(thumbnailsContainer.closest(".chat__dialog__messages.active").prop("scrollHeight"));
        }
    }
});

$(document).on("click", ".chat__dialog__thumbnail__btn-delete", function (e) {
    e.preventDefault();
    $(this).closest(".chat__dialog__thumbnail").remove();
});