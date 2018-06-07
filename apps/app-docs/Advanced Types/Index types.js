/*With index types, you can get the compiler to check code that
uses dynamic property names. For example, a common Javascript
pattern is to pick a subset of properties from an object: */
function IndexTypes() {
    function pluck2(o, names) {
        return names.map(function (n) { return o[n]; });
    }
    // Here’s how you would write and use this function in TypeScript,
    // using the index type query and indexed access operators:
    /*The compiler checks that name is actually a property on Person.
    The example introduces a couple of new type operators. First is keyof T,
    the index type query operator. For any type T, keyof T is the union
    of known, public property names of T. For example: */
    function pluck(o, names) {
        return names.map(function (n) { return o[n]; });
    }
    var person = {
        name: "Jarid",
        age: 35
    };
    var strings = pluck(person, ["name"]); // ok, string[]
    console.log(strings);
}
IndexTypes();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXggdHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJJbmRleCB0eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7NERBRTREO0FBQzVEO0lBQ0UsZ0JBQWdCLENBQUMsRUFBRSxLQUFLO1FBQ3RCLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFKLENBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDRCxrRUFBa0U7SUFDbEUsMkRBQTJEO0lBQzNEOzs7eURBR3FEO0lBQ3JELGVBQXFDLENBQUksRUFBRSxLQUFVO1FBQ25ELE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFKLENBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFNRCxJQUFJLE1BQU0sR0FBVztRQUNuQixJQUFJLEVBQUUsT0FBTztRQUNiLEdBQUcsRUFBRSxFQUFFO0tBQ1IsQ0FBQztJQUNGLElBQUksT0FBTyxHQUFhLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZTtJQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZCLENBQUM7QUFDRCxVQUFVLEVBQUUsQ0FBQyJ9