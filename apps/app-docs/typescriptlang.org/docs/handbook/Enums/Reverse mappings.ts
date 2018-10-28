/*In addition to creating an object with property names for members, 
numeric enums members also get a reverse mapping from enum values 
to enum names. For example, in this example: */
function ReverseMappingEnums() {
  enum Enum {
    A
  }
  let a = Enum.A;
  let nameOfA = Enum[a]; // "A"
  console.log(nameOfA);
}
ReverseMappingEnums();
