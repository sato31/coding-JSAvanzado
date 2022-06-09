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
  
  multiplicacion (8,3)