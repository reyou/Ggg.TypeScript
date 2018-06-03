/*TypeScript supports getters/setters as a way of intercepting
accesses to a member of an object. This gives you a way of
having finer-grained control over how a member is accessed
on each object.
Let’s convert a simple class to use get and set. First,
let’s start with an example without getters and setters. */
class EmployeeAccessors {
}
let employeeAccessor = new EmployeeAccessors();
employeeAccessor.fullName = "Bob Smith";
if (employeeAccessor.fullName) {
    console.log(employeeAccessor.fullName);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjZXNzb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQWNjZXNzb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OzsyREFLMkQ7QUFDM0Q7Q0FFQztBQUVELElBQUksZ0JBQWdCLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO0FBQy9DLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7QUFDeEMsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7SUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztDQUMxQyJ9