import { GggCore } from "./GggCore";
import { GggMath } from "./GggMath";
import { GggText } from "./GggText";

export class GggVariables {
    public static CreateSampleVariables() {
        // this is very similar to Kotlin
        let isDone: boolean = false;
        GggCore.Log("isDone " + isDone);
        // numbers
        let decimal: number = 0xf00d;
        let binary: number = 0b1010;
        let octal: number = 0o744;
        GggCore.Log(decimal + binary);
        // String
        let color: string = "blue";
        color = "red";
        GggCore.Log({
            color: color
        });
        var result = GggMath.Sum(decimal, binary);
        GggCore.Log("Sum Result: " + result);
        // backtick/backquote (`) character
        let fullName: string = `Bob Bobbington`;
        let age: number = 37;
        let sentence: string = GggText.GetRandomString();
        GggCore.Log("Random String: " + sentence);
        // Declaring variables of type void is not useful because you can only assign undefined or null to them:
        let unusable: void = undefined;
        // Not much else we can assign to these variables!
        let u: undefined = undefined;
        let n: null = null;
        // 
    }
   
    public static GetSampleAnyObject(): any {
        let notSure: any = 4;
        notSure = "maybe a string instead";
        notSure = false; // okay, definitely a boolean
        return notSure;
    }
    public static GetSampleObject(): Object {
        let prettySure: Object = 4;
        return prettySure;
    }
} 