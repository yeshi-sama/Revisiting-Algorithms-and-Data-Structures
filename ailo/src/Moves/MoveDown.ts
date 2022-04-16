import Zombie from "../models/Zombie";
import LogDisplay from "../ui/console/LogDisplay";

const moveDown = (zombie: Zombie, gridSize:number): Zombie => {
    LogDisplay("[ Zombie is Moving Down ]",true);
    
    let x = zombie.x;
    let y = zombie.y + 1;

    if(y>=gridSize) y = 0;
    return zombie.movePoint(x, y);
}

export default moveDown;