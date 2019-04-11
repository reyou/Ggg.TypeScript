// An interface can extend multiple interfaces, creating a combination of all of the interfaces.
interface ShapeExtend {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface SquareExtend extends ShapeExtend, PenStroke {
  sideLength: number;
}

let squareExtend = <SquareExtend>{};
squareExtend.color = "blue";
squareExtend.sideLength = 10;
squareExtend.penWidth = 5.0;
console.log(squareExtend);
