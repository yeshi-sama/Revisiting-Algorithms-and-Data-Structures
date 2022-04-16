import Zombie from "../models/Zombie";
import ZombieParameters from "../models/ZombieParameters";
import moveDown from "../Moves/MoveDown";
import moveLeft from "../Moves/MoveLeft";
import moveRight from "../Moves/MoveRight";
import moveUp from "../Moves/MoveUp";

export default function MoveDirection(move: string, zombieParameters: ZombieParameters, zombieIndex:number) {
    const gridSize: number = zombieParameters.N;
    let zombie: Zombie = zombieParameters.zombieArray[zombieIndex];

    let updatedZombie: Zombie | null = null;
    switch (move) {
        case 'R': updatedZombie = moveRight(zombie, gridSize); break;
        case 'D': updatedZombie = moveDown(zombie, gridSize); break;
        case 'U': updatedZombie = moveUp(zombie, gridSize); break;
        case 'L': updatedZombie = moveLeft(zombie, gridSize); break;
        default: break;
    }

    if (updatedZombie) {
        zombieParameters.zombieArray[zombieIndex] = updatedZombie;
    }
} 