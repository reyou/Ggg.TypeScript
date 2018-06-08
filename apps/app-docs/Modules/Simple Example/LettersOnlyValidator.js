"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lettersRegexp = /^[A-Za-z]+$/;
var LettersOnlyValidator = /** @class */ (function () {
    function LettersOnlyValidator() {
    }
    LettersOnlyValidator.prototype.isAcceptable = function (s) {
        return lettersRegexp.test(s);
    };
    return LettersOnlyValidator;
}());
exports.LettersOnlyValidator = LettersOnlyValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGV0dGVyc09ubHlWYWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMZXR0ZXJzT25seVZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLElBQU0sYUFBYSxHQUFHLGFBQWEsQ0FBQztBQUVwQztJQUFBO0lBSUEsQ0FBQztJQUhDLDJDQUFZLEdBQVosVUFBYSxDQUFTO1FBQ3BCLE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUpZLG9EQUFvQiJ9