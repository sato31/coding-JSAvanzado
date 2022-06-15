'use strict'

// Async await, nos permite trabajar respuestas de promesas
const getData = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => data)
    .catch(error => error)
}

// async y await SIEMPRE van juntos
// Sirve para esperar/await a que una promesa,
// se resuelva y obtener los datos que retorna esa promesa
// Es una fucnión que me permite trabajar asincronia, como sincronia 
const showData = async () => {
    const data = await getData();
    console.log(data);
}

showData()