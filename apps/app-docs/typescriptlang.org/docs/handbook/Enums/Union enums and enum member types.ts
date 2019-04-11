function UnionEnums() {
  enum ShapeKind {
    Circle,
    Square
  }
  interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
  }
  interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
  }
  let c: Circle = {
    kind: ShapeKind.Circle,
    //    ~~~~~~~~~~~~~~~~ Error if you put Square!
    radius: 100
  };
}
