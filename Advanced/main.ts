export class Circle{
    constructor(private _radius: number){}

    public getArea(): number{
        return 2 * Math.PI * (this._radius * this._radius);
    }

    public getCircumference(): number{
        return 2 * (this._radius * Math.PI);
    }

    public getDiameter(): number{
        return 2 * this._radius;
    }
}