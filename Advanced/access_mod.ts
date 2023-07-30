/**
 * The access modifiers are one of the crucial parts when it comes to programming in OOPS.
 * These allow the programmer to create access such types of variables that have:
 *  -> Public
 *  -> Private
 *  -> Protected access to the properties.
 * 
 * In typescript if we do not declare some of the acces modifiers to variables they are said to be public.
 *  
 */

class Rectanngle{
    constructor(private length: number, private breadth: number){
        // constructor containing all record of sides
    }


    // returns an array of sides of number data type
    public getSides() : number[]{
        return [this.length, this.breadth]
    }
    
    public calculateArea(){
         return this.length * this.breadth;
    }

    public setSides(side1: number, side2: number ){

        if(side1 > 0 && side2 > 0){
            this.length = side1;
            this.breadth = side2;
        }

        else{
            throw new Error("The sides are of negative value...");
        }
       

        console.log("Changed sides are: ", this.length, this.breadth)
    }

}

let rect1 = new Rectanngle(12, 34);
var sides:number[] = rect1.getSides()
var area: number = rect1.calculateArea()

console.log("Sides of rectangle are: " + sides);
rect1.setSides(45, 67);
sides = rect1.getSides()
console.log("Sides of rectangle are: " + sides);
area = rect1.calculateArea()
console.log("Area of the rectangle is: " + area);


