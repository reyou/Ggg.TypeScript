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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFibGVzIHdpdGhpbiBvdGhlciBmdW5jdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2YXJpYWJsZXMgd2l0aGluIG90aGVyIGZ1bmN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7OzswQ0FHMEM7QUFDMUMsU0FBUyxDQUFDO0lBQ1IsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ1gsT0FBTyxTQUFTLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFlIn0=