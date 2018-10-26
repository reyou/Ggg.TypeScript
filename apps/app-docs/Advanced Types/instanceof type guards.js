"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2VvZiB0eXBlIGd1YXJkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluc3RhbmNlb2YgdHlwZSBndWFyZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OzBGQUkwRjtBQUMxRjtJQUlFO1FBQ0UsOEJBQW9CLFNBQWlCO1lBQWpCLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFBRyxDQUFDO1FBQ3pDLCtDQUFnQixHQUFoQjtZQUNFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFDSCwyQkFBQztJQUFELENBQUMsQUFMRCxJQUtDO0lBQ0Q7UUFDRSxzQkFBb0IsS0FBYTtZQUFiLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBRyxDQUFDO1FBQ3JDLHVDQUFnQixHQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDO1FBQ0gsbUJBQUM7SUFBRCxDQUFDLEFBTEQsSUFLQztJQUNEO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRztZQUN4QixDQUFDLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7WUFDN0IsQ0FBQyxDQUFDLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxnREFBZ0Q7SUFDaEQsSUFBSSxNQUFNLEdBQVcsZUFBZSxFQUFFLENBQUM7SUFFdkMsSUFBSSxNQUFNLFlBQVksb0JBQW9CLEVBQUU7UUFDMUMsTUFBTSxDQUFDLENBQUMsMENBQTBDO0tBQ25EO0lBQ0QsSUFBSSxNQUFNLFlBQVksWUFBWSxFQUFFO1FBQ2xDLE1BQU0sQ0FBQyxDQUFDLGtDQUFrQztLQUMzQztBQUNILENBQUM7QUFDRDs7OztpQkFJaUIifQ==