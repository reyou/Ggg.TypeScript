"use strict";
// You can also give different names to properties:
let oProp = {
    a: "foo",
    aDes: "foo",
    aProp: "foo",
    bProp: 12,
    b: 12,
    c: "bar"
};
let { a: newName1, b: newName2 } = oProp;
console.log(newName1);
console.log(newName2);
// Here the syntax starts to get confusing. You can read a:
// newName1 as “a as newName1”. The direction is left-to-right,
// as if you had written:
let newName3 = oProp.a;
let newName4 = oProp.b;
console.log(newName3);
console.log(newName4);
// Confusingly, the colon here does not indicate the type.
// The type, if you specify it, still needs to be written
// after the entire destructuring:
let { aProp, bProp } = oProp;
console.log(aProp);
console.log(bProp);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvcGVydHkgcmVuYW1pbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9WYXJpYWJsZSBEZWNsYXJhdGlvbnMvUHJvcGVydHkgcmVuYW1pbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1EQUFtRDtBQUNuRCxJQUFJLEtBQUssR0FBRztJQUNWLENBQUMsRUFBRSxLQUFLO0lBQ1IsSUFBSSxFQUFFLEtBQUs7SUFDWCxLQUFLLEVBQUUsS0FBSztJQUNaLEtBQUssRUFBRSxFQUFFO0lBQ1QsQ0FBQyxFQUFFLEVBQUU7SUFDTCxDQUFDLEVBQUUsS0FBSztDQUNULENBQUM7QUFDRixJQUFJLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEdBQUcsS0FBSyxDQUFDO0FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0QiwyREFBMkQ7QUFDM0QsK0RBQStEO0FBQy9ELHlCQUF5QjtBQUV6QixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RCLDBEQUEwRDtBQUMxRCx5REFBeUQ7QUFDekQsa0NBQWtDO0FBQ2xDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQXFDLEtBQUssQ0FBQztBQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMifQ==