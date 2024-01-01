"use strict";

//Задание 1
//Необходимо с помощью цикла for вывести следующие 11 строк в консоль
for (var i = 0; i < 11; i++) {
  if (i == 0) {
    console.log("".concat(i, " - \u044D\u0442\u043E \u043D\u043E\u043B\u044C"));
  } else if (i % 2 == 0) {
    console.log("".concat(i, " - \u0447\u0435\u0442\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E"));
  } else {
    console.log("".concat(i, " - \u043D\u0435\u0447\u0435\u0442\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E"));
  }
} //Задание 2. Дан массив [1, 2, 3, 4, 5, 6, 7]
//Сделайте из этого массива следующий[1, 2, 3, 6, 7]


var array = [1, 2, 3, 4, 5, 6, 7];
array[3] = 6;
array[4] = 7;
array.pop();
array.pop();
console.log(array); //Задание 3. Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
//1. Рассчитать сумму элементов этого массива
//2. Найти минимальное число
//3. Найти есть ли в этом массиве число 3

var arr = [];

for (var j = 0; j < 5; j++) {
  arr.push(Math.round(Math.random() * 9));
}

console.log("\u0441\u043B\u0443\u0447\u0430\u0439\u044B\u0439 \u043C\u0430\u0441\u0441\u0438\u0432 ".concat(arr));
var sum = 0;
var min = arr[0];
var numberthree = false;
arr.forEach(function (value) {
  sum = sum + value;

  if (min > value) {
    min = value;
  }

  if (value == '3') {
    numberthree = true;
  }

  ;
});
console.log("C\u0443\u043C\u043C\u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0440\u0430\u0432\u043D\u0430 ".concat(sum));
console.log("\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0440\u0430\u0432\u0435\u043D ".concat(min));

if (numberthree) {
  console.log('В массиве присутствуют элементы со значение 3');
} else {
  console.log('В массиве отсутствуют элементы со значение 3');
}