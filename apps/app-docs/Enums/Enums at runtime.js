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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW51bXMgYXQgcnVudGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkVudW1zIGF0IHJ1bnRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0ZBQWdGO0FBQ2hGO0lBQ0UsSUFBSyxDQUlKO0lBSkQsV0FBSyxDQUFDO1FBQ0osbUJBQUMsQ0FBQTtRQUNELG1CQUFDLENBQUE7UUFDRCxtQkFBQyxDQUFBO0lBQ0gsQ0FBQyxFQUpJLENBQUMsS0FBRCxDQUFDLFFBSUw7SUFDRCxXQUFXLEdBQWtCO1FBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVELCtEQUErRDtJQUMvRCxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0QixDQUFDO0FBQ0QsY0FBYyxFQUFFLENBQUMifQ==