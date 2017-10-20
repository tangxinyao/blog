import { Circle } from './circle';
import { Element } from './element';
import { Square } from './square';

export class Canvas {
    public static THEME_COLOR = ['#ffe957', 'f29f3f', '#f2753f', '#e87e51'];

    public clientWidth: number;
    public clientHeight: number;
    public elements: Element[];
    public running: boolean;
    public count: number;

    constructor(clientWidth: number, clientHeight: number) {
        this.elements = [];
        this.clientWidth = clientWidth;
        this.clientHeight = clientHeight;
        this.running = true;
        this.count = 0;
    }

    public move = () => {
        if (this.count < 120) {
            this.count++;
        } else {
            const type = Math.floor(Math.random() * 2);
            const color = Canvas.THEME_COLOR[Math.floor(Math.random() * 4)];
            this.elements.push(this.generateElement(type, this.clientWidth, this.clientHeight, color));
            this.count = 0;
        }
        for (let i = 0; i < this.elements.length; i++) {
            const element = this.elements[i];
            if (element.dead) {
                this.elements.splice(i, 1);
            } else {
                element.move(this.clientWidth, this.clientHeight);
            }
        }
    }

    private generateElement(type: number, clientWidth: number, clientHeight: number, color: string): Element {
        const offsetX = this.rangeInteger(0, clientWidth);
        const velocity = this.rangeFloat(0.5, 0.5);
        switch (type) {
            case 0:
                const radius = this.rangeInteger(4, 1);
                return new Circle(radius, offsetX, clientHeight, velocity, color);
            case 1:
                const lineWidth = this.rangeInteger(8, 4);
                return new Square(lineWidth, offsetX, clientHeight, velocity, color);
        }
    }

    private rangeInteger(offset: number, delta: number) {
        return offset + Math.ceil(Math.random() * delta);
    }

    private rangeFloat(offset: number, delta: number) {
        return offset + Math.ceil(Math.random() * delta * 8) / 8;
    }
}
