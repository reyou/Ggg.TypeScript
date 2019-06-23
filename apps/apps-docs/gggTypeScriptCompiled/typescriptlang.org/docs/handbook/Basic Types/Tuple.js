"use strict";
/*Tuple types allow you to express an array where the type of a
fixed number of elements is known, but need not be the same.
For example, you may want to represent a value as a pair of
a string and a number: */
// Declare a tuple type
let x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error
console.log(x);
// When accessing an element with a known index, the correct type is retrieved:
console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHVwbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9CYXNpYyBUeXBlcy9UdXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozt5QkFHeUI7QUFDekIsdUJBQXVCO0FBQ3ZCLElBQUksQ0FBbUIsQ0FBQztBQUN4QixnQkFBZ0I7QUFDaEIsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSztBQUN4Qiw0QkFBNEI7QUFDNUIsOEJBQThCO0FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDZiwrRUFBK0U7QUFDL0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO0FBQ2xDLHlFQUF5RSJ9