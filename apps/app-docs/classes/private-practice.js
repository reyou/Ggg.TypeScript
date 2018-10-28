"use strict";
class AnimalPractice {
    constructor(theName) {
        this.name = theName;
    }
}
class Rhino extends AnimalPractice {
    constructor() {
        super("Rhino");
    }
}
class Employee {
    constructor(theName) {
        this.name = theName;
    }
}
let animalPractice = new AnimalPractice("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");
console.log("\nanimalPractice:");
console.log(animalPractice);
animalPractice = rhino;
console.log("\nanimalPractice:");
console.log(animalPractice);
// animalPractice = employee; // Error: 'Animal' and 'Employee' are not compatible
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpdmF0ZS1wcmFjdGljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByaXZhdGUtcHJhY3RpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sY0FBYztJQUVoQixZQUFZLE9BQWU7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQztDQUNKO0FBRUQsTUFBTSxLQUFNLFNBQVEsY0FBYztJQUM5QjtRQUNJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQixDQUFDO0NBQ0o7QUFFRCxNQUFNLFFBQVE7SUFFVixZQUFZLE9BQWU7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQztDQUNKO0FBRUQsSUFBSSxjQUFjLEdBQUcsSUFBSSxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUN4QixJQUFJLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUVuQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUU1QixjQUFjLEdBQUcsS0FBSyxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRTVCLGtGQUFrRiJ9