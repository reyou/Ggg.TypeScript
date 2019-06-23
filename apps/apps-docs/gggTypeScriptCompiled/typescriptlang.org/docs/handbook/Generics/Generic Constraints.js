"use strict";
/*If you remember from an earlier example, you may sometimes
want to write a generic function that works on a set of types
where you have some knowledge about what capabilities that set of
types will have. In our loggingIdentity example, we wanted to be
able to access the .length property of arg, but the compiler could not
prove that every type had a .length property, so it warns us that we
can’t make this assumption. */
function GenericConstraints() {
    function loggingIdentity(arg) {
        // console.log(arg.length); // Error: T doesn't have .length
        return arg;
    }
}
/*Instead of working with any and all types, we’d like to constrain this
function to work with any and all types that also have the .length property.
As long as the type has this member, we’ll allow it, but it’s required to
have at least this member. To do so, we must list our requirement as a
constraint on what T can be.
To do so, we’ll create an interface that describes our constraint.
Here, we’ll create an interface that has a single .length property and
then we’ll use this interface and the extends keyword to denote our constraint: */
function GenericConstraintsFixed() {
    function loggingIdentity(arg) {
        console.log(arg.length); // Now we know it has a .length property, so no more error
        return arg;
    }
    loggingIdentity({ title: "hello", length: 1234 });
}
GenericConstraintsFixed();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpYyBDb25zdHJhaW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3R5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL0dlbmVyaWNzL0dlbmVyaWMgQ29uc3RyYWludHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7OEJBTThCO0FBQzlCLFNBQVMsa0JBQWtCO0lBQ3pCLFNBQVMsZUFBZSxDQUFJLEdBQU07UUFDaEMsNERBQTREO1FBQzVELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztBQUNILENBQUM7QUFDRDs7Ozs7OztrRkFPa0Y7QUFDbEYsU0FBUyx1QkFBdUI7SUFJOUIsU0FBUyxlQUFlLENBQXVCLEdBQU07UUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQywwREFBMEQ7UUFDbkYsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBQ0QsZUFBZSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNwRCxDQUFDO0FBQ0QsdUJBQXVCLEVBQUUsQ0FBQyJ9