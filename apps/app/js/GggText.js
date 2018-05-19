"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GggText {
    Search(source, subString) {
        let result = source.search(subString);
        return result > -1;
    }
    static GetRandomString() {
        // embedded expressions
        var random1 = "RandomPart1";
        var random2 = "RandomPart2";
        // many common problems in JavaScript are alleviated by using let, 
        // so you should use it instead of var whenever possible.
        let randomString = `${random1} ${random2}`;
        return randomString;
    }
    static GetStringLength(param) {
        let someValue = param.toString();
        // Type assertions
        let strLength = someValue.length;
        return strLength;
    }
    static GetStringLengthAs(param) {
        let someValue = param.toString();
        // Type assertions
        // when using TypeScript with JSX, only as-style assertions are allowed.
        let strLength = someValue.length;
        return strLength;
    }
}
exports.GggText = GggText;
//# sourceMappingURL=GggText.js.map