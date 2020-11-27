/*
Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.
*/

let BlinkNumber = (a, b) => {
  if(!Number.isInteger(a) || !Number.isInteger(b)) return `введены неправильные параметры`;
  let interval = setInterval(function() {
    console.log(a);
    if(a == b) clearInterval(interval);
    a += 1;
  }, 1000);
}

let x = 10, b = 20;
BlinkNumber(10, 20);
