"use strict";
function UserDefinedTypeGuards() {
    var Bronzini = /** @class */ (function () {
        function Bronzini() {
        }
        Bronzini.prototype.swim = function () {
            console.log("swimming...");
        };
        Bronzini.prototype.layEggs = function () {
            console.log("laying eggs...");
        };
        return Bronzini;
    }());
    function isFish(pet) {
        return pet.swim !== undefined;
    }
    // Both calls to 'swim' and 'fly' are now okay.
    var pet = new Bronzini();
    if (isFish(pet)) {
        pet.swim();
    }
    else {
        // pet.fly();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci1EZWZpbmVkIFR5cGUgR3VhcmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVXNlci1EZWZpbmVkIFR5cGUgR3VhcmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQVVFO1FBQUE7UUFPQSxDQUFDO1FBTkMsdUJBQUksR0FBSjtZQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0IsQ0FBQztRQUNELDBCQUFPLEdBQVA7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUNILGVBQUM7SUFBRCxDQUFDLEFBUEQsSUFPQztJQUNELGdCQUFnQixHQUFnQjtRQUM5QixPQUFjLEdBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwrQ0FBK0M7SUFDL0MsSUFBSSxHQUFHLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztJQUN6QixJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNmLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNaO1NBQU07UUFDTCxhQUFhO0tBQ2Q7QUFDSCxDQUFDIn0=