const closeBtn = document.querySelector('#closeBtn');
const todayBtn = document.querySelector('#notTodayBtn');
const popup = document.querySelector('.popup-wrap');

closeBtn.addEventListener('click', popupClose);
notTodayBtn.addEventListener('click', popupNotToday);

function popupClose() {
  popup.style.display = 'none';
}

function popupNotToday() {
  let key = localStorage.getItem('key');
  console.log(key);
  getExpiryKey(key);
}

function getExpiryKey(key) {
  const expiry = localStorage.getItem(key);
  // null이면 false
  if (!expiry) {
    console.log('dddd');
    return key;
  }
}

function setExpiryKey() {}
