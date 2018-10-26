"use strict";
// Enums are real objects that exist at runtime. For example, the following enum
function EnumsAtRuntime() {
    var E;
    (function (E) {
        E[E["X"] = 0] = "X";
        E[E["Y"] = 1] = "Y";
        E[E["Z"] = 2] = "Z";
    })(E || (E = {}));
    function f(obj) {
        return obj.X;
    }
    // Works, since 'E' has a property named 'X' which is a number.
    var result = f(E);
    console.log(result);
}
EnumsAtRuntime();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW51bXMgYXQgcnVudGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkVudW1zIGF0IHJ1bnRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGdGQUFnRjtBQUNoRjtJQUNFLElBQUssQ0FJSjtJQUpELFdBQUssQ0FBQztRQUNKLG1CQUFDLENBQUE7UUFDRCxtQkFBQyxDQUFBO1FBQ0QsbUJBQUMsQ0FBQTtJQUNILENBQUMsRUFKSSxDQUFDLEtBQUQsQ0FBQyxRQUlMO0lBQ0QsV0FBVyxHQUFrQjtRQUMzQixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQsK0RBQStEO0lBQy9ELElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFDRCxjQUFjLEVBQUUsQ0FBQyJ9