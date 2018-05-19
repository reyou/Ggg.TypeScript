"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GggCore_1 = require("./GggCore");
const GggMath_1 = require("./GggMath");
const GggText_1 = require("./GggText");
class GggVariables {
    static CreateSampleVariables() {
        // this is very similar to Kotlin
        let isDone = false;
        GggCore_1.GggCore.Log("isDone " + isDone);
        // numbers
        let decimal = 0xf00d;
        let binary = 0b1010;
        let octal = 0o744;
        GggCore_1.GggCore.Log(decimal + binary);
        // String
        let color = "blue";
        color = "red";
        GggCore_1.GggCore.Log({
            color: color
        });
        var result = GggMath_1.GggMath.Sum(decimal, binary);
        GggCore_1.GggCore.Log("Sum Result: " + result);
        // backtick/backquote (`) character
        let fullName = `Bob Bobbington`;
        let age = 37;
        let sentence = GggText_1.GggText.GetRandomString();
        GggCore_1.GggCore.Log("Random String: " + sentence);
        // Declaring variables of type void is not useful because you can only assign undefined or null to them:
        let unusable = undefined;
        // Not much else we can assign to these variables!
        let u = undefined;
        let n = null;
        // 
    }
    static GetSampleAnyObject() {
        let notSure = 4;
        notSure = "maybe a string instead";
        notSure = false; // okay, definitely a boolean
        return notSure;
    }
    static GetSampleObject() {
        let prettySure = 4;
        return prettySure;
    }
}
exports.GggVariables = GggVariables;
//# sourceMappingURL=GggVariables.js.map