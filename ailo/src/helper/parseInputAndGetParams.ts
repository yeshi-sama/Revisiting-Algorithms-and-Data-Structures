import readline from 'readline';
import fs from 'fs';
import ZombieParameters from '../models/ZombieParameters';
import Zombie from '../models/Zombie';
import Creature from '../models/Creature';
import parseCoordinates from './parseCoordinations';
import LogDisplay from '../ui/console/LogDisplay';

export default async function parseInputAndGetParams(inputPath: string): Promise<ZombieParameters> {
    LogDisplay("Reading input from src/input.txt", true);

    const readInterface = readline.createInterface({
        input: fs.createReadStream(inputPath),
        crlfDelay: Infinity
    });

    let zombieParamValues: ZombieParameters = await mapZombieParamsFromInput(readInterface);
    zombieParamValues.inputPath = inputPath; // Adding input Path
    return <ZombieParameters>zombieParamValues;
}

function logPerformance(start: number): void {
    const end = new Date().getTime();
    const time = end - start;
    console.log(`\n~~~~[Reading finished in: ${time}ms]`);
}
async function mapZombieParamsFromInput(readInterface: readline.Interface): Promise<ZombieParameters> {
    const start = new Date().getTime();
    let lineNum: number = 1;
    let zombieParamValues: ZombieParameters = new ZombieParameters();

    for await (const line of readInterface) {
        switch (lineNum) {
            case 1: {
                zombieParamValues.N = Number(line); // Adding Grid Num
                break;
            }
            case 2: {
                zombieParamValues.zombieArray = <[Zombie]> parseCoordinates(line, true); // Parsing coordinates to Zombie array
                break;
            }
            case 3: {
                zombieParamValues.creatureArray = <[Creature]>parseCoordinates(line); // Parsing coordinates to Creature array
                break;
            }
            case 4: {
                zombieParamValues.moves = line.toUpperCase(); // Converting all moves to upper case
            }
            default: break;
        }
        lineNum++;
    }

    logPerformance(start); // Log execution time
    return zombieParamValues
}

