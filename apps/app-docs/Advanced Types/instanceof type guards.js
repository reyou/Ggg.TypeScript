/*If you’ve read about typeof type guards and are familiar with
the instanceof operator in JavaScript, you probably have some idea of what
this section is about.
instanceof type guards are a way of narrowing types using their constructor
function. For instance, let’s borrow our industrial string-padder example from earlier: */
function InstanceOfTypeGuards() {
    var SpaceRepeatingPadder = (function () {
        function SpaceRepeatingPadder(numSpaces) {
            this.numSpaces = numSpaces;
        }
        SpaceRepeatingPadder.prototype.getPaddingString = function () {
            return Array(this.numSpaces + 1).join(" ");
        };
        return SpaceRepeatingPadder;
    }());
    var StringPadder = (function () {
        function StringPadder(value) {
            this.value = value;
        }
        StringPadder.prototype.getPaddingString = function () {
            return this.value;
        };
        return StringPadder;
    }());
    function getRandomPadder() {
        return Math.random() < 0.5
            ? new SpaceRepeatingPadder(4)
            : new StringPadder("  ");
    }
    // Type is 'SpaceRepeatingPadder | StringPadder'
    var padder = getRandomPadder();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2VvZiB0eXBlIGd1YXJkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluc3RhbmNlb2YgdHlwZSBndWFyZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7MEZBSTBGO0FBQzFGO0lBSUU7UUFDRSw4QkFBb0IsU0FBaUI7WUFBakIsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUFHLENBQUM7UUFDekMsK0NBQWdCLEdBQWhCO1lBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBQ0gsMkJBQUM7SUFBRCxDQUFDLEFBTEQsSUFLQztJQUNEO1FBQ0Usc0JBQW9CLEtBQWE7WUFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQUcsQ0FBQztRQUNyQyx1Q0FBZ0IsR0FBaEI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDO1FBQ0gsbUJBQUM7SUFBRCxDQUFDLEFBTEQsSUFLQztJQUNEO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHO2NBQ3RCLElBQUksb0JBQW9CLENBQUMsQ0FBQyxDQUFDO2NBQzNCLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxnREFBZ0Q7SUFDaEQsSUFBSSxNQUFNLEdBQVcsZUFBZSxFQUFFLENBQUM7SUFFdkMsRUFBRSxDQUFDLENBQUMsTUFBTSxZQUFZLG9CQUFvQixDQUFDLENBQUMsQ0FBQztRQUMzQyxNQUFNLENBQUMsQ0FBQywwQ0FBMEM7SUFDcEQsQ0FBQztJQUNELEVBQUUsQ0FBQyxDQUFDLE1BQU0sWUFBWSxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxDQUFDLGtDQUFrQztJQUM1QyxDQUFDO0FBQ0gsQ0FBQztBQUNEOzs7O2lCQUlpQiJ9