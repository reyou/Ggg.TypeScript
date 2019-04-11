/*In most cases, enums are a perfectly valid solution. However sometimes 
requirements are tighter. To avoid paying the cost of extra generated 
code and additional indirection when accessing enum values, it’s possible 
to use const enums. Const enums are defined using the const 
modifier on our enums: */
function ConstEnums() {
  const enum Enum {
    A = 1,
    B = A * 2
  }
  console.log(Enum.B);
}
ConstEnums();
/*Const enums can only use constant enum expressions and unlike regular 
enums they are completely removed during compilation. Const enum members 
are inlined at use sites. This is possible since const enums cannot have 
computed members. */
function ConstEnums2() {
  const enum Directions {
    Up,
    Down,
    Left,
    Right
  }

  let directions = [
    Directions.Up,
    Directions.Down,
    Directions.Left,
    Directions.Right
  ];
}
