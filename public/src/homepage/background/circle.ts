import { Element } from './element';

export class Circle extends Element {
    public radius: number;

    constructor(radius: number, offsetX: number, offsetY: number, velocity: number, color: string) {
        super(offsetX, offsetY, velocity, color);
        this.radius = radius;
    }
}
