/*A generic class has a similar shape to a generic interface.
Generic classes have a generic type parameter list in angle brackets
(<>) following the name of the class. */
function GenericClasses() {
    var GenericNumber = /** @class */ (function () {
        function GenericNumber() {
        }
        return GenericNumber;
    }());
    var myGenericNumber = new GenericNumber();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) {
        return x + y;
    };
    var result = myGenericNumber.add(1, 5);
    console.log(result);
}
GenericClasses();
/*This is a pretty literal use of the GenericNumber class, but
you may have noticed that nothing is restricting it to only use the number type.
We could have instead used string or even more complex objects. */
function GenericClasses2() {
    var GenericNumber = /** @class */ (function () {
        function GenericNumber() {
        }
        return GenericNumber;
    }());
    var stringNumeric = new GenericNumber();
    stringNumeric.zeroValue = "";
    stringNumeric.add = function (x, y) {
        return x + y;
    };
    console.log("GenericClasses2:");
    console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
}
GenericClasses2();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpYyBDbGFzc2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR2VuZXJpYyBDbGFzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzt3Q0FFd0M7QUFDeEM7SUFDRTtRQUFBO1FBR0EsQ0FBQztRQUFELG9CQUFDO0lBQUQsQ0FBQyxBQUhELElBR0M7SUFDRCxJQUFJLGVBQWUsR0FBRyxJQUFJLGFBQWEsRUFBVSxDQUFDO0lBQ2xELGVBQWUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLGVBQWUsQ0FBQyxHQUFHLEdBQUcsVUFBUyxDQUFDLEVBQUUsQ0FBQztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDLENBQUM7SUFDRixJQUFJLE1BQU0sR0FBRyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFDRCxjQUFjLEVBQUUsQ0FBQztBQUNqQjs7a0VBRWtFO0FBQ2xFO0lBQ0U7UUFBQTtRQUdBLENBQUM7UUFBRCxvQkFBQztJQUFELENBQUMsQUFIRCxJQUdDO0lBQ0QsSUFBSSxhQUFhLEdBQUcsSUFBSSxhQUFhLEVBQVUsQ0FBQztJQUNoRCxhQUFhLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUM3QixhQUFhLENBQUMsR0FBRyxHQUFHLFVBQVMsQ0FBQyxFQUFFLENBQUM7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDbEUsQ0FBQztBQUNELGVBQWUsRUFBRSxDQUFDIn0=