"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ZipCodeValidator_2_1 = require("./ZipCodeValidator.2");
var StaticZipCodeValidator_1 = require("./StaticZipCodeValidator");
function TestModuleValidator() {
    var myValidator = new ZipCodeValidator_2_1.default();
    var strings = ["Hello", "98052", "101"];
    // Use function validate
    strings.forEach(function (s) {
        console.log("\"" + s + "\" " + (StaticZipCodeValidator_1.default(s) ? " matches" : " does not match"));
    });
}
if (require.main === module) {
    TestModuleValidator();
}
else {
    // I am referenced as module.
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyREFBNkM7QUFDN0MsbUVBQWdEO0FBRWhEO0lBQ0UsSUFBSSxXQUFXLEdBQUcsSUFBSSw0QkFBUyxFQUFFLENBQUM7SUFDbEMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXhDLHdCQUF3QjtJQUN4QixPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBSSxDQUFDLFlBQUssZ0NBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBRSxDQUFDLENBQUM7SUFDeEUsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBQ0QsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtJQUMzQixtQkFBbUIsRUFBRSxDQUFDO0NBQ3ZCO0tBQU07SUFDTCw2QkFBNkI7Q0FDOUIifQ==