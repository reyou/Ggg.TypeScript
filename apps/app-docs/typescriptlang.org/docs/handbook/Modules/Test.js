"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ZipCodeValidator_2_1 = require("./ZipCodeValidator.2");
const StaticZipCodeValidator_1 = require("./StaticZipCodeValidator");
function TestModuleValidator() {
    let myValidator = new ZipCodeValidator_2_1.default();
    let strings = ["Hello", "98052", "101"];
    // Use function validate
    strings.forEach(s => {
        console.log(`"${s}" ${StaticZipCodeValidator_1.default(s) ? " matches" : " does not match"}`);
    });
}
if (require.main === module) {
    TestModuleValidator();
}
else {
    // I am referenced as module.
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2REFBNkM7QUFDN0MscUVBQWdEO0FBRWhELFNBQVMsbUJBQW1CO0lBQzFCLElBQUksV0FBVyxHQUFHLElBQUksNEJBQVMsRUFBRSxDQUFDO0lBQ2xDLElBQUksT0FBTyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUV4Qyx3QkFBd0I7SUFDeEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLGdDQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0lBQ3hFLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUNELElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7SUFDM0IsbUJBQW1CLEVBQUUsQ0FBQztDQUN2QjtLQUFNO0lBQ0wsNkJBQTZCO0NBQzlCIn0=