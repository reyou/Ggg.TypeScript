/*TypeScript supports getters/setters as a way of intercepting
accesses to a member of an object. This gives you a way of
having finer-grained control over how a member is accessed
on each object.
Let’s convert a simple class to use get and set. First,
let’s start with an example without getters and setters. */
var EmployeeAccessors = (function () {
    function EmployeeAccessors() {
    }
    return EmployeeAccessors;
}());
var employeeAccessor = new EmployeeAccessors();
employeeAccessor.fullName = "Bob Smith";
if (employeeAccessor.fullName) {
    console.log(employeeAccessor.fullName);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjZXNzb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQWNjZXNzb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OzsyREFLMkQ7QUFDM0Q7SUFBQTtJQUVBLENBQUM7SUFBRCx3QkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRUQsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7QUFDL0MsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztBQUN4QyxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDM0MsQ0FBQyJ9