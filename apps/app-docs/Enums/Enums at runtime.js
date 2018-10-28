"use strict";
// Enums are real objects that exist at runtime. For example, the following enum
function EnumsAtRuntime() {
    let E;
    (function (E) {
        E[E["X"] = 0] = "X";
        E[E["Y"] = 1] = "Y";
        E[E["Z"] = 2] = "Z";
    })(E || (E = {}));
    function f(obj) {
        return obj.X;
    }
    // Works, since 'E' has a property named 'X' which is a number.
    let result = f(E);
    console.log(result);
}
EnumsAtRuntime();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW51bXMgYXQgcnVudGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkVudW1zIGF0IHJ1bnRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGdGQUFnRjtBQUNoRixTQUFTLGNBQWM7SUFDckIsSUFBSyxDQUlKO0lBSkQsV0FBSyxDQUFDO1FBQ0osbUJBQUMsQ0FBQTtRQUNELG1CQUFDLENBQUE7UUFDRCxtQkFBQyxDQUFBO0lBQ0gsQ0FBQyxFQUpJLENBQUMsS0FBRCxDQUFDLFFBSUw7SUFDRCxTQUFTLENBQUMsQ0FBQyxHQUFrQjtRQUMzQixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQsK0RBQStEO0lBQy9ELElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFDRCxjQUFjLEVBQUUsQ0FBQyJ9