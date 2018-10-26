"use strict";
/*String enums are a similar concept, but have some subtle
runtime differences as documented below. In a string enum,
each member has to be constant-initialized with a string
literal, or with another string enum member. */
function StringEnums() {
    var Direction;
    (function (Direction) {
        Direction["Up"] = "UP";
        Direction["Down"] = "DOWN";
        Direction["Left"] = "LEFT";
        Direction["Right"] = "RIGHT";
    })(Direction || (Direction = {}));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyaW5nIGVudW1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3RyaW5nIGVudW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OytDQUcrQztBQUMvQztJQUNFLElBQUssU0FLSjtJQUxELFdBQUssU0FBUztRQUNaLHNCQUFTLENBQUE7UUFDVCwwQkFBYSxDQUFBO1FBQ2IsMEJBQWEsQ0FBQTtRQUNiLDRCQUFlLENBQUE7SUFDakIsQ0FBQyxFQUxJLFNBQVMsS0FBVCxTQUFTLFFBS2I7QUFDSCxDQUFDIn0=