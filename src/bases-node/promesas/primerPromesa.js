'use strict'

const promise = new Promise((resolve, reject) => {
    const numero = Math.floor(Math.random() * 10);
    const respuesta = {
        mensaje: `El numero satisfactorio es ${numero}`,
        numero: numero,
    };

    setTimeout( 
        () => 
        numero > 1 
        ? resolve(respuesta)
        : reject(new Error('El número es menor a 5'))
        , 1000
    );
});

// // Ejecución de una promesa
// promise
// .then(response =>{
//     console.log(response);
// }) .catch(error => {
//     console.log(error);
// });

function suma(datoNumero) {
    const numero = Math.floor(Math.random() * 10);
    return datoNumero + numero;    
}

function tabla(datoNumero) {
    const respuesta =[];
    for( let index = 1; index < datoNumero; index++ ){
        respuesta.push({ posicion: index, valor: datoNumero * index})
    }

    return respuesta;
}

// Promesa encadenada
promise
.then(response =>{
    console.log('response 1. ', response.mensaje);
    return suma(response.numero)
})
.then(response =>{
    console.log('response 2. ', response);
    return (tabla(response));
})
.then (numeros =>{
    const datos = numeros.find((numero) => numero.posicion === 9);
    console.log(`Tu numero de la suerte es ${datos.valor}`);
})
.catch(error => {
    console.log(error);
});