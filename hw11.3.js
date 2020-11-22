/*
Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.
*/

let firstFunction = a => {
  return secondFunction = b => a + b;
}

let min = 0, max = 100;
let x1 = Math.floor(Math.random() * (max - min + 1) + min);
let x2 = Math.floor(Math.random() * (max - min + 1) + min);

firstFunction(x1);
let sum = secondFunction(x2);
console.log(`${x1} + ${x2} = ${sum}`);