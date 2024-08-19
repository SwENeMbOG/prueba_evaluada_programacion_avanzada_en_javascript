import { Leon } from './classes/Leon.js';
import { Lobo } from './classes/Lobo.js';
import { Oso } from './classes/Oso.js';
import { Serpiente } from './classes/Serpiente.js';
import { Aguila } from './classes/Aguila.js';
import { loadAnimals } from './dataService.js';

const btnRegistrar = document.getElementById('btnRegistrar');
const animalSelect = document.getElementById('animal');
const edadSelect = document.getElementById('edad');
const comentariosInput = document.getElementById('comentarios');
const animalesContainer = document.getElementById('Animales');
const player = document.getElementById('player');
const modalBody = document.querySelector('.modal-body');

let animales = [];

btnRegistrar.addEventListener('click', async () => {
    const animalName = animalSelect.value;
    const edad = edadSelect.value;
    const comentarios = comentariosInput.value;

    if (animalName === 'Seleccione un animal' || edad === 'Seleccione un rango de años' || comentarios.trim() === '') {
        alert('Todos los campos son obligatorios.');
        return;
    }

    const animalesData = await loadAnimals.getData();
    const animalData = animalesData.find(animal => animal.name === animalName);
    
    let animal;
    switch (animalName) {
        case 'Leon':
            animal = new Leon(animalName, edad, animalData.imagen, comentarios, animalData.sonido);
            break;
        case 'Lobo':
            animal = new Lobo(animalName, edad, animalData.imagen, comentarios, animalData.sonido);
            break;
        case 'Oso':
            animal = new Oso(animalName, edad, animalData.imagen, comentarios, animalData.sonido);
            break;
        case 'Serpiente':
            animal = new Serpiente(animalName, edad, animalData.imagen, comentarios, animalData.sonido);
            break;
        case 'Aguila':
            animal = new Aguila(animalName, edad, animalData.imagen, comentarios, animalData.sonido);
            break;
        default:
            alert('Animal no reconocido.');
            return;
    }

    animales.push(animal);
    renderAnimales();

    animalSelect.value = 'Seleccione un animal';
    edadSelect.value = 'Seleccione un rango de años';
    comentariosInput.value = '';
});

function renderAnimales() {
    animalesContainer.innerHTML = '';
    animales.forEach(animal => {
        const div = document.createElement('div');
        div.className = 'card m-2';
        div.style.width = '150px';

        div.innerHTML = `
            <img src="assets/imgs/${animal.Img}" class="card-img-top" alt="${animal.Nombre}" data-toggle="modal" data-target="#exampleModal" onclick="showDetails('${animal.Nombre}')">
            <div class="card-body">
                <h5 class="card-title">${animal.Nombre}</h5>
                <p class="card-text">${animal.Edad}</p>
                <button class="btn btn-primary" onclick="playSound('${animal.Sonido}')">Escuchar sonido</button>
            </div>
        `;

        animalesContainer.appendChild(div);
    });
}

window.playSound = function(sonido) {
    player.src = `assets/sounds/${sonido}`;
    player.play();
};

window.showDetails = function(name) {
    const animal = animales.find(animal => animal.Nombre === name);
    modalBody.innerHTML = `
    <img src="assets/imgs/${animal.Img}" class="img-fluid mb-2" alt="${animal.Nombre}">
    <div style="text-align: center;">
        <p class="mb-0"><strong>Age:</strong> ${animal.Edad}</p>
        <p><strong>Comentarios:</strong></p>
        <p style="margin-bottom: 20px;">${animal.Comentarios}</p>
    </div>
    <audio controls>
        <source src="assets/sounds/${animal.Sonido}" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
    `;
};

