
import Point from "./Point";
import Zombie from "./Zombie";
import LogDisplay from "../ui/console/LogDisplay";


export default class Creature extends Point {

    x: number;
    y: number;
    name: string;

    constructor(x: number, y: number) {
        super(x, y);
        this.x = x;
        this.y = y;
        LogDisplay(`[Creature Activity] : Creature Spawned at ${x},${y}`);
        this.name = `(${x}, ${y})`;
    }

    contains(x: number, y: number): boolean {
        if (this.x == x && this.y == y) return true;
        return false;
    }

    zombify(): Zombie {
        LogDisplay(`[Creature Activity] : Creature Zombified at ${this.name}`);
        return new Zombie(this.x, this.y);
    }
}