'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let message;

let userOrdered = prompt('Какое количество дроидов Вы хотели бы купить?');

if (userOrdered === null) {
  message = 'Отменено пользователем!';
} else {
  userOrdered = Number.parseInt(userOrdered);
  const totalPrice = userOrdered * pricePerDroid;
  if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
  } else {
    const userAccountBalance = credits - totalPrice;
    message = `Вы купили ${userOrdered} дроидов, на счету осталось ${userAccountBalance} кредитов.`;
  }
}

alert(message);
