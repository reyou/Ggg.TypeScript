/*As we said in the previous section, a class declaration 
creates two things: a type representing instances of the class 
and a constructor function. Because classes create types, you can 
use them in the same places you would be able to use interfaces. */
class Point2 {
  x: number | undefined;
  y: number | undefined;
}

interface Point3d2 extends Point2 {
  z: number;
}

let point3d: Point3d2 = { x: 1, y: 2, z: 3 };

console.log(point3d);
