/*While using any is certainly generic in that it will cause
the function to accept any and all types for the type of arg,
we actually are losing the information about what that type was
when the function returns. If we passed in a number, the only
information we have is that any type could be returned.
Instead, we need a way of capturing the type of the argument in such a
way that we can also use it to denote what is being returned. Here,
we will use a type variable, a special kind of variable that works on
types rather than values. */
function TypeVariables() {
    function identity(arg) {
        return arg;
    }
    var output = identity("myString"); // type of output will be 'string'
    console.log(output);
    // The second way is also perhaps the most common.
    // Here we use type argument inference – that is, we want the compiler
    // to set the value of T for us automatically based on the type of
    // the argument we pass in:
    var output2 = identity("myString"); // type of output will be 'string'
    console.log(output2);
}
TypeVariables();
/*We’ve now added a type variable T to the identity function.
This T allows us to capture the type the user provides (e.g. number),
so that we can use that information later. Here, we use T again as
the return type. On inspection, we can now see the same type is used
for the argument and the return type. This allows us to traffic that
type information in one side of the function and out the other. */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZSB2YXJpYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInR5cGUgdmFyaWFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OzRCQVE0QjtBQUM1QjtJQUNFLGtCQUFxQixHQUFNO1FBQ3pCLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUNELElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBUyxVQUFVLENBQUMsQ0FBQyxDQUFDLGtDQUFrQztJQUM3RSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLGtEQUFrRDtJQUNsRCxzRUFBc0U7SUFDdEUsa0VBQWtFO0lBQ2xFLDJCQUEyQjtJQUMzQixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxrQ0FBa0M7SUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN2QixDQUFDO0FBQ0QsYUFBYSxFQUFFLENBQUM7QUFDaEI7Ozs7O2tFQUtrRSJ9