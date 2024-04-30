import { Spaceship, Direction } from './Spaceship';

export function Navegation(ship: Spaceship, direction: Direction): number {
    let distance = 0;
    switch (direction) {
        case Direction.North:
            distance = 10;
            break;
        case Direction.South:
            distance = 10;
            break;
        case Direction.East:
            distance = 10;
            break;
        case Direction.West:
            distance = 10;
            break;
        default:
            throw new Error('Dirección no válida');
    }
    return distance;
}
export { Direction };

