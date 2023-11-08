import $ from "jquery";

//Show chat on dialog click

$(function() {
  const chat = $(".chat__dialog");
  const dialogsItems = $(".dialogs__item");
  const dialogsList = $(".chat__dialogs");
  const btnBack = $("#btnBackToDialogs");

  dialogsItems.on("click", function () {
    if (window.innerWidth < 769) {
      chat.css("display", "flex");
      dialogsList.hide();
    } else {
      chat.css("display", "flex");
      dialogsList.css("display", "flex");
    }
  });

  btnBack.on("click", function () {
    chat.css("display", "none");
    dialogsList.css("display", "flex");
  });
});

//Send message button

$(function(){
  const $messageTextarea = $('#messageTextarea')
  const $sendButton = $('#sendButton')

  $messageTextarea.on('input', function(){
    if($messageTextarea.val().trim() !== ''){
      $sendButton.show()
    } else {
      $sendButton.hide()
    }
  })
})


