
import { Planet, ResourceType } from './Planet';

export function collectResources<T>(planet: Planet, amount: number): T[] {
    console.log(`Recolectando ${amount} recursos de tipo ${ResourceType[planet.resourceName]}...`);
    return [];
}