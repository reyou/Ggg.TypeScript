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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpYyBDbGFzc2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR2VuZXJpYyBDbGFzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzt3Q0FFd0M7QUFDeEM7SUFDRTtLQUdDO0lBQ0QsSUFBSSxlQUFlLEdBQUcsSUFBSSxhQUFhLEVBQVUsQ0FBQztJQUNsRCxlQUFlLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUM5QixlQUFlLENBQUMsR0FBRyxHQUFHLFVBQVMsQ0FBQyxFQUFFLENBQUM7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxNQUFNLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0QixDQUFDO0FBQ0QsY0FBYyxFQUFFLENBQUM7QUFDakI7O2tFQUVrRTtBQUNsRTtJQUNFO0tBR0M7SUFDRCxJQUFJLGFBQWEsR0FBRyxJQUFJLGFBQWEsRUFBVSxDQUFDO0lBQ2hELGFBQWEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQzdCLGFBQWEsQ0FBQyxHQUFHLEdBQUcsVUFBUyxDQUFDLEVBQUUsQ0FBQztRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDLENBQUM7SUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNsRSxDQUFDO0FBQ0QsZUFBZSxFQUFFLENBQUMifQ==