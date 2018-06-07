/*In addition to creating an object with property names for members,
numeric enums members also get a reverse mapping from enum values
to enum names. For example, in this example: */
function ReverseMappingEnums() {
    var Enum;
    (function (Enum) {
        Enum[Enum["A"] = 0] = "A";
    })(Enum || (Enum = {}));
    var a = Enum.A;
    var nameOfA = Enum[a]; // "A"
    console.log(nameOfA);
}
ReverseMappingEnums();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmV2ZXJzZSBtYXBwaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJldmVyc2UgbWFwcGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OytDQUUrQztBQUMvQztJQUNFLElBQUssSUFFSjtJQUZELFdBQUssSUFBSTtRQUNQLHlCQUFDLENBQUE7SUFDSCxDQUFDLEVBRkksSUFBSSxLQUFKLElBQUksUUFFUjtJQUNELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDZixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNO0lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdkIsQ0FBQztBQUNELG1CQUFtQixFQUFFLENBQUMifQ==