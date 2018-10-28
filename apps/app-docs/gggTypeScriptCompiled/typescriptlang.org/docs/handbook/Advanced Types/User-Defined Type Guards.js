"use strict";
function UserDefinedTypeGuards() {
    class Bronzini {
        swim() {
            console.log("swimming...");
        }
        layEggs() {
            console.log("laying eggs...");
        }
    }
    function isFish(pet) {
        return pet.swim !== undefined;
    }
    // Both calls to 'swim' and 'fly' are now okay.
    let pet = new Bronzini();
    if (isFish(pet)) {
        pet.swim();
    }
    else {
        // pet.fly();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci1EZWZpbmVkIFR5cGUgR3VhcmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svQWR2YW5jZWQgVHlwZXMvVXNlci1EZWZpbmVkIFR5cGUgR3VhcmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxTQUFTLHFCQUFxQjtJQVU1QixNQUFNLFFBQVE7UUFDWixJQUFJO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3QixDQUFDO1FBQ0QsT0FBTztZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNoQyxDQUFDO0tBQ0Y7SUFDRCxTQUFTLE1BQU0sQ0FBQyxHQUFnQjtRQUM5QixPQUFjLEdBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwrQ0FBK0M7SUFDL0MsSUFBSSxHQUFHLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztJQUN6QixJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNmLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNaO1NBQU07UUFDTCxhQUFhO0tBQ2Q7QUFDSCxDQUFDIn0=