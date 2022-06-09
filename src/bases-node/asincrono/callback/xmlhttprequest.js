"use strict"

//importando el paquete - COMMON JS, ES MODULES
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

let url = "https://jsonplaceholder.typicode.com/users"

function getData(url, callback) {
    let xhttp = new XMLHttpRequest()

    xhttp.open("GET", url, true)

    xhttp.onreadystatechange = () => {

        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                return callback(null, JSON.parse(xhttp.responseText))
            } else {
                let error = new Error("Error: " + url)
                return callback(error, null)
            }
        }

    }
    return xhttp.send()
}

// getData(url, (error, data) => {
//     if (error) return console.error(error)
//     console.log(data)

//     return getData(url + '/1', (error2, data2) => {
//         if (error) return console.error(error2)
//         console.log('Nombre del usuario, ', data2)

//         return getData(url + '/2', (error3, data3) => {
//             if (error) return console.error(error3)
//             console.log('Nombre del usuario, ', data3)
//         })
//     })
// })

// Imprimir los nombres de la data que solicitan en getData(), los nombres de los usuarios 3, 4 y 5
for(let i = 3; i <= 5; i++){
    getData(url + '/' + i, (error, data) => {
        if (error) return console.error(error)
        return console.log('Nombre del usuario ' + data.id + ':  ', data.name)
})
}