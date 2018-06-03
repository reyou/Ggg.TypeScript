/*A constructor may also be marked protected. This means that the
class cannot be instantiated outside of its containing class,
but can be extended. For example, */
class PersonProtected {
    constructor(theName) {
        this.name = theName;
    }
}
// Employee can extend Person
class EmployeeConsProtected extends PersonProtected {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howardProtected = new EmployeeConsProtected("Howard", "Sales");
console.log("\nhowardProtected:");
console.log(howardProtected);
// Error: The 'Person' constructor is protected
// let john = new PersonProtected("John"); 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RydWN0b3ItcHJvdGVjdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uc3RydWN0b3ItcHJvdGVjdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztvQ0FFb0M7QUFDcEM7SUFFSSxZQUFzQixPQUFlO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Q0FDSjtBQUVELDZCQUE2QjtBQUM3QiwyQkFBNEIsU0FBUSxlQUFlO0lBRy9DLFlBQVksSUFBWSxFQUFFLFVBQWtCO1FBQ3hDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFFTSxnQkFBZ0I7UUFDbkIsT0FBTyxxQkFBcUIsSUFBSSxDQUFDLElBQUksa0JBQWtCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQztJQUM5RSxDQUFDO0NBQ0o7QUFFRCxJQUFJLGVBQWUsR0FBRyxJQUFJLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM3QiwrQ0FBK0M7QUFDL0MsMkNBQTJDIn0=