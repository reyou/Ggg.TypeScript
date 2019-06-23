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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3R5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL01vZHVsZXMvVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZEQUE2QztBQUM3QyxxRUFBZ0Q7QUFFaEQsU0FBUyxtQkFBbUI7SUFDMUIsSUFBSSxXQUFXLEdBQUcsSUFBSSw0QkFBUyxFQUFFLENBQUM7SUFDbEMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXhDLHdCQUF3QjtJQUN4QixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssZ0NBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7SUFDeEUsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBQ0QsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtJQUMzQixtQkFBbUIsRUFBRSxDQUFDO0NBQ3ZCO0tBQU07SUFDTCw2QkFBNkI7Q0FDOUIifQ==