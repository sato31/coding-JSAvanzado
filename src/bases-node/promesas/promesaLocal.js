'use strict'

const axios = require('axios');
const url = "http://localhost:3000/pokemons";

axios
    .get(url)
    .then((response) => {
        console.log('response', response.data);
    })
    .catch((error) => {
        console.log('error', error.response.data);
    })

axios
    .post(url, {
        nombre: "otro pokemon",
        color: "rojo"
    })
    .then((response) => {
        console.log('response', response.data);
    })
    .catch((error) => {
        console.log('error', error.response.data);
    })

axios
    .put(url, {
        id: 2,
        nombre: "pichu",
        color: "verde"
    })
    .then((response) => {
        console.log('response', response.data);
    })
    .catch((error) => {
        console.log('error', error.response.data);
    })