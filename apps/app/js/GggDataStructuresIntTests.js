"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Press F5 to run this page under VS code.
// http://www.typescriptlang.org/docs/handbook/variable-declarations.html
//=============================================================================
const GggDataStructures_1 = require("./GggDataStructures");
const GggCore_1 = require("./GggCore");
let gggDataStructures = new GggDataStructures_1.GggDataStructures();
//=============================================================================
var objectSpreadFun = function () {
    console.log("GggFunction: objectSpreadFun");
    class Container {
        constructor() {
            this.p = 12;
        }
        m() {
            console.log("m", "function is running.");
        }
    }
    let container = new Container();
    let clone = Object.assign({}, container);
    console.log("clone.p", clone.p);
    // clone.m(); // error!
};
objectSpreadFun();
//=============================================================================
var spreadOperatorFun = function () {
    //GggLogging.LogFunction(this);
    let first = [1, 2];
    console.log("first", first);
    let second = [3, 4];
    console.log("second", second);
    let bothPlus = [0, ...first, ...second, 5];
    console.log("bothPlus", bothPlus);
    let bothPlusNoSpread = [0, first, second, 5];
    console.log("bothPlusNoSpread", bothPlusNoSpread);
    // 
    let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
    let search = Object.assign({}, defaults, { food: "rich" });
    console.log("search", search);
};
// spreadOperatorFun();
//=============================================================================
var optionalDefaultsFun = function () {
    function f({ a, b = 0 } = { a: "" }) {
        console.log("a", a);
        console.log("b", b);
        console.log("//=====================");
    }
    f({ a: "yes" }); // ok, default b = 0
    f(); // ok, default to { a: "" }, which then defaults b = 0
    // f({}); // error, 'a' is required if you supply an argument
};
// optionalDefaultsFun();
//=============================================================================
var specifyingDefaultsFun = function () {
    function f({ a, b } = { a: "", b: 0 }) {
        console.log("a", a);
        console.log("b", b);
        console.log("//=====================");
    }
    f(); // ok, default to { a: "", b: 0 }
    f({
        a: "quarisma",
        b: 64
    });
};
// specifyingDefaultsFun();
//=============================================================================
var functionDeclarationsFun = function () {
    function f({ a, b }) {
        console.log("a", a);
        console.log("b", b);
    }
    f({
        a: "mike",
        b: 42
    });
};
// functionDeclarationsFun();
//=============================================================================
function keepWholeObject(wholeObject) {
    let { a, b = 1001 } = wholeObject;
    console.log("a", a);
    console.log("b", b);
}
var callKeepWholeObject = function () {
    keepWholeObject({
        a: "ggg",
        b: 123
    });
};
// callKeepWholeObject();
//=============================================================================
var assignmentWithoutDeclarationFun = function () {
    let a, b;
    ({ a, b } = { a: "baz", b: 101 });
    console.log("a", a);
    console.log("b", b);
    // o needs to have a property named c, in order to assign it to c.
    let o = {
        c: "foo",
        k: "fafa",
        b: 102
    };
    let { c } = o, passthrough = __rest(o, ["c"]);
    console.log("passthrough", passthrough);
    let total = passthrough.b + passthrough.k.length;
    console.log("c", c);
    console.log("total", total);
};
// assignmentWithoutDeclarationFun();
//=============================================================================
var destructureFun = function () {
    let o = {
        a: "foo",
        b: 12,
        c: "bar"
    };
    let { a, b } = o;
    console.log("o", o);
    console.log("a", a);
    console.log("b", b);
};
// destructureFun();
//=============================================================================
// You can create a variable for the remaining items in a list 
// using the syntax ...:
var dotdotdotFun = function () {
    let [first, ...rest] = [1, 2, 3, 4, 5];
    console.log("first", first); // outputs 1
    console.log("rest", rest); // outputs [ 2, 3, 4 ]
    rest.forEach((item) => {
        console.log("forEach", item);
    });
    //
    let [second] = [1, 2, 3, 4];
    console.log("second", second); // outputs 1
    //
    let [, , third, fourth] = [1, 2, 3, 4];
    console.log("third", third);
    console.log("fourth", fourth);
};
// dotdotdotFun();
//=============================================================================
var arrayDestructuringFun = function () {
    let input = [1, 2];
    let [first, second] = input;
    GggCore_1.GggCore.Log(first);
    GggCore_1.GggCore.Log(second);
    // swap variables
    [first, second] = [second, first];
    GggCore_1.GggCore.Log(first);
    GggCore_1.GggCore.Log(second);
};
// arrayDestructuringFun();
//=============================================================================
var constExamplesFun = function () {
    // This should not be confused with the idea that the values they refer to are immutable.
    const numLivesForCat = 9;
    const kitty = {
        name: "Aurora",
        numLives: numLivesForCat,
    };
    // Error
    // kitty = {
    //     name: "Danielle",
    //     numLives: numLivesForCat
    // };
    // all "okay"
    kitty.name = "Rory";
    kitty.name = "Kitty";
    kitty.name = "Cat";
    kitty.numLives--;
    GggCore_1.GggCore.Log({
        "exampleName": "constExamplesFun",
        kitty
    });
};
// constExamplesFun();
//=============================================================================
// we can change our old setTimeout example to just use a let declaration.
var setTimeoutFixFun = function () {
    for (let i = 0; i < 10; i++) {
        setTimeout(function () {
            console.log("setTimeoutFixFun", i);
        }, 100 * i);
    }
};
//setTimeoutFixFun();
//=============================================================================
var sampleMatrixFun = function () {
    let sampleMatrix = GggDataStructures_1.GggDataStructures.CreateMatrix(5, 5, 5);
    let sumOfMatrix = gggDataStructures.sumMatrix(sampleMatrix);
    console.log("sampleMatrixFun", "sumOfMatrix", sumOfMatrix);
};
// sampleMatrixFun();
//=============================================================================
// GggDataStructures.MixedSample();
//=============================================================================
var printRandomArray = function () {
    let randomArray = GggDataStructures_1.GggDataStructures.GetRandomIntArray(5, 0, 10);
    randomArray.forEach(element => {
        GggCore_1.GggCore.Log(element);
    });
};
// printRandomArray();
//=============================================================================
var printRandomTuple = function () {
    var randomTuple = GggDataStructures_1.GggDataStructures.GetRandomIntTuple(10, 100);
    GggCore_1.GggCore.Log(randomTuple);
};
// printRandomTuple();
//=============================================================================
var printRandomMixedArray = function () {
    var randomMixedArray = GggDataStructures_1.GggDataStructures.GetRandomMixedArray(10);
    GggCore_1.GggCore.Log(randomMixedArray);
};
// printRandomMixedArray();
//=============================================================================
//# sourceMappingURL=GggDataStructuresIntTests.js.map