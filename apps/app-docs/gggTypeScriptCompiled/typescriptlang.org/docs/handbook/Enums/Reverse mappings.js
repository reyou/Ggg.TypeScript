"use strict";
/*In addition to creating an object with property names for members,
numeric enums members also get a reverse mapping from enum values
to enum names. For example, in this example: */
function ReverseMappingEnums() {
    let Enum;
    (function (Enum) {
        Enum[Enum["A"] = 0] = "A";
    })(Enum || (Enum = {}));
    let a = Enum.A;
    let nameOfA = Enum[a]; // "A"
    console.log(nameOfA);
}
ReverseMappingEnums();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmV2ZXJzZSBtYXBwaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3R5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL0VudW1zL1JldmVyc2UgbWFwcGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzsrQ0FFK0M7QUFDL0MsU0FBUyxtQkFBbUI7SUFDMUIsSUFBSyxJQUVKO0lBRkQsV0FBSyxJQUFJO1FBQ1AseUJBQUMsQ0FBQTtJQUNILENBQUMsRUFGSSxJQUFJLEtBQUosSUFBSSxRQUVSO0lBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNmLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU07SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN2QixDQUFDO0FBQ0QsbUJBQW1CLEVBQUUsQ0FBQyJ9