class Goods {
  constructor(name, size, price, type, imgUrl) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.type = type;
    this.imgUrl = imgUrl;
    this.count = 3;
  }
}

class Sweater extends Goods {
  constructor(name, size, price, imgUrl) {
    super(name, size, price, 'sweater', imgUrl);
  }
}

const item1 = new Sweater(
  '[Sweater] 스웨터 (White)',
  'L',
  65000,
  'https://via.placeholder.com/100X100'
);
const item2 = new Sweater(
  '[Sweater] 스웨터 (White)',
  'M',
  60000,
  'https://via.placeholder.com/100X100'
);

const item3 = new Sweater(
  '[Sweater] 스웨터 (White)',
  'S',
  55500,
  'https://via.placeholder.com/100X100'
);

export const itemsList = [item1, item2, item3];
// export const itemsList = [];
