"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zip = require("./ZipCodeValidatorExport");
function TestExportRun() {
    // Some samples to try
    var strings = ["Hello", "98052", "101"];
    // Validators to use
    var validator = new zip();
    // Show whether each string passed each validator
    strings.forEach(function (s) {
        console.log("\"" + s + "\" - " + (validator.isAcceptable(s) ? "matches" : "does not match"));
    });
}
if (require.main === module) {
    TestExportRun();
}
else {
    // I am referenced as module.
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdEV4cG9ydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRlc3RFeHBvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBaUQ7QUFFakQ7SUFDRSxzQkFBc0I7SUFDdEIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXhDLG9CQUFvQjtJQUNwQixJQUFJLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBRTFCLGlEQUFpRDtJQUNqRCxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQ1QsT0FBSSxDQUFDLGNBQU8sU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBRSxDQUN2RSxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBQ0QsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtJQUMzQixhQUFhLEVBQUUsQ0FBQztDQUNqQjtLQUFNO0lBQ0wsNkJBQTZCO0NBQzlCIn0=