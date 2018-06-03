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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvcGVydHkgcmVuYW1pbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQcm9wZXJ0eSByZW5hbWluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtREFBbUQ7QUFDbkQsSUFBSSxLQUFLLEdBQUc7SUFDVixDQUFDLEVBQUUsS0FBSztJQUNSLElBQUksRUFBRSxLQUFLO0lBQ1gsS0FBSyxFQUFFLEtBQUs7SUFDWixLQUFLLEVBQUUsRUFBRTtJQUNULENBQUMsRUFBRSxFQUFFO0lBQ0wsQ0FBQyxFQUFFLEtBQUs7Q0FDVCxDQUFDO0FBQ0YsSUFBSSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxHQUFHLEtBQUssQ0FBQztBQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdEIsMkRBQTJEO0FBQzNELCtEQUErRDtBQUMvRCx5QkFBeUI7QUFFekIsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN2QixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0QiwwREFBMEQ7QUFDMUQseURBQXlEO0FBQ3pELGtDQUFrQztBQUNsQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFxQyxLQUFLLENBQUM7QUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDIn0=