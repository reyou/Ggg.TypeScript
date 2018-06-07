/*Inferring the types
In playing with the example, you may notice that the TypeScript
compiler can figure out the type if you have types on one
side of the equation but not the other: */
/*This is called “contextual typing”, a form of type inference.
This helps cut down on the amount of effort to keep your program typed. */
function InferringTypes() {
    // myAdd has the full function type
    var myAdd = function (x, y) {
        return x + y;
    };
    // The parameters 'x' and 'y' have the type number
    var myAdd2 = function (x, y) {
        return x + y;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5mZXJyaW5nIHRoZSB0eXBlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkluZmVycmluZyB0aGUgdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OzswQ0FHMEM7QUFDMUM7MEVBQzBFO0FBQzFFO0lBQ0UsbUNBQW1DO0lBQ25DLElBQUksS0FBSyxHQUFHLFVBQVMsQ0FBUyxFQUFFLENBQVM7UUFDdkMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDLENBQUM7SUFFRixrREFBa0Q7SUFDbEQsSUFBSSxNQUFNLEdBQXFELFVBQzdELENBQUMsRUFDRCxDQUFDO1FBRUQsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDLENBQUM7QUFDSixDQUFDIn0=