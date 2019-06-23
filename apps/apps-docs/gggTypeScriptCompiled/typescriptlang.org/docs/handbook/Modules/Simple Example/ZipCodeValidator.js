"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
exports.ZipCodeValidator = ZipCodeValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWmlwQ29kZVZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3R5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL01vZHVsZXMvU2ltcGxlIEV4YW1wbGUvWmlwQ29kZVZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLE1BQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQztBQUVoQyxNQUFhLGdCQUFnQjtJQUMzQixZQUFZLENBQUMsQ0FBUztRQUNwQixPQUFPLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNGO0FBSkQsNENBSUMifQ==