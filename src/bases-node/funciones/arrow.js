const suma = (a, b) => {
    return a + b
}
console.log(suma(5, 17));

"use strict"

//version simplificada
// const suma = (a, b) => a + b
// const resta = (a, b) => a - b

// const calculadora = (a, b, operacion) => operacion(a, b)

// console.log(calculadora(13, 7, suma))
// console.log(calculadora(13, 7, resta))

//funcion estandar/primer orden
function suma(a, b) {
    return a + b
}
function resta(a, b) {
    return a - b
}

//Funciòn de orden mayor
function calculadora(a, b, operacion){
    //callback -> comportamiento de ejecutar el parametro como una funcion
    return operacion(a, b)
}

console.log(calculadora(13, 7, suma))
console.log(calculadora(13, 7, resta))
