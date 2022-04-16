import Zombie from "../models/Zombie";
import LogDisplay from "../ui/console/LogDisplay";

const moveLeft = (zombie: Zombie, gridSize:number): Zombie => {
    LogDisplay("[ Zombie is Moving Left ]", true);

    let x = zombie.x - 1;
    let y = zombie.y;

    if (x < 0) x = gridSize  - 1;
    return zombie.movePoint(x, y);    
}

export default moveLeft;