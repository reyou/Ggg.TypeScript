class AnimalPrivate {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

let animal = new AnimalPrivate("Cat");
// Error: 'name' is private;
// animal.name = "hello";
console.log(animal);


