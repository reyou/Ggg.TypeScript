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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWmlwQ29kZVZhbGlkYXRvci4yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svTW9kdWxlcy9aaXBDb2RlVmFsaWRhdG9yLjIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7c0JBRXNCO0FBQ3RCLE1BQXFCLGdCQUFnQjtJQUVuQyxZQUFZLENBQUMsQ0FBUztRQUNwQixPQUFPLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7QUFITSw2QkFBWSxHQUFHLFVBQVUsQ0FBQztBQURuQyxtQ0FLQyJ9