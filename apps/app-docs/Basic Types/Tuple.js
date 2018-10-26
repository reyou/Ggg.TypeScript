"use strict";
/*Tuple types allow you to express an array where the type of a
fixed number of elements is known, but need not be the same.
For example, you may want to represent a value as a pair of
a string and a number: */
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error
console.log(x);
// When accessing an element with a known index, the correct type is retrieved:
console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
// When accessing an element outside the set of known indices, a union type is used instead:
x[3] = "world"; // OK, 'string' can be assigned to 'string | number'
console.log(x);
console.log("qqq:", x[5].toString()); // OK, 'string' and 'number' both have 'toString'
// x[6] = true; // Error, 'boolean' isn't 'string | number'
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHVwbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUdXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozt5QkFHeUI7QUFDekIsdUJBQXVCO0FBQ3ZCLElBQUksQ0FBbUIsQ0FBQztBQUN4QixnQkFBZ0I7QUFDaEIsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSztBQUN4Qiw0QkFBNEI7QUFDNUIsOEJBQThCO0FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDZiwrRUFBK0U7QUFDL0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO0FBQ2xDLHlFQUF5RTtBQUN6RSw0RkFBNEY7QUFDNUYsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLG9EQUFvRDtBQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxpREFBaUQ7QUFDdkYsMkRBQTJEIn0=