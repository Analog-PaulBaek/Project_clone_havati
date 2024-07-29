import { itemsList } from './module.js';

window.onload = showItem;

const delBtn = document.querySelector('#dropItem');
const orderBtn = document.querySelector('#order');
const cartPrice = document.querySelector('.cart_price');
const tbody = document.querySelector('tbody');

delBtn.addEventListener('click', deleteItem);
orderBtn.addEventListener('click', () => alert('준비중 입니다.'));
// orderBtn.addEventListener('click', setCartItem);

// 메서드 정의
function deleteItem() {
  let frm = document.querySelector('#frm');
  let checkboxList = frm.querySelectorAll('input[name="del"]');
  let isChecked = false;
  for (let i = 0; i < checkboxList.length; i++) {
    if (checkboxList[i].checked) {
      isChecked = true;
      break;
    }
  }

  if (!isChecked) {
    alert('삭제될 아이템이 없습니다.');
    return;
  }

  for (let i = 0; i < checkboxList.length; i++) {
    if (checkboxList[i].checked) {
      checkboxList[i].closest('tr').remove();
    }
  }
  cartPrice.innerHTML = `총 상품 구매금액 + 배송비 0(무료) = 합계:<span id="total_price">${totalPrice()}</span>원`;
}

function totalPrice() {
  let sum = 0;
  const rows = tbody.querySelectorAll('tr');
  rows.forEach((row) => {
    const cols = row.querySelectorAll('td');
    const count = parseInt(cols[3].textContent);
    const price = parseInt(cols[4].textContent);
    const total = count * price;
    sum += total;
  });
  return sum;
}

function showItem() {
  // let cart = getCartItem();
  const noCartItem = document.querySelector('.no_cart_item');
  tbody.innerHTML = '';
  if (itemsList.length == 0) {
    noCartItem.style.display = 'flex';
    noCartItem.innerText = '아이템이 없습니다.';
    console.log('아이템이 없습니다.');
    return;
  }
  for (let i = 0; i < itemsList.length; i++) {
    tbody.innerHTML += `
                <tr>
                    <td><input id="selectDel" type="checkbox" name="del"></td>
                    <td><img src="${itemsList[i].imgUrl}"></td>
                    <td>${itemsList[i].name} - ${itemsList[i].size}</td>
                    <td>${itemsList[i].count}</td>
                    <td>${itemsList[i].price}</td>
                </tr>
            `;
  }
  cartPrice.innerHTML = `총 상품 구매금액 + 배송비 0(무료) = 합계:<span id="total_price">${totalPrice()}</span>원`;
}

// function getCartItem() {
//   let isCartEmpty = localStorage.getItem('cart');
//   if (!isCartEmpty) {
//     console.log('카트 비었음');
//   } else {
//     let cartString = localStorage.getItem('cart');
//     console.log(cartString);
//     let cartList = JSON.parse(cartString);
//     return cartList;
//   }
// }
// function setCartItem() {
//   let itemsListString = JSON.stringify(itemsList);
//   localStorage.setItem('cart', itemsListString);
// }
