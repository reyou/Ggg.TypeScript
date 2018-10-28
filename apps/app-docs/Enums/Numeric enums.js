"use strict";
function DirectionEnum() {
    let Direction;
    (function (Direction) {
        Direction[Direction["Up"] = 1] = "Up";
        Direction[Direction["Down"] = 2] = "Down";
        Direction[Direction["Left"] = 3] = "Left";
        Direction[Direction["Right"] = 4] = "Right";
    })(Direction || (Direction = {}));
}
function DirectionEnum2() {
    let Direction;
    (function (Direction) {
        Direction[Direction["Up"] = 0] = "Up";
        Direction[Direction["Down"] = 1] = "Down";
        Direction[Direction["Left"] = 2] = "Left";
        Direction[Direction["Right"] = 3] = "Right";
    })(Direction || (Direction = {}));
}
function SampleEnum() {
    let Response;
    (function (Response) {
        Response[Response["No"] = 0] = "No";
        Response[Response["Yes"] = 1] = "Yes";
    })(Response || (Response = {}));
    function respond(recipient, message) {
        console.log("respond:");
        console.log(message);
    }
    respond("Princess Caroline", Response.Yes);
}
SampleEnum();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTnVtZXJpYyBlbnVtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk51bWVyaWMgZW51bXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVMsYUFBYTtJQUNwQixJQUFLLFNBS0o7SUFMRCxXQUFLLFNBQVM7UUFDWixxQ0FBTSxDQUFBO1FBQ04seUNBQUksQ0FBQTtRQUNKLHlDQUFJLENBQUE7UUFDSiwyQ0FBSyxDQUFBO0lBQ1AsQ0FBQyxFQUxJLFNBQVMsS0FBVCxTQUFTLFFBS2I7QUFDSCxDQUFDO0FBQ0QsU0FBUyxjQUFjO0lBQ3JCLElBQUssU0FLSjtJQUxELFdBQUssU0FBUztRQUNaLHFDQUFFLENBQUE7UUFDRix5Q0FBSSxDQUFBO1FBQ0oseUNBQUksQ0FBQTtRQUNKLDJDQUFLLENBQUE7SUFDUCxDQUFDLEVBTEksU0FBUyxLQUFULFNBQVMsUUFLYjtBQUNILENBQUM7QUFDRCxTQUFTLFVBQVU7SUFDakIsSUFBSyxRQUdKO0lBSEQsV0FBSyxRQUFRO1FBQ1gsbUNBQU0sQ0FBQTtRQUNOLHFDQUFPLENBQUE7SUFDVCxDQUFDLEVBSEksUUFBUSxLQUFSLFFBQVEsUUFHWjtJQUVELFNBQVMsT0FBTyxDQUFDLFNBQWlCLEVBQUUsT0FBaUI7UUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxPQUFPLENBQUMsbUJBQW1CLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFDRCxVQUFVLEVBQUUsQ0FBQyJ9