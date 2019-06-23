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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWmlwQ29kZVZhbGlkYXRvci4xLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svTW9kdWxlcy9aaXBDb2RlVmFsaWRhdG9yLjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBYSxRQUFBLFlBQVksR0FBRyxVQUFVLENBQUM7QUFFdkMsTUFBTSxnQkFBZ0I7SUFDcEIsWUFBWSxDQUFDLENBQVM7UUFDcEIsT0FBTyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxvQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBQ0Y7QUFRUSw0Q0FBZ0I7QUFDSSx5Q0FBYTtBQVIxQyxTQUFTLGFBQWE7SUFDcEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFDLElBQUksTUFBTSxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0QixDQUFDIn0=