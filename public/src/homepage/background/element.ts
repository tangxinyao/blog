export class Element {
    public color: string;
    public dead: boolean;
    public offsetX: number;
    public offsetY: number;
    public velocity: number;

    constructor(offsetX: number, offsetY: number, velocity: number, color: string) {
        this.color = color;
        this.dead = false;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.velocity = velocity;
    }

    public move = (clientWidth: number, clientHeight: number) => {
        if (this.offsetY < 0) {
            this.dead = true;
        }
        this.offsetY -= this.velocity;
    }
}
