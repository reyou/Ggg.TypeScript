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
/*When an interface type extends a class type it inherits the
members of the class but not their implementations. It is as
if the interface had declared all of the members of the class
without providing an implementation. Interfaces inherit even the
private and protected members of a base class. This means that
when you create an interface that extends a class with private or
protected members, that interface type can only be implemented by
that class or a subclass of it.
This is useful when you have a large inheritance hierarchy, but
want to specify that your code works with only subclasses that have
certain properties. The subclasses don’t have to be related besides
inheriting from the base class. For example: */
var ControlExtending = /** @class */ (function () {
    function ControlExtending() {
    }
    return ControlExtending;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(ControlExtending));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () { };
    return TextBox;
}(ControlExtending));
var Location = /** @class */ (function () {
    function Location() {
    }
    return Location;
}());
/*In the above example, SelectableControl contains all of the members of
Control, including the private state property. Since state is a private
member it is only possible for descendants of Control to implement SelectableControl.
This is because only descendants of Control will have a state private member
that originates in the same declaration, which is a requirement for private
members to be compatible. */
/*Within the Control class it is possible to access the state
private member through an instance of SelectableControl. Effectively, a
SelectableControl acts like a Control that is known to have a select method.
The Button and TextBox classes are subtypes of SelectableControl (because they
both inherit from Control and have a select method), but the Image and Location
classes are not. */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZXJmYWNlcyBFeHRlbmRpbmcgQ2xhc3Nlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkludGVyZmFjZXMgRXh0ZW5kaW5nIENsYXNzZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OzsrQ0FXK0M7QUFDL0M7SUFBQTtJQUVBLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBTUQ7SUFBcUIsMEJBQWdCO0lBQXJDOztJQUVBLENBQUM7SUFEQyx1QkFBTSxHQUFOLGNBQVUsQ0FBQztJQUNiLGFBQUM7QUFBRCxDQUFDLEFBRkQsQ0FBcUIsZ0JBQWdCLEdBRXBDO0FBRUQ7SUFBc0IsMkJBQWdCO0lBQXRDOztJQUVBLENBQUM7SUFEQyx3QkFBTSxHQUFOLGNBQVUsQ0FBQztJQUNiLGNBQUM7QUFBRCxDQUFDLEFBRkQsQ0FBc0IsZ0JBQWdCLEdBRXJDO0FBRUQ7SUFBQTtJQUFnQixDQUFDO0lBQUQsZUFBQztBQUFELENBQUMsQUFBakIsSUFBaUI7QUFDakI7Ozs7OzRCQUs0QjtBQUM1Qjs7Ozs7bUJBS21CIn0=