//EJERCICIO: 
// CREAR UNA CALCULADORA/Funcion de orden mayor, que ejecute como callback, las funciones de multiplicar y dividar. 
// Tienes que hacer la funcion de multiplicar como una de primer orden y la de dividir, tiene que ser un arrow function

'use strict'

const suma = (a, b) => a + b;
const resta = (a,b) => a - b; 
function multiplica (a, b){
    return a * b;
} ;
const divide = (a, b) => a / b;

const calculadora =(a, b, operacion) => operacion(a, b);

console.log('SUMA: '+ calculadora(15, 3, suma));
console.log('RESTA: ' + calculadora(15, 3, resta));
console.log('MULTIPLICACIÓN: ' + calculadora(15, 3, multiplica));
console.log('DIVISIÓN: ' + calculadora(15, 3, divide));