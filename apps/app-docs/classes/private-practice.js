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
var AnimalPractice = /** @class */ (function () {
    function AnimalPractice(theName) {
        this.name = theName;
    }
    return AnimalPractice;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
    }
    return Rhino;
}(AnimalPractice));
var Employee = /** @class */ (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animalPractice = new AnimalPractice("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");
console.log("\nanimalPractice:");
console.log(animalPractice);
animalPractice = rhino;
console.log("\nanimalPractice:");
console.log(animalPractice);
// animalPractice = employee; // Error: 'Animal' and 'Employee' are not compatible
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpdmF0ZS1wcmFjdGljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByaXZhdGUtcHJhY3RpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtJQUVJLHdCQUFZLE9BQWU7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFFRDtJQUFvQix5QkFBYztJQUM5QjtlQUNJLGtCQUFNLE9BQU8sQ0FBQztJQUNsQixDQUFDO0lBQ0wsWUFBQztBQUFELENBQUMsQUFKRCxDQUFvQixjQUFjLEdBSWpDO0FBRUQ7SUFFSSxrQkFBWSxPQUFlO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFFRCxJQUFJLGNBQWMsR0FBRyxJQUFJLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoRCxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ3hCLElBQUksUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRW5DLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRTVCLGNBQWMsR0FBRyxLQUFLLENBQUM7QUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFNUIsa0ZBQWtGIn0=