"use strict";
// You can also give different names to properties:
var oProp = {
    a: "foo",
    aDes: "foo",
    aProp: "foo",
    bProp: 12,
    b: 12,
    c: "bar"
};
var newName1 = oProp.a, newName2 = oProp.b;
console.log(newName1);
console.log(newName2);
// Here the syntax starts to get confusing. You can read a:
// newName1 as “a as newName1”. The direction is left-to-right,
// as if you had written:
var newName3 = oProp.a;
var newName4 = oProp.b;
console.log(newName3);
console.log(newName4);
// Confusingly, the colon here does not indicate the type.
// The type, if you specify it, still needs to be written
// after the entire destructuring:
var aProp = oProp.aProp, bProp = oProp.bProp;
console.log(aProp);
console.log(bProp);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvcGVydHkgcmVuYW1pbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQcm9wZXJ0eSByZW5hbWluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbURBQW1EO0FBQ25ELElBQUksS0FBSyxHQUFHO0lBQ1YsQ0FBQyxFQUFFLEtBQUs7SUFDUixJQUFJLEVBQUUsS0FBSztJQUNYLEtBQUssRUFBRSxLQUFLO0lBQ1osS0FBSyxFQUFFLEVBQUU7SUFDVCxDQUFDLEVBQUUsRUFBRTtJQUNMLENBQUMsRUFBRSxLQUFLO0NBQ1QsQ0FBQztBQUNJLElBQUEsa0JBQVcsRUFBRSxrQkFBVyxDQUFXO0FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0QiwyREFBMkQ7QUFDM0QsK0RBQStEO0FBQy9ELHlCQUF5QjtBQUV6QixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RCLDBEQUEwRDtBQUMxRCx5REFBeUQ7QUFDekQsa0NBQWtDO0FBQzVCLElBQUEsbUJBQUssRUFBRSxtQkFBSyxDQUE2QztBQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMifQ==