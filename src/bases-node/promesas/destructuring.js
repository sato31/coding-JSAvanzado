'use strict'
const pokemons = require('../informacionFake/pokemons.json');

pokemons.forEach(pokemon => {

    // Sin destructuring
    console.log('Habilidad sin destructuring: ', pokemon.habilidades.habilidad1);

    // Con destructuring
    const {nombre, habilidades: {habilidad1}} = pokemon;
    console.log('Nombre y habilidad: ', nombre, habilidad1);
})

//console.log(pokemons);

 