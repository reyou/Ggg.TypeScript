"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Re-exports
Often modules extend other modules, and partially expose some of their features.
A re-export does not import it locally, or introduce a local variable. */
class ParseIntBasedZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && parseInt(s).toString() === s;
    }
}
exports.ParseIntBasedZipCodeValidator = ParseIntBasedZipCodeValidator;
// Export original validator but rename it
var ZipCodeValidator_1 = require("./ZipCodeValidator");
exports.RegExpBasedZipCodeValidator = ZipCodeValidator_1.ZipCodeValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyc2VJbnRCYXNlZFppcENvZGVWYWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9Nb2R1bGVzL1BhcnNlSW50QmFzZWRaaXBDb2RlVmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O3lFQUV5RTtBQUN6RSxNQUFhLDZCQUE2QjtJQUN4QyxZQUFZLENBQUMsQ0FBUztRQUNwQixPQUFPLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQztDQUNGO0FBSkQsc0VBSUM7QUFFRCwwQ0FBMEM7QUFDMUMsdURBRTRCO0FBRDFCLHlEQUFBLGdCQUFnQixDQUErQiJ9