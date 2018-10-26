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
/*The protected modifier acts much like the private modifier with
the exception that members declared protected can also be accessed
by instances of deriving classes. For example, */
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var EmployeeProtected = /** @class */ (function (_super) {
    __extends(EmployeeProtected, _super);
    function EmployeeProtected(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    EmployeeProtected.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return EmployeeProtected;
}(Person));
var howard = new EmployeeProtected("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // error
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5kZXJzdGFuZGluZyBwcm90ZWN0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVbmRlcnN0YW5kaW5nIHByb3RlY3RlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztpREFFaUQ7QUFDakQ7SUFFSSxnQkFBWSxJQUFZO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFFRDtJQUFnQyxxQ0FBTTtJQUdsQywyQkFBWSxJQUFZLEVBQUUsVUFBa0I7UUFBNUMsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtRQURHLEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDOztJQUNqQyxDQUFDO0lBRU0sNENBQWdCLEdBQXZCO1FBQ0ksT0FBTyx1QkFBcUIsSUFBSSxDQUFDLElBQUksdUJBQWtCLElBQUksQ0FBQyxVQUFVLE1BQUcsQ0FBQztJQUM5RSxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBWEQsQ0FBZ0MsTUFBTSxHQVdyQztBQUVELElBQUksTUFBTSxHQUFHLElBQUksaUJBQWlCLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztBQUN2QyxxQ0FBcUMifQ==