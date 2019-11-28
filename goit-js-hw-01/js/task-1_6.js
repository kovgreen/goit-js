'use strict';

let input;
let total = 0;

do {
  input = prompt(`Введите любое число. Для получения результата нажмите "ESC"`);
  let inputNumber = Number(input);
  if (Number.isNaN(inputNumber)) {
    alert(`Было введено не число, попробуйте еще раз`);
    continue;
  }
  total += inputNumber;
} while (input !== null);

total > 0 ? alert(`Общая сумма чисел равна ${total}`) : '';
