"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjZXNzb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svQ2xhc3Nlcy9BY2Nlc3NvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OzsyREFLMkQ7QUFDM0QsTUFBTSxpQkFBaUI7Q0FFdEI7QUFFRCxJQUFJLGdCQUFnQixHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztBQUMvQyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO0FBQ3hDLElBQUksZ0JBQWdCLENBQUMsUUFBUSxFQUFFO0lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7Q0FDeEMifQ==