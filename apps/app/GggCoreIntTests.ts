import { GggCore } from "./GggCore";

class GggCoreIntTests {
    public static LogTest(elementParam) {
        GggCore.Log(elementParam);
    }
    public static ErrorTest(message) {
        GggCore.Error(message);
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