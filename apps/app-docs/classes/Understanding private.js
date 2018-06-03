class AnimalPrivate {
    constructor(theName) {
        this.name = theName;
    }
}
let animal = new AnimalPrivate("Cat");
// Error: 'name' is private;
// animal.name = "hello";
console.log(animal);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5kZXJzdGFuZGluZyBwcml2YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVW5kZXJzdGFuZGluZyBwcml2YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBRUksWUFBWSxPQUFlO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Q0FDSjtBQUVELElBQUksTUFBTSxHQUFHLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RDLDRCQUE0QjtBQUM1Qix5QkFBeUI7QUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyJ9