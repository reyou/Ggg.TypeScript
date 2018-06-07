function DirectionEnum() {
    var Direction;
    (function (Direction) {
        Direction[Direction["Up"] = 1] = "Up";
        Direction[Direction["Down"] = 2] = "Down";
        Direction[Direction["Left"] = 3] = "Left";
        Direction[Direction["Right"] = 4] = "Right";
    })(Direction || (Direction = {}));
}
function DirectionEnum2() {
    var Direction;
    (function (Direction) {
        Direction[Direction["Up"] = 0] = "Up";
        Direction[Direction["Down"] = 1] = "Down";
        Direction[Direction["Left"] = 2] = "Left";
        Direction[Direction["Right"] = 3] = "Right";
    })(Direction || (Direction = {}));
}
function SampleEnum() {
    var Response;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTnVtZXJpYyBlbnVtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk51bWVyaWMgZW51bXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDRSxJQUFLLFNBS0o7SUFMRCxXQUFLLFNBQVM7UUFDWixxQ0FBTSxDQUFBO1FBQ04seUNBQUksQ0FBQTtRQUNKLHlDQUFJLENBQUE7UUFDSiwyQ0FBSyxDQUFBO0lBQ1AsQ0FBQyxFQUxJLFNBQVMsS0FBVCxTQUFTLFFBS2I7QUFDSCxDQUFDO0FBQ0Q7SUFDRSxJQUFLLFNBS0o7SUFMRCxXQUFLLFNBQVM7UUFDWixxQ0FBRSxDQUFBO1FBQ0YseUNBQUksQ0FBQTtRQUNKLHlDQUFJLENBQUE7UUFDSiwyQ0FBSyxDQUFBO0lBQ1AsQ0FBQyxFQUxJLFNBQVMsS0FBVCxTQUFTLFFBS2I7QUFDSCxDQUFDO0FBQ0Q7SUFDRSxJQUFLLFFBR0o7SUFIRCxXQUFLLFFBQVE7UUFDWCxtQ0FBTSxDQUFBO1FBQ04scUNBQU8sQ0FBQTtJQUNULENBQUMsRUFISSxRQUFRLEtBQVIsUUFBUSxRQUdaO0lBRUQsaUJBQWlCLFNBQWlCLEVBQUUsT0FBaUI7UUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxPQUFPLENBQUMsbUJBQW1CLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFDRCxVQUFVLEVBQUUsQ0FBQyJ9