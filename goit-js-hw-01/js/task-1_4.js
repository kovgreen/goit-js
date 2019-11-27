'use strict';

const credits = 23580;
const pricePerDroid = 3000;

const userOrdered = prompt('Какое количество дроидов Вы хотели бы купить?');

if (userOrdered === null) {
  console.log('Отменено пользователем!');
} else {
  const totalPrice = userOrdered * pricePerDroid;
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    console.log(
      `Вы купили ${userOrdered} дроидов, на счету осталось ${credits -
        totalPrice} кредитов.`,
    );
  }
}
