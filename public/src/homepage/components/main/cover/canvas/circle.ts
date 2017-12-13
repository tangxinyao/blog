export class Circle {
    public static build = () => {
        const x = Math.floor(25 + Math.random() * 450);
        const y = Math.floor(25 + Math.random() * 450);
        const age = Math.floor(9 + Math.random() * 16);
        return new Circle(x, y, 1, age);
    }

    public x: number;
    public y: number;
    public radius: number;
    public age: number;

    constructor(x: number, y: number, radius: number, age: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.age = age;
    }

    public clone = () => {
        return new Circle(this.x, this.y, this.radius + 0.125, this.age - 0.125);
    }
}
