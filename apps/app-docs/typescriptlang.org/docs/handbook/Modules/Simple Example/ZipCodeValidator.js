"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
exports.ZipCodeValidator = ZipCodeValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWmlwQ29kZVZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlppcENvZGVWYWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxNQUFNLFlBQVksR0FBRyxVQUFVLENBQUM7QUFFaEMsTUFBYSxnQkFBZ0I7SUFDM0IsWUFBWSxDQUFDLENBQVM7UUFDcEIsT0FBTyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FDRjtBQUpELDRDQUlDIn0=