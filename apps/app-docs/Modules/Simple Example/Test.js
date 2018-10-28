"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ZipCodeValidator_1 = require("./ZipCodeValidator");
const LettersOnlyValidator_1 = require("./LettersOnlyValidator");
// Some samples to try
let strings = ["Hello", "98052", "101"];
// Validators to use
let validators = {};
validators["ZIP code"] = new ZipCodeValidator_1.ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator_1.LettersOnlyValidator();
// Show whether each string passed each validator
strings.forEach(s => {
    for (let name in validators) {
        console.log(`"${s}" - ${validators[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx5REFBc0Q7QUFDdEQsaUVBQThEO0FBRTlELHNCQUFzQjtBQUN0QixJQUFJLE9BQU8sR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFFeEMsb0JBQW9CO0FBQ3BCLElBQUksVUFBVSxHQUFxQyxFQUFFLENBQUM7QUFDdEQsVUFBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztBQUNoRCxVQUFVLENBQUMsY0FBYyxDQUFDLEdBQUcsSUFBSSwyQ0FBb0IsRUFBRSxDQUFDO0FBRXhELGlEQUFpRDtBQUNqRCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ2xCLEtBQUssSUFBSSxJQUFJLElBQUksVUFBVSxFQUFFO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQ1QsSUFBSSxDQUFDLE9BQ0gsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxnQkFDakQsSUFBSSxJQUFJLEVBQUUsQ0FDWCxDQUFDO0tBQ0g7QUFDSCxDQUFDLENBQUMsQ0FBQyJ9