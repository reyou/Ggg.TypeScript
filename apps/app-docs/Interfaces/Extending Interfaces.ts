/*Like classes, interfaces can extend each other. 
This allows you to copy the members of one interface into another, 
which gives you more flexibility in how you separate your interfaces 
into reusable components. */
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square2 = <Square>{};
square2.color = "blue";
square2.sideLength = 10;
console.log(square2);
