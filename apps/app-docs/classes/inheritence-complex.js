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
var AnimalComplex = (function () {
    function AnimalComplex(theName) {
        this.name = theName;
    }
    AnimalComplex.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return AnimalComplex;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(AnimalComplex));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(AnimalComplex));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5oZXJpdGVuY2UtY29tcGxleC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluaGVyaXRlbmNlLWNvbXBsZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0lBRUksdUJBQVksT0FBZTtRQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0lBQUMsQ0FBQztJQUNyRCw0QkFBSSxHQUFKLFVBQUssZ0JBQTRCO1FBQTVCLGlDQUFBLEVBQUEsb0JBQTRCO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLElBQUksZUFBVSxnQkFBZ0IsT0FBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFFRDtJQUFvQix5QkFBYTtJQUM3QixlQUFZLElBQVk7ZUFBSSxrQkFBTSxJQUFJLENBQUM7SUFBRSxDQUFDO0lBQzFDLG9CQUFJLEdBQUosVUFBSyxnQkFBb0I7UUFBcEIsaUNBQUEsRUFBQSxvQkFBb0I7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QixpQkFBTSxJQUFJLFlBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0wsWUFBQztBQUFELENBQUMsQUFORCxDQUFvQixhQUFhLEdBTWhDO0FBRUQ7SUFBb0IseUJBQWE7SUFDN0IsZUFBWSxJQUFZO2VBQUksa0JBQU0sSUFBSSxDQUFDO0lBQUUsQ0FBQztJQUMxQyxvQkFBSSxHQUFKLFVBQUssZ0JBQXFCO1FBQXJCLGlDQUFBLEVBQUEscUJBQXFCO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsaUJBQU0sSUFBSSxZQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBb0IsYUFBYSxHQU1oQztBQUVELElBQUksR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDeEMsSUFBSSxHQUFHLEdBQWtCLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFFekQsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ1gsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyJ9