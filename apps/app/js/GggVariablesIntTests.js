"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Press F5 to run this page under VS code.
const GggCore_1 = require("./GggCore");
const GggVariables_1 = require("./GggVariables");
//=============================================================================
var createSampleVariables = function () {
    GggVariables_1.GggVariables.CreateSampleVariables();
    let objectSample = GggVariables_1.GggVariables.GetSampleAnyObject();
    GggCore_1.GggCore.Log("objectSample: " + objectSample);
    var objectSample2 = GggVariables_1.GggVariables.GetSampleObject();
    GggCore_1.GggCore.Log("objectSample2: " + objectSample2);
};
// createSampleVariables();
//=============================================================================
var variableCapturingQuirks = function () {
    // http://www.typescriptlang.org/docs/handbook/variable-declarations.html
    console.log("\nVariable capturing quirks:");
    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log("quirks", i);
        }, 100 * i);
    }
    // A common work around is to use an IIFE - 
    // an Immediately Invoked Function Expression - to capture i at each iteration:
    console.log("\nVariable capturing quirks fixed:");
    for (var i = 0; i < 3; i++) {
        // capture the current state of 'i'
        // by invoking a function with its current value
        (function (i) {
            setTimeout(function () {
                console.log("quirks fixed", i);
            }, 100 * i);
        })(i);
    }
};
// variableCapturingQuirks();
//=============================================================================
//============================================================================= 
//# sourceMappingURL=GggVariablesIntTests.js.map