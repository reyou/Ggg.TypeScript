"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Classes and function declarations can be authored directly as
default exports. Default export class and function declaration
names are optional. */
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
    };
    ZipCodeValidator.numberRegexp = /^[0-9]+$/;
    return ZipCodeValidator;
}());
exports.default = ZipCodeValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWmlwQ29kZVZhbGlkYXRvci4yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiWmlwQ29kZVZhbGlkYXRvci4yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O3NCQUVzQjtBQUN0QjtJQUFBO0lBS0EsQ0FBQztJQUhDLHVDQUFZLEdBQVosVUFBYSxDQUFTO1FBQ3BCLE9BQU8sQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksZ0JBQWdCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBSE0sNkJBQVksR0FBRyxVQUFVLENBQUM7SUFJbkMsdUJBQUM7Q0FBQSxBQUxELElBS0M7a0JBTG9CLGdCQUFnQiJ9