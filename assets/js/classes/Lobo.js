import { Animal } from './Animal.js';

export class Lobo extends Animal {
    Aullar() {
        console.log(`${this.Nombre} hace un sonido: Aullar`);
    }
}
