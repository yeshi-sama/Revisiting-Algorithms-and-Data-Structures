import Creature from "./Creature";
import Zombie from "./Zombie";

export default class ZombieParameters {
    N!: number;
    zombieArray!: [Zombie]; // contains initial position 
    creatureArray!: [Creature];
    moves!: string;
    inputPath?: string;

    constructor() {
        this.N = 0;
        this.zombieArray = [] as unknown as [Zombie];
        this.moves = "";
        this.creatureArray = [] as unknown as [Creature];
        this.inputPath = "";
    }
}