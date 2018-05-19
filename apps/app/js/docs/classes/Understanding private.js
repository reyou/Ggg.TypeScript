class AnimalPrivate {
    constructor(theName) {
        this.name = theName;
    }
}
let animal = new AnimalPrivate("Cat");
// Error: 'name' is private;
// animal.name = "hello";
console.log(animal);
//# sourceMappingURL=Understanding private.js.map