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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdCB2YWx1ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9WYXJpYWJsZSBEZWNsYXJhdGlvbnMvRGVmYXVsdCB2YWx1ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJDQUEyQztBQUMzQyx5Q0FBeUM7QUFDekMsb0VBQW9FO0FBQ3BFLDhDQUE4QztBQUM5QyxTQUFTLGVBQWUsQ0FBQyxXQUFzQztJQUM3RCxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsR0FBRyxXQUFXLENBQUM7SUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDckIsQ0FBQztBQUVELGVBQWUsQ0FBQztJQUNkLENBQUMsRUFBRSxPQUFPO0lBQ1YsQ0FBQyxFQUFFLElBQUk7Q0FDUixDQUFDLENBQUMifQ==