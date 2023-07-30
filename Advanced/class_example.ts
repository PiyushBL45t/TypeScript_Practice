/**
 * In a class we can enclose methods and properties of the same or similar nature.
 * Class is the main implmentation of Object Oriented Programming.
 * Once a class is declared we can create an object. Each object is an instance of the class.
 * The typescript compiler assigns various blocks of memory to the objects as we create them.
 */



class Vehicle {
    
    noOfWheels : number;
    fuelType : string;
    category : string;
    fuelCapacity : number;


    constructor(noOfWheels : number, fuelType : string, category : string, fuelCapacity : number){
        this.noOfWheels = noOfWheels;
        this.fuelType = fuelType;
        this.category = category;
        this.fuelCapacity = fuelCapacity;

    }
    
    getNoOfWheels() {
        console.log("No of wheels of the vehicle: ", this.noOfWheels)
    }

    getFuelType() {
        console.log("Type of suel the car consumes: ", this.fuelType)

    }

    getCategory(){
        console.log("Category of the vehicle is: ", this.category);
    }
}

let vehicle1 : Vehicle = new Vehicle(4, "Petrol", "SUV", 30)
vehicle1.getCategory()
vehicle1.getFuelType()
vehicle1.getNoOfWheels()

let bike : Vehicle = new Vehicle(2, "Petrol", "Sports Bike", 21)
bike.getCategory()
bike.getFuelType()
bike.getNoOfWheels()