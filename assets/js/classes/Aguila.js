import { Animal } from './Animal.js';

export class Aguila extends Animal {
    Chillar() {
        console.log(`${this.Nombre} hace un sonido: Chillar`);
    }
}
