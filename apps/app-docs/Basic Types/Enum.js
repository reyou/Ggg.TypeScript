/*A helpful addition to the standard set of datatypes from JavaScript
is the enum. As in languages like C#, an enum is a way of giving
more friendly names to sets of numeric values. */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
/*By default, enums begin numbering their members starting at 0.
You can change this by manually setting the value of one of its members.
For example, we can start the previous example at 1 instead of 0: */
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color2.Green;
// Or, even manually set all the values in the enum:
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
var c3 = Color3.Green;
/*A handy feature of enums is that you can also go from a numeric
value to the name of that value in the enum. For example, if we had
the value 2 but weren’t sure what that mapped to in the Color enum above,
we could look up the corresponding name: */
var Color4;
(function (Color4) {
    Color4[Color4["Red"] = 1] = "Red";
    Color4[Color4["Green"] = 2] = "Green";
    Color4[Color4["Blue"] = 3] = "Blue";
})(Color4 || (Color4 = {}));
var colorName = Color4[2];
console.log(colorName); // Displays 'Green' as its value is 2 above
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW51bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkVudW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O2lEQUVpRDtBQUNqRCxJQUFLLEtBSUo7QUFKRCxXQUFLLEtBQUs7SUFDUiwrQkFBRyxDQUFBO0lBQ0gsbUNBQUssQ0FBQTtJQUNMLGlDQUFJLENBQUE7QUFDTixDQUFDLEVBSkksS0FBSyxLQUFMLEtBQUssUUFJVDtBQUNELElBQUksQ0FBQyxHQUFVLEtBQUssQ0FBQyxLQUFLLENBQUM7QUFDM0I7O29FQUVvRTtBQUNwRSxJQUFLLE1BSUo7QUFKRCxXQUFLLE1BQU07SUFDVCxpQ0FBTyxDQUFBO0lBQ1AscUNBQUssQ0FBQTtJQUNMLG1DQUFJLENBQUE7QUFDTixDQUFDLEVBSkksTUFBTSxLQUFOLE1BQU0sUUFJVjtBQUNELElBQUksRUFBRSxHQUFXLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDOUIsb0RBQW9EO0FBQ3BELElBQUssTUFJSjtBQUpELFdBQUssTUFBTTtJQUNULGlDQUFPLENBQUE7SUFDUCxxQ0FBUyxDQUFBO0lBQ1QsbUNBQVEsQ0FBQTtBQUNWLENBQUMsRUFKSSxNQUFNLEtBQU4sTUFBTSxRQUlWO0FBQ0QsSUFBSSxFQUFFLEdBQVcsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUM5Qjs7OzJDQUcyQztBQUMzQyxJQUFLLE1BSUo7QUFKRCxXQUFLLE1BQU07SUFDVCxpQ0FBTyxDQUFBO0lBQ1AscUNBQUssQ0FBQTtJQUNMLG1DQUFJLENBQUE7QUFDTixDQUFDLEVBSkksTUFBTSxLQUFOLE1BQU0sUUFJVjtBQUNELElBQUksU0FBUyxHQUFXLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVsQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsMkNBQTJDIn0=