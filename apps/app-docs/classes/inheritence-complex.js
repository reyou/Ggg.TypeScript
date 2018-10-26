"use strict";
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
var AnimalComplex = /** @class */ (function () {
    function AnimalComplex(theName) {
        this.name = theName;
    }
    AnimalComplex.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return AnimalComplex;
}());
var Snake = /** @class */ (function (_super) {
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
var Horse = /** @class */ (function (_super) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5oZXJpdGVuY2UtY29tcGxleC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluaGVyaXRlbmNlLWNvbXBsZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtJQUVJLHVCQUFZLE9BQWU7UUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztJQUFDLENBQUM7SUFDckQsNEJBQUksR0FBSixVQUFLLGdCQUE0QjtRQUE1QixpQ0FBQSxFQUFBLG9CQUE0QjtRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxJQUFJLGVBQVUsZ0JBQWdCLE9BQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFORCxJQU1DO0FBRUQ7SUFBb0IseUJBQWE7SUFDN0IsZUFBWSxJQUFZO2VBQUksa0JBQU0sSUFBSSxDQUFDO0lBQUUsQ0FBQztJQUMxQyxvQkFBSSxHQUFKLFVBQUssZ0JBQW9CO1FBQXBCLGlDQUFBLEVBQUEsb0JBQW9CO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0IsaUJBQU0sSUFBSSxZQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBb0IsYUFBYSxHQU1oQztBQUVEO0lBQW9CLHlCQUFhO0lBQzdCLGVBQVksSUFBWTtlQUFJLGtCQUFNLElBQUksQ0FBQztJQUFFLENBQUM7SUFDMUMsb0JBQUksR0FBSixVQUFLLGdCQUFxQjtRQUFyQixpQ0FBQSxFQUFBLHFCQUFxQjtRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLGlCQUFNLElBQUksWUFBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQyxBQU5ELENBQW9CLGFBQWEsR0FNaEM7QUFFRCxJQUFJLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3hDLElBQUksR0FBRyxHQUFrQixJQUFJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBRXpELEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNYLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMifQ==