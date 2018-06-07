/*If you’ve read about typeof type guards and are familiar with
the instanceof operator in JavaScript, you probably have some idea of what
this section is about.
instanceof type guards are a way of narrowing types using their constructor
function. For instance, let’s borrow our industrial string-padder example from earlier: */
function InstanceOfTypeGuards() {
    var SpaceRepeatingPadder = /** @class */ (function () {
        function SpaceRepeatingPadder(numSpaces) {
            this.numSpaces = numSpaces;
        }
        SpaceRepeatingPadder.prototype.getPaddingString = function () {
            return Array(this.numSpaces + 1).join(" ");
        };
        return SpaceRepeatingPadder;
    }());
    var StringPadder = /** @class */ (function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2VvZiB0eXBlIGd1YXJkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluc3RhbmNlb2YgdHlwZSBndWFyZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7MEZBSTBGO0FBQzFGO0lBSUU7UUFDRSw4QkFBb0IsU0FBaUI7WUFBakIsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUFHLENBQUM7UUFDekMsK0NBQWdCLEdBQWhCO1lBQ0UsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUNILDJCQUFDO0lBQUQsQ0FBQyxBQUxELElBS0M7SUFDRDtRQUNFLHNCQUFvQixLQUFhO1lBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFHLENBQUM7UUFDckMsdUNBQWdCLEdBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7UUFDSCxtQkFBQztJQUFELENBQUMsQUFMRCxJQUtDO0lBQ0Q7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHO1lBQ3hCLENBQUMsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNELGdEQUFnRDtJQUNoRCxJQUFJLE1BQU0sR0FBVyxlQUFlLEVBQUUsQ0FBQztJQUV2QyxJQUFJLE1BQU0sWUFBWSxvQkFBb0IsRUFBRTtRQUMxQyxNQUFNLENBQUMsQ0FBQywwQ0FBMEM7S0FDbkQ7SUFDRCxJQUFJLE1BQU0sWUFBWSxZQUFZLEVBQUU7UUFDbEMsTUFBTSxDQUFDLENBQUMsa0NBQWtDO0tBQzNDO0FBQ0gsQ0FBQztBQUNEOzs7O2lCQUlpQiJ9