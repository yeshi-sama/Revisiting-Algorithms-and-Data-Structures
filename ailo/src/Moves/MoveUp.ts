import Zombie from "../models/Zombie";
import LogDisplay from "../ui/console/LogDisplay";

const moveUp = (zombie: Zombie, gridSize: number): Zombie => {
    LogDisplay("[ Zombie is Moving Up ]", true);

    let x = zombie.x;
    let y = zombie.y - 1;

    if (y < 0 ) y = gridSize-1;
    return zombie.movePoint(x, y);
}

export default moveUp;