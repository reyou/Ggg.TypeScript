class AnimalPractice {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

class Rhino extends AnimalPractice {
    constructor() {
        super("Rhino");
    }
}

class Employee {
    private name: string;
    constructor(theName: string) {
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
