//Задание 1
//Необходимо с помощью цикла for вывести следующие 11 строк в консоль
for (let i = 0; i < 11; i++) {
    if (i == 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 == 0) {
        console.log(`${i} - четное число`);
    } else {
        console.log(`${i} - нечетное число`);
    }
}

//Задание 2. Дан массив [1, 2, 3, 4, 5, 6, 7]
//Сделайте из этого массива следующий[1, 2, 3, 6, 7]

let array = [1, 2, 3, 4, 5, 6, 7];

array[3] = 6;
array[4] = 7;
array.pop();
array.pop();
console.log(array);

//Задание 3. Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
//1. Рассчитать сумму элементов этого массива
//2. Найти минимальное число
//3. Найти есть ли в этом массиве число 3
let arr = [];
for (let j = 0; j < 5; j++) {
    arr.push(Math.round(Math.random() * 9))
}
console.log(`случайый массив ${arr}`);
let sum = 0;
let min = arr[0];
let numberthree = false;
arr.forEach(function(value) {
    sum = sum + value;
    if (min > value) { min = value; }
    if (value == '3') { numberthree = true; };

})
console.log(`Cумму элементов массива равна ${sum}`);
console.log(`Минимальный элемент массива равен ${min}`);


if (numberthree) { console.log('В массиве присутствуют элементы со значение 3') } else { console.log('В массиве отсутствуют элементы со значение 3') }