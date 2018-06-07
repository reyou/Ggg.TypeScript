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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZG9ubHlBcnJheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJlYWRvbmx5QXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O29FQUVvRTtBQUNwRTtJQUNFLElBQUksQ0FBQyxHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsSUFBSSxFQUFFLEdBQTBCLENBQUMsQ0FBQztJQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsNkJBQTZCO0lBQzdCLG9CQUFvQjtJQUNwQjs7d0VBRW9FO0lBQ3BFLENBQUMsR0FBRyxFQUFjLENBQUM7SUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQixDQUFDO0FBQ0QsYUFBYSxFQUFFLENBQUMifQ==