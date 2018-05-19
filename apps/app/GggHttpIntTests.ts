import { GggCore } from "./GggCore";
import { GggHttp } from "./GggHttp";

class GggHttpIntTests {
    public static GetUrlStringTest(testUrl: string) {
        try {
            var response = GggHttp.GetUrlString(testUrl);
            GggCore.Log(response);
        }
        catch (ex) {
            GggCore.Log(ex);
        }
    }
}
let testUrl = "http://www.gamegogo.org";
GggHttpIntTests.GetUrlStringTest(testUrl);
// start from here
console.log("\n FetchJsonAndLog: ");
GggHttp.FetchJsonAndLog("https://api.github.com/");
 