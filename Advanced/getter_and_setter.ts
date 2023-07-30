/**
 * When it comes to access the properties of a class in any Object Oriented Programming language, 
 * the concepts comes into picture is getter and setter methods.
 * TypeScript has built in keywords to create getter and setter methods. 
 * Following is the code example for it.
 */


/**
 * Note: We need to add an underscore so as to use them for getter and setter properties.
 * In this way, we can access them using their same name declaration.
 */
class Animal {
    constructor(
        private _noOfLegs: number, 
        private _skinColor: string, 
        private _dietType: string,
    ) {}

    
    public get noOfLegs(): number {
        return this._noOfLegs
    }
 
    public set noOfLegs(leg: number) {

        if(leg < 0 || leg === 3 || leg > 4){
            throw new Error("Number of legs can be either 2 or 4");
            
        }

        else{
            this._noOfLegs = leg;
        }
        
    }

    public get skinColor(): string {
        return this._skinColor
    }

    public set skinColor(col: string) {
        this._skinColor = col;
    }

    public getData(): void{
        console.log(
            "The egs of the animal are: " + this._noOfLegs,
            "\nThe Skin color of the animal is: " + this._skinColor,
            "\nThe diet type of the animal is: "+ this._dietType
        )
    }
   
}

let dog:Animal = new Animal(4, "Brown", "Omnivorous")
dog.getData()

// using the getter and setter methods: 
let skinCol = dog.skinColor
console.log("The skin color using getter is: ", skinCol)
skinCol = "White"
console.log("Changed skin color: ", skinCol)
