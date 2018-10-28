"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && exports.numberRegexp.test(s);
    }
}
exports.ZipCodeValidator = ZipCodeValidator;
exports.mainValidator = ZipCodeValidator;
function ZipCodeRunner() {
    let zipValidator = new ZipCodeValidator();
    let result = zipValidator.isAcceptable("07071");
    console.log(result);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWmlwQ29kZVZhbGlkYXRvci4xLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiWmlwQ29kZVZhbGlkYXRvci4xLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWEsUUFBQSxZQUFZLEdBQUcsVUFBVSxDQUFDO0FBRXZDLE1BQU0sZ0JBQWdCO0lBQ3BCLFlBQVksQ0FBQyxDQUFTO1FBQ3BCLE9BQU8sQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksb0JBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNGO0FBUVEsNENBQWdCO0FBQ0kseUNBQWE7QUFSMUMsU0FBUyxhQUFhO0lBQ3BCLElBQUksWUFBWSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQyxJQUFJLE1BQU0sR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEIsQ0FBQyJ9