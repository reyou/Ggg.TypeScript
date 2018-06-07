/*String enums are a similar concept, but have some subtle 
runtime differences as documented below. In a string enum, 
each member has to be constant-initialized with a string 
literal, or with another string enum member. */
function StringEnums() {
  enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
  }
}
