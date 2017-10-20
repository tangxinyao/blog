import { Circle } from './circle';

export const drawCircle = (context: CanvasRenderingContext2D, circle: Circle): void => {
    context.beginPath();
    context.arc(circle.offsetX, circle.offsetY, circle.radius, 0, Math.PI * 2);
    context.closePath();
    context.fillStyle = circle.color;
    context.fill();
};
