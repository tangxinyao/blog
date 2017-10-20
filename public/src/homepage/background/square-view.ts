import { Square } from './square';

const SQRT3 = Math.sqrt(3);

export const drawSquare = (context: CanvasRenderingContext2D, square: Square): void => {
    context.beginPath();
    context.closePath();
    context.lineTo(square.offsetX, square.offsetY);
    context.lineTo(square.offsetX + square.sideWidth, square.offsetY);
    context.lineTo(square.offsetX + square.sideWidth, square.offsetY + square.sideWidth);
    context.lineTo(square.offsetX, square.offsetY + square.sideWidth);
    context.closePath();
    context.strokeStyle = square.color;
    context.lineWidth = 4;
    context.stroke();
};
