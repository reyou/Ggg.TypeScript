"use strict";
/*In this above example, g captured the variable a declared in f.
At any point that g gets called, the value of a will be tied to
the value of a in f. Even if g is called once f is done running,
it will be able to access and modify a. */
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    };
}
var g = f();
console.log(g()); // returns '11'
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFibGVzIHdpdGhpbiBvdGhlciBmdW5jdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2YXJpYWJsZXMgd2l0aGluIG90aGVyIGZ1bmN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7OzswQ0FHMEM7QUFDMUM7SUFDRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDWCxPQUFPO1FBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNkLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSJ9