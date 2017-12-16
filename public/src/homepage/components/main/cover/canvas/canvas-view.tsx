import * as React from 'react';
import { Circle } from './circle';

export class CanvasView extends React.Component<any, any> {
    private ctx: CanvasRenderingContext2D;
    private dom: HTMLCanvasElement;
    private animationFrame: number;
    private lastRecord: number;
    private circles: Circle[];

    constructor(props: any) {
        super(props);
        this.circles = [];
        this.lastRecord = 0;
    }

    public shouldComponentUpdate() {
        return false;
    }

    public componentDidMount() {
        this.ctx = this.dom.getContext('2d');
        this.animationFrame = requestAnimationFrame(this.animate);
    }

    public componentWillUnmount() {
        cancelAnimationFrame(this.animationFrame);
    }

    public render() {
        return <canvas className="cover-canvas" ref={this.ref} width="500" height="500"></canvas>;
    }

    private ref = (dom: HTMLCanvasElement) => {
        this.dom = dom;
    }

    private animate = () => {
        this.ctx.clearRect(0, 0, 500, 500);

        const circles = [];
        for (const circle of this.circles) {
            if (circle.age === 0) {
                continue;
            }
            circles.push(circle.clone());
        }

        if (this.lastRecord === 0) {
            circles.push(Circle.build());
            this.lastRecord = Math.floor(Math.random() * 120);
        } else {
            this.lastRecord = this.lastRecord - 1;
        }

        for (const circle of circles) {
            this.drawCircle(circle);
        }

        this.circles = circles;
        this.animationFrame = requestAnimationFrame(this.animate);
    }

    private drawCircle(circle: Circle) {
        const ctx = this.ctx;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.strokeStyle = '#f2753f';
        ctx.stroke();
        ctx.closePath();
    }
}
