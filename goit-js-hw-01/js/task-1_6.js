'use strict';

let input;
let total = 0;

do {
  input = prompt(`Введите любое число. Для получения результата нажмите "ESC"`);
  let inputNumber = Number(input);
  if (isNaN(inputNumber)) {
    alert(`Было введено не число, попробуйте еще раз`);
    inputNumber = 0;
  }
  total += inputNumber;
} while (input !== null);

if (total > 0 && total !== NaN) {
  alert(`Общая сумма чисел равна ${total}`);
}
