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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3R5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL01vZHVsZXMvU2ltcGxlIEV4YW1wbGUvVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlEQUFzRDtBQUN0RCxpRUFBOEQ7QUFFOUQsc0JBQXNCO0FBQ3RCLElBQUksT0FBTyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUV4QyxvQkFBb0I7QUFDcEIsSUFBSSxVQUFVLEdBQXFDLEVBQUUsQ0FBQztBQUN0RCxVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0FBQ2hELFVBQVUsQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLDJDQUFvQixFQUFFLENBQUM7QUFFeEQsaURBQWlEO0FBQ2pELE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDbEIsS0FBSyxJQUFJLElBQUksSUFBSSxVQUFVLEVBQUU7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FDVCxJQUFJLENBQUMsT0FDSCxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGdCQUNqRCxJQUFJLElBQUksRUFBRSxDQUNYLENBQUM7S0FDSDtBQUNILENBQUMsQ0FBQyxDQUFDIn0=