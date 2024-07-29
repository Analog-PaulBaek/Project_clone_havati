document.addEventListener('DOMContentLoaded', isExpired);

const closeBtn = document.querySelector('.closeBtn');
const notTodayBtn = document.querySelector('.notTodayBtn');
const popup = document.querySelector('.popup-wrap');

// popup.classList.add('show');

// 팝업창 닫기
closeBtn.addEventListener('click', () => {
  popup.classList.add('hidden');
});

// 오늘 하루 열지 않기
notTodayBtn.addEventListener('click', () => {
  setExpiryKey();
  popup.classList.add('hidden');
});

function isExpired() {
  const expiryKey = getExpiryKey();
  const now = new Date().getTime();

  // expiryKey가 null인 경우 팝업 표시, 현재시간과 만료시간을 비교
  if (!expiryKey || parseInt(expiryKey) < now) {
    // 팝업 표시
    popup.classList.remove('hidden');
  } else {
    // 팝업 감추기
    popup.classList.add('hidden');
  }
}

function getExpiryKey() {
  return localStorage.getItem('expiryKey');
}

function setExpiryKey() {
  let today = new Date();
  let now = today.getTime();
  // let expiryTime = 24 * 60 * 60 * 1000; // 24시간
  let expiryTime = 60 * 1000;
  let expiryKey = now + expiryTime;
  localStorage.setItem('expiryKey', expiryKey);
}
