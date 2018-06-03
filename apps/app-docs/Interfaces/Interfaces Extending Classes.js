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
class Location {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZXJmYWNlcyBFeHRlbmRpbmcgQ2xhc3Nlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkludGVyZmFjZXMgRXh0ZW5kaW5nIENsYXNzZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OytDQVcrQztBQUMvQztDQUVDO0FBTUQsWUFBYSxTQUFRLGdCQUFnQjtJQUNuQyxNQUFNLEtBQUksQ0FBQztDQUNaO0FBRUQsYUFBYyxTQUFRLGdCQUFnQjtJQUNwQyxNQUFNLEtBQUksQ0FBQztDQUNaO0FBRUQ7Q0FBaUI7QUFDakI7Ozs7OzRCQUs0QjtBQUM1Qjs7Ozs7bUJBS21CIn0=