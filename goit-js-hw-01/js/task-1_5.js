'use strict';
const userChoiceCountry = prompt('Укажите страну доставки');
const priceChina = 100;
const priceChile = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;

if (userChoiceCountry === null) {
  console.log('До встречи!');
} else {
  switch (userChoiceCountry.toLowerCase()) {
    case 'китай':
      alert(`Доставка в Китай будет стоить ${priceChina} кредитов`);
      break;
    case 'чили':
      alert(`Доставка в Чили будет стоить ${priceChile} кредитов`);
      break;
    case 'австралия':
      alert(`Доставка в Австралию будет стоить ${priceAustralia} кредитов`);
      break;
    case 'индия':
      alert(`Доставка в Китай будет стоить ${priceIndia} кредитов`);
      break;
    case 'ямайка':
      alert(`Доставка в Ямайку будет стоить ${priceJamaica} кредитов`);
      break;
    default:
      alert(`В вашей стране доставка не доступна`);
  }
}
