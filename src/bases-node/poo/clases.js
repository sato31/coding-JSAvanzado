'use strict'

// En las clases se habla en general
// Las clases por convención, comienzan con mayuscula
class Animal{
    constructor(esp, col, son) {
        this.especie = esp,
        this.color = col,
        this.sonido = son
    }
    emitirSonido() {
        return console.log('Estoy emitiendo sonido: ' + this.sonido );
    }
}

// En objetos, se habla en específico
// Un objeto es una instancia de una clase
const enrique = new Animal('Humana', 'cafe', 'Insultos leves' )
const pamela = new Animal('Humana', 'blanca', 'Insultos graves')

console.log(enrique.color);
console.log(pamela.sonido);

enrique.emitirSonido()
pamela.emitirSonido()