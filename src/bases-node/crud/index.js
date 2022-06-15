'use strict'

const d = document;

const input_todo = d.getElementById('input-todo');

const btn_add = d.getElementById('btn-add');

const content_w = d.getElementById('content-wrapper');

const URL = 'http://localhost:3000/data';

const printTasks = (task) => {
    let li = d.createElement('li');
    // li.dataset = 12
    li.textContent = task;

    const btn_1 = d.createElement('button');
    const btn_2 = d.createElement('button');
    btn_1.textContent = 'Editar'
    btn_2.textContent = 'Eliminar'

    btn_1.addEventListener('click', () => {
        console.log('Editando...');
    })
    btn_2.addEventListener('click', () => {
        console.log('Eliminando...');
    })

    li.append(btn_1, btn_2)

    content_w.appendChild(li)
}

const getData = () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            data.forEach(({ task }) => {
                printTasks(task)
            });
        })
        .catch(error => console.error(error))
}

getData();

const postData = () => {
    fetch(URL, {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            "id" : 4,
            "task" : "Hola, he sido enviado por POST!"
        })
    })
    .then(response => console.log(response.json()))
    .then(data => console.log(data))
    .catch(error => console.error(error))
}

postData();