import * as React from 'react';

import { Canvas } from './canvas';
import { drawCanvas } from './canvas-view';

export class BackgroundView extends React.Component<any, any>{
    private dom: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private canvas: Canvas;

    public componentDidMount() {
        this.canvas = new Canvas(document.body.clientWidth, document.body.clientHeight);
        this.ctx = this.dom.getContext('2d');
        requestAnimationFrame(this.rerender);
    }

    public componentWillUnmount() {
        this.canvas.running = false;
    }

    public render() {
        return (
            <canvas ref={this.ref} width={document.body.clientWidth} height={document.body.clientHeight}
                style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1 }} ></canvas>
        );
    }

    private ref: React.Ref<HTMLCanvasElement> = (dom) => {
        this.dom = dom;
    }

    private rerender = (time: number) => {
        this.canvas.move();
        drawCanvas(this.ctx, this.canvas);
        if (this.canvas.running) {
            requestAnimationFrame(this.rerender);
        }
    }
}
