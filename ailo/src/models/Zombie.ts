import LogDisplay from "../ui/console/LogDisplay";
import Point from "./Point";

export default class Zombie extends Point {
    x: number;
    y: number;
    name:string;

    movePoint (x:number, y:number) : Zombie {      
        this.x = x;
        this.y = y;
        LogDisplay(`[ Zombie Activity ] : Zombie (from ${this.name}) moved to (${x},${y})`);
        this.name = `(${x},${y})`;
        return this;
    }

    constructor(x: number, y: number) {
        super(x, y);
        this.x = x;
        this.y = y;
        this.name = `(${x},${y})`;
        LogDisplay(`[ Zombie Activity ] : Zombie Spawned at ${this.name}`);

    }

}