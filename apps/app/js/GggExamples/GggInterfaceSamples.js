// Press F5 to run this page under VS code.
// http://www.typescriptlang.org/docs/handbook/interfaces.html
//=============================================================================
// template();
//=============================================================================
//=============================================================================
var hybridTypesFun = function () {
    function getCounter() {
        let counter = function (start) { };
        counter.interval = 123;
        counter.reset = function () { };
        return counter;
    }
    let counter = getCounter();
    counter(10);
    counter.reset();
    counter.interval = 5.0;
    console.log("counter", counter);
};
// hybridTypesFun();
//=============================================================================
//=============================================================================
var extendingInterfacesFun = function () {
    console.log("extendingInterfacesFun:", "extendingInterfacesFun");
    class SquareGarden {
        constructor(state) {
            this.state = state;
        }
    }
    let square = {};
    square.color = "blue";
    square.sideLength = 10;
    console.log("square", square);
    //
    let squareGarden = {};
    squareGarden.color = "green";
    squareGarden.sideLength = 50;
    console.log("squareGarden", squareGarden);
};
// extendingInterfacesFun();
//=============================================================================
//=============================================================================
var dependencyInjectionFun = function () {
    function createClock(ctor, hour, minute) {
        return new ctor(hour, minute);
    }
    ;
    class DigitalClock {
        constructor(h, m) {
            console.log("DigitalClock initialized.");
        }
        tick() {
            console.log("beep beep");
        }
    }
    class AnalogClass {
        constructor(h, m) {
            console.log("AnalogClass initialized.");
        }
        tick() {
            console.log("tick tock");
        }
    }
    let digital = createClock(DigitalClock, 12, 17);
    let analog = createClock(AnalogClass, 7, 32);
    console.log("digital", digital);
    console.log("analog", analog);
};
// dependencyInjectionFun();
//=============================================================================
//=============================================================================
var implementingInterfaceFun = function () {
    class DigitalClock {
        breakTime() {
            throw new Error("Time is broken :(");
        }
        setTime(date) {
            this.currentTime = date;
        }
        constructor(hour, minutes) {
            this.hour = hour;
            this.minutes = minutes;
        }
        ;
    }
    let digitalClock = new DigitalClock(9, 10);
    console.log("digitalClock", digitalClock);
};
// implementingInterfaceFun();
//=============================================================================
//=============================================================================
let readonlyStringArrayFun = function () {
    // values only assignable on initialization!
    let myArray = ["Alice", "Bob"];
    // readonly!
    // myArray[2] = "Mallory"; // error
    console.log("myArray", myArray);
};
// readonlyStringArrayFun();
//=============================================================================
//=============================================================================
let numberDictionaryFun = function () {
};
// numberDictionaryFun();
//=============================================================================
//=============================================================================
let indexableTypesFun = function () {
    let myArray;
    myArray = ["Bob", "Fred"];
    let myStr = myArray[0];
    console.log("myStr", myStr);
};
// indexableTypesFun();
//=============================================================================
//=============================================================================
let searchFun = function () {
    let mySearch;
    mySearch = function (src, sub) {
        let result = src.search(sub);
        return result > -1;
    };
    let result = mySearch("trololo", "lolo");
    console.log("result", result);
};
// searchFun();
//=============================================================================
//=============================================================================
var functionTypesFun = function () {
    let mySearch;
    mySearch = function (source, subString) {
        let result = source.search(subString);
        return result > -1;
    };
    let searchResult = mySearch("abcdq", "dq");
    console.log("searchResult", searchResult);
};
// functionTypesFun();
//=============================================================================
//=============================================================================
var squareExtraConfigFun = function () {
    function createSquare(config) {
        let color = config.color;
        let area = config.width * config.width;
        return {
            color,
            area
        };
    }
    let squareOptions = { colour: "red", width: 100 };
    let mySquare = createSquare(squareOptions);
    console.log("mySquare", mySquare);
};
// squareExtraConfigFun();
//=============================================================================
//=============================================================================
var squareConfigFun = function () {
    function createSquare(config) {
        let color = config.color;
        let area = config.width * config.width;
        return {
            color,
            area
        };
    }
    let mySquare = createSquare({ color: "red", width: 100 });
    console.log("mySquare", mySquare);
    let mySquareSecond = createSquare({ width: 100, opacity: 0.5 });
    console.log("mySquareSecond", mySquareSecond);
};
// squareConfigFun();
//=============================================================================
//=============================================================================
// readonly vs const
// easiest way to remember
// Variables use const whereas properties use readonly.
var constReadOnlyFun = function () {
    const timeNow = new Date();
    class Picture {
    }
    console.log("getUTCDay", timeNow.getUTCDay());
};
// constReadOnlyFun();
//=============================================================================
//=============================================================================
// TypeScript comes with a ReadonlyArray<T> type that is the same 
// as Array<T> with all mutating methods removed, 
// so you can make sure you don’t change your arrays after creation:
var readonlyArrayFun = function () {
    let a = [1, 2, 3, 4];
    let ro = a;
    //ro[0] = 12; // error!
    //ro.push(5); // error!
    //ro.length = 100; // error!
    //a = ro; // error!
    console.log("ro", ro);
    a = ro;
    console.log("a", a);
};
// readonlyArrayFun();
//=============================================================================
var readonlyPropertiesFun = function () {
    let p1 = { x: 10, y: 20 };
    // p1.x = 5; // error!
    console.log("p1", p1);
};
// readonlyPropertiesFun();
//=============================================================================
var optionalPropertiesFun = function () {
    function createSquare(config) {
        // defaults
        let newSquare = {
            color: "white",
            area: 100
        };
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        console.log("newSquare", newSquare);
        return newSquare;
    }
    createSquare({
        color: "red",
        width: 50
    });
};
// optionalPropertiesFun();
//=============================================================================
var interfaceFun = function () {
    function printLabel(labelledObj) {
        console.log(labelledObj.label);
    }
    let myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
};
//interfaceFun();
//=============================================================================
// One of TypeScript’s core principles is that type-checking 
// focuses on the shape that values have.
// This is sometimes called “duck typing” or “structural subtyping”.
//============================================================================= 
//# sourceMappingURL=GggInterfaceSamples.js.map