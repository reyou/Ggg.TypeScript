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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpdmF0ZS1wcmFjdGljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByaXZhdGUtcHJhY3RpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0lBRUksd0JBQVksT0FBZTtRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQztBQUVEO0lBQW9CLHlCQUFjO0lBQzlCO2VBQ0ksa0JBQU0sT0FBTyxDQUFDO0lBQ2xCLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQyxBQUpELENBQW9CLGNBQWMsR0FJakM7QUFFRDtJQUVJLGtCQUFZLE9BQWU7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQztBQUVELElBQUksY0FBYyxHQUFHLElBQUksY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hELElBQUksS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7QUFDeEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFNUIsY0FBYyxHQUFHLEtBQUssQ0FBQztBQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUU1QixrRkFBa0YifQ==