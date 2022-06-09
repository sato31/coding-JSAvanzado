'use strict'

function hola(nombre, callback) {
    return setTimeout(() => {
        return callback (nombre)
    }, 1500);
}

function hablar(mensaje, callback) {
    return setTimeout(() => {
        return callback (mensaje)
    }, 1100);
}

function adios(nombre, callback) {
    return setTimeout(() => {
        return callback (nombre)
    }, 1000);
}

// CONSEGUIR EL SIGUIENTE OUTPUT:
// inicio
// hola
// hablar
// adios

hola('Samantha', (nombre) => {
    console.log('Hola, '+ nombre);
    return hablar('bla bla bla 1...', (mensaje) =>{
        console.log(mensaje);
        return adios('Samantha', (nombre) => {
            return console.log('Adios, '+ nombre);
        });
    });
});

console.log('Iniciando proceso');


