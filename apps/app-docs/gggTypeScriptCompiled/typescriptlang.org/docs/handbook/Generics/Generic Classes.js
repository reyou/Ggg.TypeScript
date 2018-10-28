"use strict";
/*A generic class has a similar shape to a generic interface.
Generic classes have a generic type parameter list in angle brackets
(<>) following the name of the class. */
function GenericClasses() {
    class GenericNumber {
    }
    let myGenericNumber = new GenericNumber();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) {
        return x + y;
    };
    let result = myGenericNumber.add(1, 5);
    console.log(result);
}
GenericClasses();
/*This is a pretty literal use of the GenericNumber class, but
you may have noticed that nothing is restricting it to only use the number type.
We could have instead used string or even more complex objects. */
function GenericClasses2() {
    class GenericNumber {
    }
    let stringNumeric = new GenericNumber();
    stringNumeric.zeroValue = "";
    stringNumeric.add = function (x, y) {
        return x + y;
    };
    console.log("GenericClasses2:");
    console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
}
GenericClasses2();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpYyBDbGFzc2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svR2VuZXJpY3MvR2VuZXJpYyBDbGFzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7d0NBRXdDO0FBQ3hDLFNBQVMsY0FBYztJQUNyQixNQUFNLGFBQWE7S0FHbEI7SUFDRCxJQUFJLGVBQWUsR0FBRyxJQUFJLGFBQWEsRUFBVSxDQUFDO0lBQ2xELGVBQWUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLGVBQWUsQ0FBQyxHQUFHLEdBQUcsVUFBUyxDQUFDLEVBQUUsQ0FBQztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDLENBQUM7SUFDRixJQUFJLE1BQU0sR0FBRyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFDRCxjQUFjLEVBQUUsQ0FBQztBQUNqQjs7a0VBRWtFO0FBQ2xFLFNBQVMsZUFBZTtJQUN0QixNQUFNLGFBQWE7S0FHbEI7SUFDRCxJQUFJLGFBQWEsR0FBRyxJQUFJLGFBQWEsRUFBVSxDQUFDO0lBQ2hELGFBQWEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQzdCLGFBQWEsQ0FBQyxHQUFHLEdBQUcsVUFBUyxDQUFDLEVBQUUsQ0FBQztRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDLENBQUM7SUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNsRSxDQUFDO0FBQ0QsZUFBZSxFQUFFLENBQUMifQ==