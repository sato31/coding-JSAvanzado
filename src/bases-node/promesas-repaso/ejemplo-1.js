'use strict'

let x = 6;

// 1. Definir la estructura de mi promesa
const promesa = new Promise ((resolve, reject) => {
    if(x === 10) return resolve('Hola');
    return reject('X, no es igual a 10...');
});

// 2.Trabajar/recibir una respuesta
promesa
    .then((response) => {
        console.log((response));
        return 'bla bla bla';
    })
    .then((data) => {
        console.log(data);
        return 'adios...'
    })
    .then((data2) => {
        console.log(data2);
    })
    .then(() => {
        console.log('Yo no recibo nada y esta bien... ');
    })
    .then(() => {
        console.log('Yo tampoco y me duele... ');
    })
    .catch((error) => {
        return console.log('Rechazado: ' + error);
    })