/*
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
*/

let AnalizeArray = (array) =>
{
  let oddCount = evenCount = zeroCount = 0;
  array.forEach((el) => {
    if(isNaN(el) || el == undefined) return;
    (el % 2 == 0) ? (el == 0 ? zeroCount++ : evenCount++) : oddCount++;
    }
  );
  return { "evenCount": evenCount, "oddCount": oddCount, "zeroCount": zeroCount }
}

let arrayLength = 10;
let min = 0, max = 10;
let randomArray = Array.from({ length: arrayLength }, () => Math.floor(Math.random() * (max - min + 1) + min));
randomArray.push("test", "+", null, "13test", "+%53iuj");
randomArray.unshift("te42st", "gdrg+", null, "13tettst", "+$$#44");
//console.log(randomArray)
let analisysResult = AnalizeArray(randomArray);
console.log(`even count: ${analisysResult.evenCount}; odd count: ${analisysResult.oddCount}; zeroes count: ${analisysResult.zeroCount}`);
