var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof! Woof!');
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5oZXJpdGFuY2Utc2FtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSW5oZXJpdGFuY2Utc2FtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBSUEsQ0FBQztJQUhHLHFCQUFJLEdBQUosVUFBSyxnQkFBNEI7UUFBNUIsaUNBQUEsRUFBQSxvQkFBNEI7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBZ0IsZ0JBQWdCLE9BQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFFRDtJQUFrQix1QkFBTTtJQUF4Qjs7SUFJQSxDQUFDO0lBSEcsa0JBQUksR0FBSjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNMLFVBQUM7QUFBRCxDQUFDLEFBSkQsQ0FBa0IsTUFBTSxHQUl2QjtBQUVELElBQU0sR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7QUFDdEIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ1gsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNiLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyJ9