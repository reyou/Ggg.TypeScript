/*A generic class has a similar shape to a generic interface. 
Generic classes have a generic type parameter list in angle brackets 
(<>) following the name of the class. */
function GenericClasses() {
  class GenericNumber<T> {
    zeroValue: T | undefined;
    add: ((x: T, y: T) => T) | undefined;
  }
  let myGenericNumber = new GenericNumber<number>();
  myGenericNumber.zeroValue = 0;
  myGenericNumber.add = function(x, y) {
    return x + y;
  };
  let result = myGenericNumber.add(1, 5);
  console.log(result);
}
GenericClasses();
/*This is a pretty literal use of the GenericNumber class, but 
you may have noticed that nothing is restricting it to only use the number type. 
We could have instead used string or even more complex objects. */
function GenericClasses2() {
  class GenericNumber<T> {
    zeroValue: T | undefined;
    add: ((x: T, y: T) => T) | undefined;
  }
  let stringNumeric = new GenericNumber<string>();
  stringNumeric.zeroValue = "";
  stringNumeric.add = function(x, y) {
    return x + y;
  };
  console.log("GenericClasses2:");
  console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
}
GenericClasses2();
