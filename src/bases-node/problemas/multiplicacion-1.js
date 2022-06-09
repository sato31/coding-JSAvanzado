'use strict'

const multiplicacion = (num1, num2) => {
    let res= 0;
    let i = 0;
    while (i < num2){
      res = res + num1;
      i++;
    }
    return console.log ('El resultado es: '+ res)
  };
  
  multiplicacion (2,5)

// Algoritmo recursivo
const mulTwoNumbers = (one, two) => {
    if (two === 0) return 0; 
    if (two === 1) return one; 

    return one + mulTwoNumbers(one, two -1 )
}
console.log(mulTwoNumbers(5, 2));
