"use strict";
/*In addition to creating an object with property names for members,
numeric enums members also get a reverse mapping from enum values
to enum names. For example, in this example: */
function ReverseMappingEnums() {
    var Enum;
    (function (Enum) {
        Enum[Enum["A"] = 0] = "A";
    })(Enum || (Enum = {}));
    var a = Enum.A;
    var nameOfA = Enum[a]; // "A"
    console.log(nameOfA);
}
ReverseMappingEnums();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmV2ZXJzZSBtYXBwaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJldmVyc2UgbWFwcGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzsrQ0FFK0M7QUFDL0M7SUFDRSxJQUFLLElBRUo7SUFGRCxXQUFLLElBQUk7UUFDUCx5QkFBQyxDQUFBO0lBQ0gsQ0FBQyxFQUZJLElBQUksS0FBSixJQUFJLFFBRVI7SUFDRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2YsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTTtJQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZCLENBQUM7QUFDRCxtQkFBbUIsRUFBRSxDQUFDIn0=