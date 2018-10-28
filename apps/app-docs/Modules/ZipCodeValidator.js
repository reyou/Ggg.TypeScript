"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && exports.numberRegexp.test(s);
    }
}
exports.ZipCodeValidator = ZipCodeValidator;
function ZipCodeRunner() {
    let zipValidator = new ZipCodeValidator();
    let result = zipValidator.isAcceptable("07071");
    console.log(result);
}
if (require.main === module) {
    ZipCodeRunner();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWmlwQ29kZVZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlppcENvZGVWYWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBYSxRQUFBLFlBQVksR0FBRyxVQUFVLENBQUM7QUFFdkMsTUFBYSxnQkFBZ0I7SUFDM0IsWUFBWSxDQUFDLENBQVM7UUFDcEIsT0FBTyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxvQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBQ0Y7QUFKRCw0Q0FJQztBQUNELFNBQVMsYUFBYTtJQUNwQixJQUFJLFlBQVksR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7SUFDMUMsSUFBSSxNQUFNLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFDRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO0lBQzNCLGFBQWEsRUFBRSxDQUFDO0NBQ2pCIn0=