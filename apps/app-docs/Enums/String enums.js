"use strict";
/*String enums are a similar concept, but have some subtle
runtime differences as documented below. In a string enum,
each member has to be constant-initialized with a string
literal, or with another string enum member. */
function StringEnums() {
    let Direction;
    (function (Direction) {
        Direction["Up"] = "UP";
        Direction["Down"] = "DOWN";
        Direction["Left"] = "LEFT";
        Direction["Right"] = "RIGHT";
    })(Direction || (Direction = {}));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyaW5nIGVudW1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3RyaW5nIGVudW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OytDQUcrQztBQUMvQyxTQUFTLFdBQVc7SUFDbEIsSUFBSyxTQUtKO0lBTEQsV0FBSyxTQUFTO1FBQ1osc0JBQVMsQ0FBQTtRQUNULDBCQUFhLENBQUE7UUFDYiwwQkFBYSxDQUFBO1FBQ2IsNEJBQWUsQ0FBQTtJQUNqQixDQUFDLEVBTEksU0FBUyxLQUFULFNBQVMsUUFLYjtBQUNILENBQUMifQ==