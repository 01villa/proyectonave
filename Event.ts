import { Spaceship } from './Spaceship';

// Clase para representar un evento
export class Event {
    constructor(public name: string, public effect: (ship: Spaceship) => void) {}
}
