import { Element } from './element';

export class Square extends Element {
    public sideWidth: number;
    constructor(sideWidth: number, offsetX: number, offsetY: number, velocity: number, color: string) {
        super(offsetX, offsetY, velocity, color);
        this.sideWidth = sideWidth;
    }
}
