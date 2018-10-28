"use strict";
/*TypeScript comes with a ReadonlyArray<T> type that is
the same as Array<T> with all mutating methods removed,
so you can make sure you don’t change your arrays after creation: */
function ReadOnlyArray() {
    let a = [1, 2, 3, 4];
    let ro = a;
    console.log(ro);
    // ro[0] = 12; // error!
    // ro.push(5); // error!
    // ro.length = 100; // error!
    // a = ro; // error!
    /*On the last line of the snippet you can see that even
    assigning the entire ReadonlyArray back to a normal array is
    illegal. You can still override it with a type assertion, though: */
    a = ro;
    console.log(a);
}
ReadOnlyArray();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZG9ubHlBcnJheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3R5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL0ludGVyZmFjZXMvUmVhZG9ubHlBcnJheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O29FQUVvRTtBQUNwRSxTQUFTLGFBQWE7SUFDcEIsSUFBSSxDQUFDLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixJQUFJLEVBQUUsR0FBMEIsQ0FBQyxDQUFDO0lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4Qiw2QkFBNkI7SUFDN0Isb0JBQW9CO0lBQ3BCOzt3RUFFb0U7SUFDcEUsQ0FBQyxHQUFHLEVBQWMsQ0FBQztJQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pCLENBQUM7QUFDRCxhQUFhLEVBQUUsQ0FBQyJ9