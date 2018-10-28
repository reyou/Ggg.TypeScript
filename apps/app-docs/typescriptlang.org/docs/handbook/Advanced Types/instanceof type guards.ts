/*If you’ve read about typeof type guards and are familiar with 
the instanceof operator in JavaScript, you probably have some idea of what 
this section is about.
instanceof type guards are a way of narrowing types using their constructor 
function. For instance, let’s borrow our industrial string-padder example from earlier: */
function InstanceOfTypeGuards() {
  interface Padder {
    getPaddingString(): string;
  }
  class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) {}
    getPaddingString() {
      return Array(this.numSpaces + 1).join(" ");
    }
  }
  class StringPadder implements Padder {
    constructor(private value: string) {}
    getPaddingString() {
      return this.value;
    }
  }
  function getRandomPadder() {
    return Math.random() < 0.5
      ? new SpaceRepeatingPadder(4)
      : new StringPadder("  ");
  }
  // Type is 'SpaceRepeatingPadder | StringPadder'
  let padder: Padder = getRandomPadder();

  if (padder instanceof SpaceRepeatingPadder) {
    padder; // type narrowed to 'SpaceRepeatingPadder'
  }
  if (padder instanceof StringPadder) {
    padder; // type narrowed to 'StringPadder'
  }
}
/*The right side of the instanceof needs to be a constructor function, 
and TypeScript will narrow down to:
1- the type of the function’s prototype property if its type is not any
2- the union of types returned by that type’s construct signatures
in that order. */
