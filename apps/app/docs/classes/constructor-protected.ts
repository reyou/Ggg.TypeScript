/*A constructor may also be marked protected. This means that the 
class cannot be instantiated outside of its containing class, 
but can be extended. For example, */
class PersonProtected {
    protected name: string;
    protected constructor(theName: string) {
        this.name = theName;
    }
}

// Employee can extend Person
class EmployeeConsProtected extends PersonProtected {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howardProtected = new EmployeeConsProtected("Howard", "Sales");
console.log("\nhowardProtected:");
console.log(howardProtected);
// Error: The 'Person' constructor is protected
// let john = new PersonProtected("John"); 
