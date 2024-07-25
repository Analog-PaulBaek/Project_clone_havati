const closeBtn = document.querySelector('#closeBtn');
const todayBtn = document.querySelector('#todayBtn');
const popup = document.querySelector('.popup-wrap');

closeBtn.addEventListener('click', popupClose);

function popupClose() {
  popup.style.display = 'none';
}
