import LogDisplay from "../ui/console/LogDisplay";

export default class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    move(x: number, y: number) {
        this.x = x;
        this.y = y;
        LogDisplay(`Point moved to (${x},${y})`);
    }
}