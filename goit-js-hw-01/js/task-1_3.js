'use strict';

let message;
const ADMIN_PASSWORD = 'jqueryismyjam';

let usePassword = prompt('Введите Ваш пароль');

if (usePassword === null) {
  message = 'Отменено пользователем!';
} else if (usePassword === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
