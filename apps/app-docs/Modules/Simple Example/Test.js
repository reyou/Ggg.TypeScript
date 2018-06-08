"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ZipCodeValidator_1 = require("./ZipCodeValidator");
var LettersOnlyValidator_1 = require("./LettersOnlyValidator");
// Some samples to try
var strings = ["Hello", "98052", "101"];
// Validators to use
var validators = {};
validators["ZIP code"] = new ZipCodeValidator_1.ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator_1.LettersOnlyValidator();
// Show whether each string passed each validator
strings.forEach(function (s) {
    for (var name in validators) {
        console.log("\"" + s + "\" - " + (validators[name].isAcceptable(s) ? "matches" : "does not match") + " " + name);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx1REFBc0Q7QUFDdEQsK0RBQThEO0FBRTlELHNCQUFzQjtBQUN0QixJQUFJLE9BQU8sR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFFeEMsb0JBQW9CO0FBQ3BCLElBQUksVUFBVSxHQUFxQyxFQUFFLENBQUM7QUFDdEQsVUFBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztBQUNoRCxVQUFVLENBQUMsY0FBYyxDQUFDLEdBQUcsSUFBSSwyQ0FBb0IsRUFBRSxDQUFDO0FBRXhELGlEQUFpRDtBQUNqRCxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztJQUNmLEtBQUssSUFBSSxJQUFJLElBQUksVUFBVSxFQUFFO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQ1QsT0FBSSxDQUFDLGNBQ0gsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsVUFDN0QsSUFBTSxDQUNYLENBQUM7S0FDSDtBQUNILENBQUMsQ0FBQyxDQUFDIn0=