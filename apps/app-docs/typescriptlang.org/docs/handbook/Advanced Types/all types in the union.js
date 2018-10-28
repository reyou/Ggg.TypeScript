"use strict";
function AllTypesInUnion() {
    class Bronzini {
        swim() {
            console.log("swimming...");
        }
        layEggs() {
            console.log("laying eggs...");
        }
    }
    function getSmallPet() {
        let bronzini = new Bronzini();
        return bronzini;
    }
    let pet = getSmallPet();
    pet.layEggs(); // okay
    // pet.swim(); // errors
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsIHR5cGVzIGluIHRoZSB1bmlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFsbCB0eXBlcyBpbiB0aGUgdW5pb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVMsZUFBZTtJQVV0QixNQUFNLFFBQVE7UUFDWixJQUFJO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3QixDQUFDO1FBQ0QsT0FBTztZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNoQyxDQUFDO0tBQ0Y7SUFDRCxTQUFTLFdBQVc7UUFDbEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUM5QixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsSUFBSSxHQUFHLEdBQUcsV0FBVyxFQUFFLENBQUM7SUFDeEIsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTztJQUN0Qix3QkFBd0I7QUFDMUIsQ0FBQyJ9