"use strict";

const url = "https://pokeapi.co/api/v2/pokemon/ditto";

function locationArea(url) {
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
        let name = document.getElementById("nameLocationArea");
        name.innerHTML = response[0].location_area.name
    })
    .catch((err) => {
      console.log("Algo salio mal", err);
    });
}

fetch(url)
  .then((response) => response.json())
  .then((response) => {
    let name = document.getElementById("name");
    let tabla = document.getElementById("tablaP");
    let template = ``;

    name.innerHTML = `El nombre del pokemon es: ${response.name}`;
    response.abilities.forEach((ability) => {
      template += `<tr><td>${ability.ability.name}</td></tr>`;
    });
    tabla.innerHTML = template;

    // Se muestran las locationAreaEncounters
    locationArea = (response.location_area_encounters);

  })
  .catch((err) => {
      console.log('error: ', err.message);
    let error = document.getElementById("error");
    error.innerHTML = `Algo salio mal, intente mas tarde :(`;
  });
