"use strict";
/*TypeScript comes with a ReadonlyArray<T> type that is
the same as Array<T> with all mutating methods removed,
so you can make sure you don’t change your arrays after creation: */
function ReadOnlyArray() {
    var a = [1, 2, 3, 4];
    var ro = a;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZG9ubHlBcnJheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJlYWRvbmx5QXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztvRUFFb0U7QUFDcEU7SUFDRSxJQUFJLENBQUMsR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLElBQUksRUFBRSxHQUEwQixDQUFDLENBQUM7SUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoQix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEI7O3dFQUVvRTtJQUNwRSxDQUFDLEdBQUcsRUFBYyxDQUFDO0lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakIsQ0FBQztBQUNELGFBQWEsRUFBRSxDQUFDIn0=