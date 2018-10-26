"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTnVtZXJpYyBlbnVtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk51bWVyaWMgZW51bXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQ0UsSUFBSyxTQUtKO0lBTEQsV0FBSyxTQUFTO1FBQ1oscUNBQU0sQ0FBQTtRQUNOLHlDQUFJLENBQUE7UUFDSix5Q0FBSSxDQUFBO1FBQ0osMkNBQUssQ0FBQTtJQUNQLENBQUMsRUFMSSxTQUFTLEtBQVQsU0FBUyxRQUtiO0FBQ0gsQ0FBQztBQUNEO0lBQ0UsSUFBSyxTQUtKO0lBTEQsV0FBSyxTQUFTO1FBQ1oscUNBQUUsQ0FBQTtRQUNGLHlDQUFJLENBQUE7UUFDSix5Q0FBSSxDQUFBO1FBQ0osMkNBQUssQ0FBQTtJQUNQLENBQUMsRUFMSSxTQUFTLEtBQVQsU0FBUyxRQUtiO0FBQ0gsQ0FBQztBQUNEO0lBQ0UsSUFBSyxRQUdKO0lBSEQsV0FBSyxRQUFRO1FBQ1gsbUNBQU0sQ0FBQTtRQUNOLHFDQUFPLENBQUE7SUFDVCxDQUFDLEVBSEksUUFBUSxLQUFSLFFBQVEsUUFHWjtJQUVELGlCQUFpQixTQUFpQixFQUFFLE9BQWlCO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsT0FBTyxDQUFDLG1CQUFtQixFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM3QyxDQUFDO0FBQ0QsVUFBVSxFQUFFLENBQUMifQ==