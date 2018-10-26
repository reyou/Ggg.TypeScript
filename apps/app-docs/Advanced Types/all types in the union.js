"use strict";
function AllTypesInUnion() {
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
    function getSmallPet() {
        var bronzini = new Bronzini();
        return bronzini;
    }
    var pet = getSmallPet();
    pet.layEggs(); // okay
    // pet.swim(); // errors
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsIHR5cGVzIGluIHRoZSB1bmlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFsbCB0eXBlcyBpbiB0aGUgdW5pb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBVUU7UUFBQTtRQU9BLENBQUM7UUFOQyx1QkFBSSxHQUFKO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3QixDQUFDO1FBQ0QsMEJBQU8sR0FBUDtZQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBQ0gsZUFBQztJQUFELENBQUMsQUFQRCxJQU9DO0lBQ0Q7UUFDRSxJQUFJLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQzlCLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxJQUFJLEdBQUcsR0FBRyxXQUFXLEVBQUUsQ0FBQztJQUN4QixHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPO0lBQ3RCLHdCQUF3QjtBQUMxQixDQUFDIn0=