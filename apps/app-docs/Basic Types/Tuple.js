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
// When accessing an element outside the set of known indices, a union type is used instead:
x[3] = "world"; // OK, 'string' can be assigned to 'string | number'
console.log(x);
console.log("qqq:", x[5].toString()); // OK, 'string' and 'number' both have 'toString'
// x[6] = true; // Error, 'boolean' isn't 'string | number'
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHVwbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUdXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O3lCQUd5QjtBQUN6Qix1QkFBdUI7QUFDdkIsSUFBSSxDQUFtQixDQUFDO0FBQ3hCLGdCQUFnQjtBQUNoQixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLO0FBQ3hCLDRCQUE0QjtBQUM1Qiw4QkFBOEI7QUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNmLCtFQUErRTtBQUMvRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7QUFDbEMseUVBQXlFO0FBQ3pFLDRGQUE0RjtBQUM1RixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsb0RBQW9EO0FBQ3BFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLGlEQUFpRDtBQUN2RiwyREFBMkQifQ==