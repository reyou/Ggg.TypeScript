"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zip = require("./ZipCodeValidatorExport");
function TestExportRun() {
    // Some samples to try
    let strings = ["Hello", "98052", "101"];
    // Validators to use
    let validator = new zip();
    // Show whether each string passed each validator
    strings.forEach(s => {
        console.log(`"${s}" - ${validator.isAcceptable(s) ? "matches" : "does not match"}`);
    });
}
if (require.main === module) {
    TestExportRun();
}
else {
    // I am referenced as module.
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdEV4cG9ydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3R5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL01vZHVsZXMvVGVzdEV4cG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdEQUFpRDtBQUVqRCxTQUFTLGFBQWE7SUFDcEIsc0JBQXNCO0lBQ3RCLElBQUksT0FBTyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUV4QyxvQkFBb0I7SUFDcEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUUxQixpREFBaUQ7SUFDakQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUNULElBQUksQ0FBQyxPQUFPLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FDdkUsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUNELElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7SUFDM0IsYUFBYSxFQUFFLENBQUM7Q0FDakI7S0FBTTtJQUNMLDZCQUE2QjtDQUM5QiJ9