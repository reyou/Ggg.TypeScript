"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Classes and function declarations can be authored directly as
default exports. Default export class and function declaration
names are optional. */
class ZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
    }
}
ZipCodeValidator.numberRegexp = /^[0-9]+$/;
exports.default = ZipCodeValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWmlwQ29kZVZhbGlkYXRvci4yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiWmlwQ29kZVZhbGlkYXRvci4yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O3NCQUVzQjtBQUN0QixNQUFxQixnQkFBZ0I7SUFFbkMsWUFBWSxDQUFDLENBQVM7UUFDcEIsT0FBTyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7O0FBSE0sNkJBQVksR0FBRyxVQUFVLENBQUM7QUFEbkMsbUNBS0MifQ==