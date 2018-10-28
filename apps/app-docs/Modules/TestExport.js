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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdEV4cG9ydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRlc3RFeHBvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnREFBaUQ7QUFFakQsU0FBUyxhQUFhO0lBQ3BCLHNCQUFzQjtJQUN0QixJQUFJLE9BQU8sR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFeEMsb0JBQW9CO0lBQ3BCLElBQUksU0FBUyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFFMUIsaURBQWlEO0lBQ2pELE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FDVCxJQUFJLENBQUMsT0FBTyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQ3ZFLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFDRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO0lBQzNCLGFBQWEsRUFBRSxDQUFDO0NBQ2pCO0tBQU07SUFDTCw2QkFBNkI7Q0FDOUIifQ==