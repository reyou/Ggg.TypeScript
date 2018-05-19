"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GggCore_1 = require("./GggCore");
const GggText_1 = require("./GggText");
class GggCoreIntTests {
    static GetStringLengthTest(param) {
        let length = GggText_1.GggText.GetStringLength(param);
        return length;
    }
    static GetStringLengthAsTest(param) {
        let length = GggText_1.GggText.GetStringLengthAs(param);
        return length;
    }
}
var slength = GggCoreIntTests.GetStringLengthTest("This is a string.");
GggCore_1.GggCore.Log(slength);
var slength2 = GggCoreIntTests.GetStringLengthTest(17);
GggCore_1.GggCore.Log(slength2);
var slength3 = GggCoreIntTests.GetStringLengthAsTest(123456);
GggCore_1.GggCore.Log(slength3);
//# sourceMappingURL=GggTextIntTests.js.map