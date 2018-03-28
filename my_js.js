let i = '10';

if (i > 5) {
  console.log('Переменная ' + i + ' больше 5');
  i = i - 1;
  console.log('Переменная i после -1: ' + i);
  i = i - 2;
  console.log('Переменная i после -2: ' + i);
}

const age = prompt('Сколько вам лет?', 100);
console.log('Пользователь ввел возраст: ' + age);
console.log('Тип данныых введенного возраста: ' + typeof age);

// вместо var в стандарте ES6
// let - изменяемая переменная
// и const - константа, не изменяемая переменная

var my_number = "100";
console.log('Тип переменной my_number: ' + typeof my_number);
my_number = parseInt(my_number, 10);
console.log('Тип переменной my_number после parseInt: ' + typeof my_number);
console.log('Сама переменная my_number: ' + my_number);

// alert (my_number);

