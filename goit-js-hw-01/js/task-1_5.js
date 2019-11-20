'use strict';
let message;
let userChoiceCountry = prompt('Укажите страну доставки');

if (userChoiceCountry === null) {
  message = 'До встречи!';
} else {
  userChoiceCountry = userChoiceCountry.toLowerCase();
  let countryDelivery;
  let priceDelivery;
  switch (userChoiceCountry) {
    case 'китай':
      countryDelivery = 'Китай';
      priceDelivery = 100;
      message = `Доставка в ${countryDelivery} будет стоить ${priceDelivery} кредитов`;
      break;
    case 'чили':
      countryDelivery = 'Чили';
      priceDelivery = 250;
      message = `Доставка в ${countryDelivery} будет стоить ${priceDelivery} кредитов`;
      break;
    case 'австралия':
      countryDelivery = 'Австралия';
      priceDelivery = 170;
      message = `Доставка в ${countryDelivery} будет стоить ${priceDelivery} кредитов`;
      break;
    case 'индия':
      countryDelivery = 'Индия';
      priceDelivery = 80;
      message = `Доставка в ${countryDelivery} будет стоить ${priceDelivery} кредитов`;
      break;
    case 'ямайка':
      countryDelivery = 'Ямайка';
      priceDelivery = 120;
      message = `Доставка в ${countryDelivery} будет стоить ${priceDelivery} кредитов`;
      break;
    default:
      message = `В вашей стране доставка не доступна`;
  }
}

alert(message);
