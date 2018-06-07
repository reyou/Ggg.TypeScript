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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5pb24gZW51bXMgYW5kIGVudW0gbWVtYmVyIHR5cGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVW5pb24gZW51bXMgYW5kIGVudW0gbWVtYmVyIHR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0UsSUFBSyxTQUdKO0lBSEQsV0FBSyxTQUFTO1FBQ1osNkNBQU0sQ0FBQTtRQUNOLDZDQUFNLENBQUE7SUFDUixDQUFDLEVBSEksU0FBUyxLQUFULFNBQVMsUUFHYjtJQVNELElBQUksQ0FBQyxHQUFXO1FBQ2QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1FBQ3RCLCtDQUErQztRQUMvQyxNQUFNLEVBQUUsR0FBRztLQUNaLENBQUM7QUFDSixDQUFDIn0=