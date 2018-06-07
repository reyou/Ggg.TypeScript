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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvcGVydHkgcmVuYW1pbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQcm9wZXJ0eSByZW5hbWluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtREFBbUQ7QUFDbkQsSUFBSSxLQUFLLEdBQUc7SUFDVixDQUFDLEVBQUUsS0FBSztJQUNSLElBQUksRUFBRSxLQUFLO0lBQ1gsS0FBSyxFQUFFLEtBQUs7SUFDWixLQUFLLEVBQUUsRUFBRTtJQUNULENBQUMsRUFBRSxFQUFFO0lBQ0wsQ0FBQyxFQUFFLEtBQUs7Q0FDVCxDQUFDO0FBQ0ksSUFBQSxrQkFBVyxFQUFFLGtCQUFXLENBQVc7QUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RCLDJEQUEyRDtBQUMzRCwrREFBK0Q7QUFDL0QseUJBQXlCO0FBRXpCLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDdkIsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdEIsMERBQTBEO0FBQzFELHlEQUF5RDtBQUN6RCxrQ0FBa0M7QUFDNUIsSUFBQSxtQkFBSyxFQUFFLG1CQUFLLENBQTZDO0FBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyJ9