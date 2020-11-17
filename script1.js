//2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в
//HTML-структуре. Там должен быть только div , в который будет вставляться корзина,
//сгенерированная на базе JS:
//a. Пустая корзина должна выводить строку «Корзина пуста»;
//b. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
"use strict";

var getShopBasket = {
      Block: 0,
      Button: 0,
      shops: [
      {
        product: "table",
        price: 1000,
        color: 'red',
        quantity: 3
      },
      {
        product: "chair",
        price: 500,
        color: 'blue',
        quantity: 12
      },
      {
        product: "cupboard",
        price: 2000,
        color: 'yellow',
        quantity: 23
      },
      {
        product: "sofa",
        price: 3000,
        color: 'red',
        quantity: 10
      }
    ],

  init() {
      this.Block = document.querySelector('.shop-list');
      this.Button = document.querySelector('.shop-btn');
      this.Button.addEventListener('click', this.clear.bind(this));
      this.conclusion();
  },
  conclusion() {
      if (this.shops.length) {
          this.Block.insertAdjacentHTML('afterbegin', `В корзине: ${this.shops.length} товара на сумму ${this.shopPriceBasket()}`);
      } else {
          this.Block.textContent = 'Корзина пуста';        
        }
  },

  shopPriceBasket() {
    return this.shops.reduce(function (price, shop) {
        return price + shop.price * shop.quantity;
      }, 0);
  },

    clear() {
        this.shops = [];
        this.conclusion();
    }

};
getShopBasket.init();