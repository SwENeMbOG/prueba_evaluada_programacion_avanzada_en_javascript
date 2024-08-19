import { Animal } from './Animal.js';

export class Leon extends Animal {
    Rugir() {
        console.log(`${this.Nombre} hace un sonido: Rugir`);
    }
}
