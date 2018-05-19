"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GggCore_1 = require("./GggCore");
const GggHttp_1 = require("./GggHttp");
class GggHttpIntTests {
    static GetUrlStringTest(testUrl) {
        try {
            var response = GggHttp_1.GggHttp.GetUrlString(testUrl);
            GggCore_1.GggCore.Log(response);
        }
        catch (ex) {
            GggCore_1.GggCore.Log(ex);
        }
    }
}
let testUrl = "http://www.gamegogo.org";
GggHttpIntTests.GetUrlStringTest(testUrl);
// start from here
console.log("\n FetchJsonAndLog: ");
GggHttp_1.GggHttp.FetchJsonAndLog("https://api.github.com/");
//# sourceMappingURL=GggHttpIntTests.js.map