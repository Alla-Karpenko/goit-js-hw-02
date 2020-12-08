let input;
const numbers = [];
let total = 0;
console.log(numbers);
while(true) {
  input = prompt('Введите число');
    if (input === null) {
    // for (const number of numbers) { total += number; };
    alert(`Общая сумма чисел равна ${total}`);
      break;
    }
   
  else if(Number.isNaN(Number(input))) { alert('Введённое значение не является числом, введите число.'); continue; }
  else { numbers.push(Number(input)); };
};





// let input;
// let total = 0;
// const numbers = [input];

// while (true) {
//     let input = prompt(`Введите число`);

//     if (input === null) {
//         break;
//     }


//     for (; input < input;) { 
//         alert(input++);
//       console.log() 
//     }

//     input = Number(input);
//     total += input;
    

// } 

// console.log(`Общая сумма ${total}`);




// const sum = function() {
//  let total = 0;

//   for (const argument of arguments) {
//     total += argument;
//   }

//   return total;
// };

// console.log(sum(1, 2, 3)); //  6
// console.log(sum(1, 2, 3, 4)); //  10
// console.log(sum(1, 2, 3, 4, 5)); //  15