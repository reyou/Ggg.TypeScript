"use strict";
/*If you’ve read about typeof type guards and are familiar with
the instanceof operator in JavaScript, you probably have some idea of what
this section is about.
instanceof type guards are a way of narrowing types using their constructor
function. For instance, let’s borrow our industrial string-padder example from earlier: */
function InstanceOfTypeGuards() {
    class SpaceRepeatingPadder {
        constructor(numSpaces) {
            this.numSpaces = numSpaces;
        }
        getPaddingString() {
            return Array(this.numSpaces + 1).join(" ");
        }
    }
    class StringPadder {
        constructor(value) {
            this.value = value;
        }
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
    let padder = getRandomPadder();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2VvZiB0eXBlIGd1YXJkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3R5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL0FkdmFuY2VkIFR5cGVzL2luc3RhbmNlb2YgdHlwZSBndWFyZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OzBGQUkwRjtBQUMxRixTQUFTLG9CQUFvQjtJQUkzQixNQUFNLG9CQUFvQjtRQUN4QixZQUFvQixTQUFpQjtZQUFqQixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQUcsQ0FBQztRQUN6QyxnQkFBZ0I7WUFDZCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDO0tBQ0Y7SUFDRCxNQUFNLFlBQVk7UUFDaEIsWUFBb0IsS0FBYTtZQUFiLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBRyxDQUFDO1FBQ3JDLGdCQUFnQjtZQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDO0tBQ0Y7SUFDRCxTQUFTLGVBQWU7UUFDdEIsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRztZQUN4QixDQUFDLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7WUFDN0IsQ0FBQyxDQUFDLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxnREFBZ0Q7SUFDaEQsSUFBSSxNQUFNLEdBQVcsZUFBZSxFQUFFLENBQUM7SUFFdkMsSUFBSSxNQUFNLFlBQVksb0JBQW9CLEVBQUU7UUFDMUMsTUFBTSxDQUFDLENBQUMsMENBQTBDO0tBQ25EO0lBQ0QsSUFBSSxNQUFNLFlBQVksWUFBWSxFQUFFO1FBQ2xDLE1BQU0sQ0FBQyxDQUFDLGtDQUFrQztLQUMzQztBQUNILENBQUM7QUFDRDs7OztpQkFJaUIifQ==