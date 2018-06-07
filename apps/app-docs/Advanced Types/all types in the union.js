function AllTypesInUnion() {
    var Bronzini = (function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsIHR5cGVzIGluIHRoZSB1bmlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFsbCB0eXBlcyBpbiB0aGUgdW5pb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFVRTtRQUFBO1FBT0EsQ0FBQztRQU5DLHVCQUFJLEdBQUo7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFDRCwwQkFBTyxHQUFQO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFDSCxlQUFDO0lBQUQsQ0FBQyxBQVBELElBT0M7SUFDRDtRQUNFLElBQUksUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFDOUIsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsSUFBSSxHQUFHLEdBQUcsV0FBVyxFQUFFLENBQUM7SUFDeEIsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTztJQUN0Qix3QkFBd0I7QUFDMUIsQ0FBQyJ9