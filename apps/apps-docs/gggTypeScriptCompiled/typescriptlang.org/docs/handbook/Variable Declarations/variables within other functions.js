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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFibGVzIHdpdGhpbiBvdGhlciBmdW5jdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9WYXJpYWJsZSBEZWNsYXJhdGlvbnMvdmFyaWFibGVzIHdpdGhpbiBvdGhlciBmdW5jdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7MENBRzBDO0FBQzFDLFNBQVMsQ0FBQztJQUNSLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNYLE9BQU8sU0FBUyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNkLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSJ9