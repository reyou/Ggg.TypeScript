"use strict";
function StructuralTyping() {
    var Person = /** @class */ (function () {
        function Person() {
        }
        return Person;
    }());
    var p;
    // OK, because of structural typing
    p = new Person();
    console.log(p);
}
StructuralTyping();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50cm9kdWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSW50cm9kdWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUtFO1FBQUE7UUFFQSxDQUFDO1FBQUQsYUFBQztJQUFELENBQUMsQUFGRCxJQUVDO0lBRUQsSUFBSSxDQUFRLENBQUM7SUFDYixtQ0FBbUM7SUFDbkMsQ0FBQyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7SUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQixDQUFDO0FBQ0QsZ0JBQWdCLEVBQUUsQ0FBQyJ9