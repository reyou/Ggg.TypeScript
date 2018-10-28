"use strict";
/*When exporting a module using export =, TypeScript-specific
import module = require("module") must be used to import the module. */
let numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
module.exports = ZipCodeValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWmlwQ29kZVZhbGlkYXRvckV4cG9ydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3R5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL01vZHVsZXMvWmlwQ29kZVZhbGlkYXRvckV4cG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7dUVBQ3VFO0FBQ3ZFLElBQUksWUFBWSxHQUFHLFVBQVUsQ0FBQztBQUM5QixNQUFNLGdCQUFnQjtJQUNwQixZQUFZLENBQUMsQ0FBUztRQUNwQixPQUFPLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNGO0FBQ0QsaUJBQVMsZ0JBQWdCLENBQUMifQ==