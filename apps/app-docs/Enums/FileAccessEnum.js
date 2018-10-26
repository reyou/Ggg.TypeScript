"use strict";
function FileAccessEnum() {
    var FileAccess;
    (function (FileAccess) {
        // constant members
        FileAccess[FileAccess["None"] = 0] = "None";
        FileAccess[FileAccess["Read"] = 2] = "Read";
        FileAccess[FileAccess["Write"] = 4] = "Write";
        FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
        // computed member
        FileAccess[FileAccess["G"] = "123".length] = "G";
    })(FileAccess || (FileAccess = {}));
    console.log(FileAccess.None);
    console.log(FileAccess.Read);
    console.log(FileAccess.Write);
    console.log(FileAccess.ReadWrite);
    console.log(FileAccess.G);
}
FileAccessEnum();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUFjY2Vzc0VudW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaWxlQWNjZXNzRW51bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFDRSxJQUFLLFVBUUo7SUFSRCxXQUFLLFVBQVU7UUFDYixtQkFBbUI7UUFDbkIsMkNBQUksQ0FBQTtRQUNKLDJDQUFhLENBQUE7UUFDYiw2Q0FBYyxDQUFBO1FBQ2QscURBQXdCLENBQUE7UUFDeEIsa0JBQWtCO1FBQ2xCLDZCQUFJLEtBQUssQ0FBQyxNQUFNLE9BQUEsQ0FBQTtJQUNsQixDQUFDLEVBUkksVUFBVSxLQUFWLFVBQVUsUUFRZDtJQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzVCLENBQUM7QUFDRCxjQUFjLEVBQUUsQ0FBQyJ9