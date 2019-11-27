'use strict';
let userChoiceCountry = prompt('Укажите страну доставки');

if (userChoiceCountry === null) {
  console.log('До встречи!');
} else {
  userChoiceCountry = userChoiceCountry.toLowerCase();
  switch (userChoiceCountry) {
    case 'китай':
      alert(`Доставка в Китай будет стоить 100 кредитов`);
      break;
    case 'чили':
      alert(`Доставка в Чили будет стоить 250 кредитов`);
      break;
    case 'австралия':
      alert(`Доставка в Австралию будет стоить 170 кредитов`);
      break;
    case 'индия':
      alert(`Доставка в Китай будет стоить 80 кредитов`);
      break;
    case 'ямайка':
      alert(`Доставка в Ямайку будет стоить 120 кредитов`);
      break;
    default:
      alert(`В вашей стране доставка не доступна`);
  }
}
