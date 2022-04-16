import Zombie from "../models/Zombie";
import LogDisplay from "../ui/console/LogDisplay";

const moveRight = (zombie: Zombie, gridSize: number): Zombie => {
    LogDisplay("[ Zombie is Moving Right ]", true);

    let x: number = zombie.x + 1 ;
    let y: number = zombie.y;

    if (x >= gridSize) x = 0;
    return zombie.movePoint(x, y);
}

export default moveRight;