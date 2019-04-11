"use strict";
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
class ControlExtending {
}
class Button extends ControlExtending {
    select() { }
}
class TextBox extends ControlExtending {
    select() { }
}
class Location2 {
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZXJmYWNlcyBFeHRlbmRpbmcgQ2xhc3Nlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3R5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL0ludGVyZmFjZXMvSW50ZXJmYWNlcyBFeHRlbmRpbmcgQ2xhc3Nlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7OytDQVcrQztBQUMvQyxNQUFNLGdCQUFnQjtDQUVyQjtBQU1ELE1BQU0sTUFBTyxTQUFRLGdCQUFnQjtJQUNuQyxNQUFNLEtBQUksQ0FBQztDQUNaO0FBRUQsTUFBTSxPQUFRLFNBQVEsZ0JBQWdCO0lBQ3BDLE1BQU0sS0FBSSxDQUFDO0NBQ1o7QUFFRCxNQUFNLFNBQVM7Q0FBRztBQUNsQjs7Ozs7NEJBSzRCO0FBQzVCOzs7OzttQkFLbUIifQ==