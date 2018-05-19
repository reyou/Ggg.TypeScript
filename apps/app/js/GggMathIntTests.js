"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Press F5 to run this page under VS code.
//=============================================================================
const GggMath_1 = require("./GggMath");
const GggCore_1 = require("./GggCore");
//=============================================================================
var sumWithMultiParamTest = function () {
    let first = 5;
    let second = 7;
    let sum = GggMath_1.GggMath.SumWithMultiParam([5, 7]);
    GggCore_1.GggCore.Log(sum);
};
sumWithMultiParamTest();
//=============================================================================
function RandomBoolTest() {
    var randomBool = GggMath_1.GggMath.RandomBool();
    GggCore_1.GggCore.Log(`randomBool: ${randomBool}`);
}
// RandomBoolTest();
//=============================================================================
function RandomTest() {
    let random = GggMath_1.GggMath.Random(0, 100);
    GggCore_1.GggCore.Log(`random: ${random}`);
}
// RandomTest();
//=============================================================================
function SumWithReduceTest() {
    const nums = [1, 2, 3, 4, 5];
    var result = GggMath_1.GggMath.SumWithReduce(nums);
    console.log("SumWithReduce: ");
    console.log("result:", result);
}
// SumWithReduceTest();
//=============================================================================
function ActionStateMutableSumSampleTest() {
    console.log("ActionStateMutableSumSample: ");
    let finalState = GggMath_1.GggMath.ActionStateMutableSumSample();
    console.log("finalState", finalState);
}
// ActionStateMutableSumSampleTest();
//=============================================================================
function ActionStateImmutableSumSampleTest() {
    console.log("ActionStateImmutableSumSample: ");
    let finalState = GggMath_1.GggMath.ActionStateImmutableSumSample();
    console.log("finalState", finalState);
}
// ActionStateImmutableSumSampleTest();
//=============================================================================
//# sourceMappingURL=GggMathIntTests.js.map