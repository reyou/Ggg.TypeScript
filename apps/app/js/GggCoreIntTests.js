"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GggCore_1 = require("./GggCore");
class GggCoreIntTests {
    static LogTest(elementParam) {
        GggCore_1.GggCore.Log(elementParam);
    }
    static ErrorTest(message) {
        GggCore_1.GggCore.Error(message);
    }
}
GggCoreIntTests.LogTest("This is a string test.");
GggCoreIntTests.LogTest({
    "name": "ggg",
    "rank": 100,
    "message": "This is an object test."
});
try {
    GggCoreIntTests.ErrorTest("Sample Error Message");
}
catch (ex) {
    GggCoreIntTests.LogTest({
        Message: ex.message
    });
}
//# sourceMappingURL=GggCoreIntTests.js.map