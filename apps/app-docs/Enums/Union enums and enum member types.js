"use strict";
function UnionEnums() {
    var ShapeKind;
    (function (ShapeKind) {
        ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
        ShapeKind[ShapeKind["Square"] = 1] = "Square";
    })(ShapeKind || (ShapeKind = {}));
    var c = {
        kind: ShapeKind.Circle,
        //    ~~~~~~~~~~~~~~~~ Error if you put Square!
        radius: 100
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5pb24gZW51bXMgYW5kIGVudW0gbWVtYmVyIHR5cGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVW5pb24gZW51bXMgYW5kIGVudW0gbWVtYmVyIHR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUNFLElBQUssU0FHSjtJQUhELFdBQUssU0FBUztRQUNaLDZDQUFNLENBQUE7UUFDTiw2Q0FBTSxDQUFBO0lBQ1IsQ0FBQyxFQUhJLFNBQVMsS0FBVCxTQUFTLFFBR2I7SUFTRCxJQUFJLENBQUMsR0FBVztRQUNkLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtRQUN0QiwrQ0FBK0M7UUFDL0MsTUFBTSxFQUFFLEdBQUc7S0FDWixDQUFDO0FBQ0osQ0FBQyJ9