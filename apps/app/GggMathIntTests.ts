// Press F5 to run this page under VS code.
//=============================================================================
import { GggMath } from "./GggMath"
import { GggCore } from "./GggCore"
//=============================================================================
var sumWithMultiParamTest = function () {
    let first = 5;
    let second = 7;
    let sum = GggMath.SumWithMultiParam([5, 7]);
    GggCore.Log(sum);
}
sumWithMultiParamTest();
//=============================================================================
function RandomBoolTest() {
    var randomBool = GggMath.RandomBool();
    GggCore.Log(`randomBool: ${randomBool}`);
}
// RandomBoolTest();
//=============================================================================
function RandomTest(): void {
    let random: number = GggMath.Random(0, 100);
    GggCore.Log(`random: ${random}`);
}
// RandomTest();
//=============================================================================
function SumWithReduceTest() {
    const nums = [1, 2, 3, 4, 5];
    var result: number = GggMath.SumWithReduce(nums);
    console.log("SumWithReduce: ");
    console.log("result:", result);
}
// SumWithReduceTest();
//=============================================================================
function ActionStateMutableSumSampleTest() {
    console.log("ActionStateMutableSumSample: ");
    let finalState: number = GggMath.ActionStateMutableSumSample();
    console.log("finalState", finalState);
}
// ActionStateMutableSumSampleTest();
//=============================================================================
function ActionStateImmutableSumSampleTest() {
    console.log("ActionStateImmutableSumSample: ");
    let finalState: number = GggMath.ActionStateImmutableSumSample();
    console.log("finalState", finalState);
}
// ActionStateImmutableSumSampleTest();
//=============================================================================

