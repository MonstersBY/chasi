const chat = document.getElementsByClassName("chat__dialog")[0];

if (chat) {
  const dialogsItems = document.getElementsByClassName("dialogs__item");
  const dialogsList = document.getElementsByClassName("chat__dialogs")[0];
  const btnBack = document.getElementById("btnBackToDialogs");

  Array.from(dialogsItems).forEach((item) => {
    item.onclick = function () {
      if (window.innerWidth < 769) {
        chat.style.display = "flex";
        dialogsList.style.display = "none";
      } else {
        chat.style.display = "flex";
        dialogsList.style.display = "flex";
      }
    };
  });

  btnBack.onclick = function () {
    chat.style.display = "none";
    dialogsList.style.display = "flex";
  };
}
