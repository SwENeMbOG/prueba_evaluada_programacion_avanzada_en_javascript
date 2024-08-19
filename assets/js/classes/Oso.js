import { Animal } from './Animal.js';

export class Oso extends Animal {
    Gruñir() {
        console.log(`${this.Nombre} hace un sonido: Gruñir`);
    }
}
