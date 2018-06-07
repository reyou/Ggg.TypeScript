// Default values let you specify a default
// value in case a property is undefined:
// keepWholeObject now has a variable for wholeObject as well as the
// properties a and b, even if b is undefined.
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
    console.log(a + b);
}
keepWholeObject({
    a: "kafa-",
    b: 1500
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdCB2YWx1ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEZWZhdWx0IHZhbHVlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFDM0MseUNBQXlDO0FBQ3pDLG9FQUFvRTtBQUNwRSw4Q0FBOEM7QUFDOUMseUJBQXlCLFdBQXNDO0lBQ3ZELElBQUEsaUJBQUMsRUFBRSxrQkFBUSxFQUFSLDZCQUFRLENBQWlCO0lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3JCLENBQUM7QUFFRCxlQUFlLENBQUM7SUFDZCxDQUFDLEVBQUUsT0FBTztJQUNWLENBQUMsRUFBRSxJQUFJO0NBQ1IsQ0FBQyxDQUFDIn0=