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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci1EZWZpbmVkIFR5cGUgR3VhcmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVXNlci1EZWZpbmVkIFR5cGUgR3VhcmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBVUU7UUFBQTtRQU9BLENBQUM7UUFOQyx1QkFBSSxHQUFKO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3QixDQUFDO1FBQ0QsMEJBQU8sR0FBUDtZQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBQ0gsZUFBQztJQUFELENBQUMsQUFQRCxJQU9DO0lBQ0QsZ0JBQWdCLEdBQWdCO1FBQzlCLE9BQWMsR0FBSSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUM7SUFDeEMsQ0FBQztJQUVELCtDQUErQztJQUMvQyxJQUFJLEdBQUcsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ2YsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ1o7U0FBTTtRQUNMLGFBQWE7S0FDZDtBQUNILENBQUMifQ==