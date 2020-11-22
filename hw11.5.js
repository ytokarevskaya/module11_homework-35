/*
Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
*/

let IsNaturalNumber = a => (Number.isInteger(a) && a > 0 ? true : false);

let PowerNumber = (x, n) => {
  if(!IsNaturalNumber(x) || !IsNaturalNumber(n)) return `числа должны быть натуральными`;
  /*let res = 1;
  for(let i = 1; i <= n; i++) {
    res = res * x;
  };
  return res;*/
  return x ** n;
}

let x = 5, n = 3;
let result = PowerNumber(x, n);
console.log(result);
