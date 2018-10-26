"use strict";
var AnimalPrivate = /** @class */ (function () {
    function AnimalPrivate(theName) {
        this.name = theName;
    }
    return AnimalPrivate;
}());
var animal = new AnimalPrivate("Cat");
// Error: 'name' is private;
// animal.name = "hello";
console.log(animal);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5kZXJzdGFuZGluZyBwcml2YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVW5kZXJzdGFuZGluZyBwcml2YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUVJLHVCQUFZLE9BQWU7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFFRCxJQUFJLE1BQU0sR0FBRyxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0Qyw0QkFBNEI7QUFDNUIseUJBQXlCO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMifQ==