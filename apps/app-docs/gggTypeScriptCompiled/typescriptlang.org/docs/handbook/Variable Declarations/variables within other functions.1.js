"use strict";
function f2() {
    var a = 1;
    a = 2;
    var b = g();
    a = 3;
    return b;
    function g() {
        return a;
    }
}
console.log(f2()); // returns '2'
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFibGVzIHdpdGhpbiBvdGhlciBmdW5jdGlvbnMuMS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3R5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL1ZhcmlhYmxlIERlY2xhcmF0aW9ucy92YXJpYWJsZXMgd2l0aGluIG90aGVyIGZ1bmN0aW9ucy4xLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxTQUFTLEVBQUU7SUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFVixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFDWixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRU4sT0FBTyxDQUFDLENBQUM7SUFFVCxTQUFTLENBQUM7UUFDUixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7QUFDSCxDQUFDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyJ9