import {Circle} from './main'

let circ1 = new Circle(34);
let diameter = circ1.getDiameter()
let area = circ1.getArea()
let circumference = circ1.getCircumference()

console.log(
    "The area of circle is: " + Math.fround(area),
    "\nThe diameter of the circle is: " + diameter,
    "\nThe circumference of the circle is: " + Math.fround(circumference)
)

