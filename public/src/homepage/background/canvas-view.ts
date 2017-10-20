import { Canvas } from './canvas';
import { Circle } from './circle';
import { drawCircle } from './circle-view';
import { Square } from './square';
import { drawSquare } from './square-view';

export const drawCanvas = (context: CanvasRenderingContext2D, canvas: Canvas) => {
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    for (const element of canvas.elements) {
        if (element instanceof Circle) {
            drawCircle(context, element);
        } else if (element instanceof Square) {
            drawSquare(context, element);
        }
    }
};
