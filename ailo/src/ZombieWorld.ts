import parseInputAndGetParams from "./helper/parseInputAndGetParams";
import ZombieParameters from "./models/ZombieParameters";
import Creature from "./models/Creature";
import LogDisplay from "./ui/console/LogDisplay";
import MoveDirection from "./helper/MoveDirection";
import Zombie from "./models/Zombie";
import { exit } from "process";

export default class ZombieWorld {
    inputPath: string;
    zombieParameters: ZombieParameters;

    constructor(inputPath: string) {
        this.inputPath = inputPath;
        this.zombieParameters = new ZombieParameters();
    }

    // Run Zombie World here
    run = async () => {
        await this.readInput();
        LogDisplay("Running Zombie World", true);
        let zombieIndex = this.zombieParameters.zombieArray.findIndex(zombie => zombie != null);
        while (zombieIndex < this.zombieParameters.zombieArray.length) {
            this.moveZombie(zombieIndex);
            zombieIndex++;
        }

        // Logging Zombie Positions
        LogDisplay("Zombie's positions:", true);
        LogArray(this.zombieParameters.zombieArray);


        // Logging Creatures Positions
        LogDisplay("Creature's positions:", true);
        LogArray(this.zombieParameters.creatureArray);


    }

    readInput = async () => {
        this.zombieParameters = await parseInputAndGetParams(this.inputPath).then((zombieParam: ZombieParameters) => zombieParam);
        if(isNaN(this.zombieParameters.N) || this.zombieParameters.N <=0) {
            LogDisplay("Size of grid(N) is invalid, found: "+this.zombieParameters.N);
            exit(1);
        }
    }

    // move zombie and if creature found the zombify it
    moveZombie(zombieIndex: number) {
        if (zombieIndex == -1) {
            this.zombieParameters.zombieArray.splice(zombieIndex, 1); // remove creature from array
            return;
        }

        const zombie = this.zombieParameters.zombieArray[zombieIndex];
        let charMovesArray = [...this.zombieParameters.moves]; // string moves to char array

        charMovesArray.forEach((c) => {
            MoveDirection(c, this.zombieParameters, zombieIndex)
            const creature = this.isCreatureFound(zombie);
            const newZombie: Zombie | null = this.zombify(creature);
            if (newZombie) this.zombieParameters.zombieArray.push(newZombie)
        });
    }

    isCreatureFound = (zombie: Zombie): Creature | null => {
        const index: number = this.zombieParameters.creatureArray.findIndex((creature => (creature.x == zombie.x && creature.y == zombie.y)));
        if (index != -1) {
            const foundCreature = this.zombieParameters.creatureArray[index];
            this.zombieParameters.creatureArray.splice(index, 1); // remove creature from array
            return foundCreature;
        }
        return null;
    }

    zombify = (creature: Creature | null): Zombie | null => {
        if (creature) {
            return creature.zombify();
        }
        return null;
    }

}

function LogArray(array: [Creature] | [Zombie]) {
    if (array.length > 0) {
        array.forEach((el: Creature | Zombie) => {
            LogDisplay(el.name + " ");
        });
    } else LogDisplay("none");
}
