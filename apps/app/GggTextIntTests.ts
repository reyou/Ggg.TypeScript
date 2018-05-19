import { GggCore } from "./GggCore";
import { GggText } from "./GggText";

class GggCoreIntTests {
    public static GetStringLengthTest(param: Object): number {
        let length: number = GggText.GetStringLength(param);
        return length;
    }
     public static GetStringLengthAsTest(param: Object): number {
        let length: number = GggText.GetStringLengthAs(param);
        return length;
    }
}
var slength = GggCoreIntTests.GetStringLengthTest("This is a string.");
GggCore.Log(slength);
var slength2 = GggCoreIntTests.GetStringLengthTest(17);
GggCore.Log(slength2);
var slength3 = GggCoreIntTests.GetStringLengthAsTest(123456);
GggCore.Log(slength3);