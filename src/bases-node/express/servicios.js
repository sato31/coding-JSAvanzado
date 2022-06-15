'use strict'

const url = 'http://localhost:3000/pokemons/1'
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const nombre = document.getElementById('nombre');
        nombre.innerHTML = data.nombre
    })
    .catch((err) => {
        console.log(err);
    });

function insertarPokemon() {
    const url = 'http://localhost:3000/pokemons'
    fetch(url, {
        method: 'POST',
        body: {
            nombre: 'alguno',
            color: 'naranja',
        },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });    
}