const dialogsItems = document.getElementsByClassName('dialogs__item');
const chat = document.getElementsByClassName('chat__dialog');
const dialogsList = document.getElementsByClassName('chat__dialogs');
const btnBack = document.getElementById('btnBackToDialogs');

Array.from(dialogsItems).forEach(item => {
  item.onclick = function () {
    if (window.innerWidth < 769) {
      chat[0].style.display = 'flex';
      dialogsList[0].style.display = 'none';
      
    } else{
      chat[0].style.display = 'flex';
      dialogsList[0].style.display = 'flex';
    }
  }
});

btnBack.onclick = function () {
    chat[0].style.display = 'none';
      dialogsList[0].style.display = 'flex';
}
