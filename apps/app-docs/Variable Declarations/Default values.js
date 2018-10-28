"use strict";
// Default values let you specify a default
// value in case a property is undefined:
// keepWholeObject now has a variable for wholeObject as well as the
// properties a and b, even if b is undefined.
function keepWholeObject(wholeObject) {
    let { a, b = 1001 } = wholeObject;
    console.log(a + b);
}
keepWholeObject({
    a: "kafa-",
    b: 1500
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdCB2YWx1ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEZWZhdWx0IHZhbHVlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMkNBQTJDO0FBQzNDLHlDQUF5QztBQUN6QyxvRUFBb0U7QUFDcEUsOENBQThDO0FBQzlDLFNBQVMsZUFBZSxDQUFDLFdBQXNDO0lBQzdELElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxHQUFHLFdBQVcsQ0FBQztJQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNyQixDQUFDO0FBRUQsZUFBZSxDQUFDO0lBQ2QsQ0FBQyxFQUFFLE9BQU87SUFDVixDQUFDLEVBQUUsSUFBSTtDQUNSLENBQUMsQ0FBQyJ9