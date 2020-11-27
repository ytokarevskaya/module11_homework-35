/*
Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
*/

let CheckIfPrime = (x) =>
{
  let result = "";
  if(isNaN(x) || typeof x !== "number") return result = `${x} - не число`;
  if(x > 1000) return result = `данные не верны`;
  if(x == 0 || x == 1) return result = `введённое число 0 или 1`;
  for(let i = 2; i < x; i++) {
    if(x % i == 0) return `число ${x} - сложное число`;
  };
  return `число ${x} - простое число`;
}

//let min = 0, max = 1000;
//let x = Math.floor(Math.random() * (max - min + 1) + min);
let x = 1001;
console.log(CheckIfPrime(x));