// Press F5 to run this page under VS code.
// http://www.typescriptlang.org/docs/handbook/interfaces.html

//=============================================================================
// template();
//=============================================================================

//=============================================================================
var hybridTypesFun = function () {
    interface Counter {
        // constructor
        (start: number): string;
        value: number;
        interval: number;
        reset(): void;
    }
    function getCounter(): Counter {
        let counter = <Counter>function (start: number) { };
        counter.interval = 123;
        counter.reset = function () { };
        return counter;
    }
    let counter = getCounter();
    counter(10);
    counter.reset();
    counter.interval = 5.0;
    console.log("counter", counter);
}
// hybridTypesFun();
//=============================================================================

//=============================================================================
var extendingInterfacesFun = function () {
    console.log("extendingInterfacesFun:", "extendingInterfacesFun");
    interface Identity {
        title: string;
    }
    interface Shape {
        color: string;
    }
    interface Square extends Shape, Identity {
        sideLength: number;
    }
    class SquareGarden implements Square {
        constructor(state: string) {
            this.state = state;
        }
        private state: string;
        title: string;
        sideLength: number;
        color: string;
    }
    let square = <Square>{};
    square.color = "blue";
    square.sideLength = 10;
    console.log("square", square);
    //
    let squareGarden = <SquareGarden>{};
    squareGarden.color = "green";
    squareGarden.sideLength = 50;
    console.log("squareGarden", squareGarden);
}
// extendingInterfacesFun();
//=============================================================================


//=============================================================================
var dependencyInjectionFun = function () {
    interface ClockInterface {
        tick();
    }
    interface ClockConstructor {
        new(hour: number, minute: number): ClockInterface;
    }
    function createClock(ctor: ClockConstructor,
        hour: number, minute: number): ClockInterface {
        return new ctor(hour, minute);
    };
    class DigitalClock implements ClockInterface {
        constructor(h: number, m: number) {
            console.log("DigitalClock initialized.");
        }
        tick() {
            console.log("beep beep");
        }
    }
    class AnalogClass implements ClockInterface {
        constructor(h: number, m: number) {
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
}
// dependencyInjectionFun();
//=============================================================================

//=============================================================================
var implementingInterfaceFun = function () {
    interface ClockInterface {
        // digital, analog, water
        currentTime: Date;
        setTime(d: Date);
        breakTime();
    }
    class DigitalClock implements ClockInterface {
        breakTime() {
            throw new Error("Time is broken :(");
        }
        setTime(date: Date) {
            this.currentTime = date;
        }
        hour: number;
        minutes: number;
        currentTime: Date;
        constructor(hour: number, minutes: number) {
            this.hour = hour;
            this.minutes = minutes;
        };
    }
    let digitalClock = new DigitalClock(9, 10);
    console.log("digitalClock", digitalClock);
}
// implementingInterfaceFun();
//=============================================================================

//=============================================================================
let readonlyStringArrayFun = function () {
    interface ReadonlyStringArray {
        readonly [index: number]: string;
    }
    // values only assignable on initialization!
    let myArray: ReadonlyStringArray = ["Alice", "Bob"];
    // readonly!
    // myArray[2] = "Mallory"; // error
    console.log("myArray", myArray);
}
// readonlyStringArrayFun();
//=============================================================================

//=============================================================================
let numberDictionaryFun = function () {
    // While string index signatures are a powerful way to 
    // describe the “dictionary” pattern, they also enforce that 
    // all properties match their return type. 
    // This is because a string index declares that obj.property is also 
    // available as obj["property"]. 
    interface NumberDictionary {
        [index: string]: number;
        // ok, length is a number
        length: number;
        // error, the type of 'name' is not a subtype of the indexer
        //name: string; 
    }
}
// numberDictionaryFun();
//=============================================================================

//=============================================================================
let indexableTypesFun = function () {
    interface StringArray {
        [index: number]: string;
    }
    let myArray: StringArray;
    myArray = ["Bob", "Fred"];
    let myStr: string = myArray[0];
    console.log("myStr", myStr);
}
// indexableTypesFun();
//=============================================================================

//=============================================================================
let searchFun = function () {
    interface SearchFunc {
        (source: string, subString: string): boolean;
    }
    let mySearch: SearchFunc;
    mySearch = function (src, sub): boolean {
        let result = src.search(sub);
        return result > -1;
    }
    let result = mySearch("trololo", "lolo");
    console.log("result", result);
}
// searchFun();
//=============================================================================


//=============================================================================
var functionTypesFun = function () {
    interface SearchFunc {
        (source: string, subString: string): boolean;
    }
    let mySearch: SearchFunc;
    mySearch = function (source: string, subString: string): boolean {
        let result = source.search(subString);
        return result > -1;
    }
    let searchResult = mySearch("abcdq", "dq");
    console.log("searchResult", searchResult);
}
// functionTypesFun();
//=============================================================================


//=============================================================================
var squareExtraConfigFun = function () {
    // add a string index signature if you’re sure that the object 
    // can have some extra properties that are used in some special way.
    interface SquareConfigExtra {
        color?: string;
        width?: number;
        [propName: string]: any;
    }
    function createSquare(config: SquareConfigExtra): { color: string; area: number } {
        let color = config.color;
        let area: number = config.width * config.width;
        return {
            color,
            area
        }
    }
    let squareOptions = { colour: "red", width: 100 };
    let mySquare = createSquare(squareOptions);
    console.log("mySquare", mySquare);
}
// squareExtraConfigFun();
//=============================================================================

//=============================================================================
var squareConfigFun = function () {
    interface SquareConfig {
        color?: string;
        width?: number;
    }
    function createSquare(config: SquareConfig): { color: string; area: number } {
        let color = config.color;
        let area: number = config.width * config.width;
        return {
            color,
            area
        }
    }
    let mySquare = createSquare({ color: "red", width: 100 });
    console.log("mySquare", mySquare);
    let mySquareSecond = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
    console.log("mySquareSecond", mySquareSecond);
}
// squareConfigFun();
//=============================================================================

//=============================================================================
// readonly vs const
// easiest way to remember
// Variables use const whereas properties use readonly.
var constReadOnlyFun = function () {
    const timeNow = new Date();
    class Picture {
        readonly width: number;
        readonly heigth: number;
    }
    console.log("getUTCDay", timeNow.getUTCDay());
}
// constReadOnlyFun();
//=============================================================================

//=============================================================================
// TypeScript comes with a ReadonlyArray<T> type that is the same 
// as Array<T> with all mutating methods removed, 
// so you can make sure you don’t change your arrays after creation:
var readonlyArrayFun = function () {
    let a: number[] = [1, 2, 3, 4];
    let ro: ReadonlyArray<number> = a;
    //ro[0] = 12; // error!
    //ro.push(5); // error!
    //ro.length = 100; // error!
    //a = ro; // error!
    console.log("ro", ro);
    a = ro as number[];
    console.log("a", a);
}
// readonlyArrayFun();
//=============================================================================
var readonlyPropertiesFun = function () {
    // Some properties should only be modifiable 
    // when an object is first created.
    interface Point {
        readonly x: number;
        readonly y: number;
    }
    let p1: Point = { x: 10, y: 20 };
    // p1.x = 5; // error!
    console.log("p1", p1);
}
// readonlyPropertiesFun();
//=============================================================================
var optionalPropertiesFun = function () {
    interface SquareConfig {
        color?: string;
        width?: number;
    }
    function createSquare(config: SquareConfig): { color: string; area: number } {
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

}
// optionalPropertiesFun();
//=============================================================================
var interfaceFun = function () {
    interface LabelledValue {
        label: string;
    }
    function printLabel(labelledObj: LabelledValue) {
        console.log(labelledObj.label);
    }
    let myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
}
//interfaceFun();
//=============================================================================
// One of TypeScript’s core principles is that type-checking 
// focuses on the shape that values have.
// This is sometimes called “duck typing” or “structural subtyping”.
//=============================================================================