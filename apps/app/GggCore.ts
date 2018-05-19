// shortcuts
// Ctrl+Shift+B => Run Build Task
// Ctrl+Shift+M => Problems window
// Ctrl+Shift+U => Output window

import { GggDate } from "./GggDate"
export class GggCore {
    public static Log(elementToLog): void {
        var stringified = JSON.stringify(elementToLog);
        console.log(stringified);
    }

    // Function returning never must have unreachable end point
    public static Error(message: string): never {
        GggCore.Log(message);
        throw new Error(message);
    }
}