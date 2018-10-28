"use strict";
function FileAccessEnum() {
    let FileAccess;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUFjY2Vzc0VudW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaWxlQWNjZXNzRW51bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxjQUFjO0lBQ3JCLElBQUssVUFRSjtJQVJELFdBQUssVUFBVTtRQUNiLG1CQUFtQjtRQUNuQiwyQ0FBSSxDQUFBO1FBQ0osMkNBQWEsQ0FBQTtRQUNiLDZDQUFjLENBQUE7UUFDZCxxREFBd0IsQ0FBQTtRQUN4QixrQkFBa0I7UUFDbEIsNkJBQUksS0FBSyxDQUFDLE1BQU0sT0FBQSxDQUFBO0lBQ2xCLENBQUMsRUFSSSxVQUFVLEtBQVYsVUFBVSxRQVFkO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQUNELGNBQWMsRUFBRSxDQUFDIn0=