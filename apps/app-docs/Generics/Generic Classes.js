"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpYyBDbGFzc2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR2VuZXJpYyBDbGFzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7d0NBRXdDO0FBQ3hDO0lBQ0U7UUFBQTtRQUdBLENBQUM7UUFBRCxvQkFBQztJQUFELENBQUMsQUFIRCxJQUdDO0lBQ0QsSUFBSSxlQUFlLEdBQUcsSUFBSSxhQUFhLEVBQVUsQ0FBQztJQUNsRCxlQUFlLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUM5QixlQUFlLENBQUMsR0FBRyxHQUFHLFVBQVMsQ0FBQyxFQUFFLENBQUM7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxNQUFNLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0QixDQUFDO0FBQ0QsY0FBYyxFQUFFLENBQUM7QUFDakI7O2tFQUVrRTtBQUNsRTtJQUNFO1FBQUE7UUFHQSxDQUFDO1FBQUQsb0JBQUM7SUFBRCxDQUFDLEFBSEQsSUFHQztJQUNELElBQUksYUFBYSxHQUFHLElBQUksYUFBYSxFQUFVLENBQUM7SUFDaEQsYUFBYSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDN0IsYUFBYSxDQUFDLEdBQUcsR0FBRyxVQUFTLENBQUMsRUFBRSxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUMsQ0FBQztJQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ2xFLENBQUM7QUFDRCxlQUFlLEVBQUUsQ0FBQyJ9