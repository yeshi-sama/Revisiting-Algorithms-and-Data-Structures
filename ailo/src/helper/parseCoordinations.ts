import Creature from "../models/Creature";
import Zombie from "../models/Zombie";
import LogDisplay from "../ui/console/LogDisplay";

type ZombieOrCreature = [Zombie] | [Creature];

// Returns Array of coordinates from the given coordinates
function parseCoordinates(coordinates: string, isZombie?: boolean): ZombieOrCreature {
    let coordinatesArr: [any] = <[any]> <unknown>[];

    for (let i: number = 1; i < coordinates.length; i += 1) {
        const curChar: string = coordinates[i];

        if (!isNaN(Number(curChar))) { // if it is a number get the xy coordinates
            let point: Zombie | Creature;

            point = isZombie ?
                new Zombie(Number(coordinates[i]), Number(coordinates[i + 2])) :
                new Creature(Number(coordinates[i]), Number(coordinates[i + 2]));;

            coordinatesArr.push(point);

            if (isZombie) break;
            i += 3; // start looking for the next coordinates
        } else {
            LogDisplay("[Error] Couldn't parse string: "+curChar);
            LogDisplay("[Info] Please check the input data before proceeding");
        }
    }

    return <ZombieOrCreature>coordinatesArr;
}

export default parseCoordinates;