"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Re-exports
Often modules extend other modules, and partially expose some of their features.
A re-export does not import it locally, or introduce a local variable. */
var ParseIntBasedZipCodeValidator = /** @class */ (function () {
    function ParseIntBasedZipCodeValidator() {
    }
    ParseIntBasedZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && parseInt(s).toString() === s;
    };
    return ParseIntBasedZipCodeValidator;
}());
exports.ParseIntBasedZipCodeValidator = ParseIntBasedZipCodeValidator;
// Export original validator but rename it
var ZipCodeValidator_1 = require("./ZipCodeValidator");
exports.RegExpBasedZipCodeValidator = ZipCodeValidator_1.ZipCodeValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyc2VJbnRCYXNlZFppcENvZGVWYWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQYXJzZUludEJhc2VkWmlwQ29kZVZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzt5RUFFeUU7QUFDekU7SUFBQTtJQUlBLENBQUM7SUFIQyxvREFBWSxHQUFaLFVBQWEsQ0FBUztRQUNwQixPQUFPLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNILG9DQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSxzRUFBNkI7QUFNMUMsMENBQTBDO0FBQzFDLHVEQUU0QjtBQUQxQix5REFBQSxnQkFBZ0IsQ0FBK0IifQ==