"use strict";
/*When exporting a module using export =, TypeScript-specific
import module = require("module") must be used to import the module. */
var numberRegexp = /^[0-9]+$/;
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && numberRegexp.test(s);
    };
    return ZipCodeValidator;
}());
module.exports = ZipCodeValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWmlwQ29kZVZhbGlkYXRvckV4cG9ydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlppcENvZGVWYWxpZGF0b3JFeHBvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO3VFQUN1RTtBQUN2RSxJQUFJLFlBQVksR0FBRyxVQUFVLENBQUM7QUFDOUI7SUFBQTtJQUlBLENBQUM7SUFIQyx1Q0FBWSxHQUFaLFVBQWEsQ0FBUztRQUNwQixPQUFPLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFDRCxpQkFBUyxnQkFBZ0IsQ0FBQyJ9