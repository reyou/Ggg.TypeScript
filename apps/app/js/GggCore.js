"use strict";
// shortcuts
// Ctrl+Shift+B => Run Build Task
// Ctrl+Shift+M => Problems window
// Ctrl+Shift+U => Output window
Object.defineProperty(exports, "__esModule", { value: true });
class GggCore {
    static Log(elementToLog) {
        var stringified = JSON.stringify(elementToLog);
        console.log(stringified);
    }
    // Function returning never must have unreachable end point
    static Error(message) {
        GggCore.Log(message);
        throw new Error(message);
    }
}
exports.GggCore = GggCore;
//# sourceMappingURL=GggCore.js.map