/*A generic class has a similar shape to a generic interface.
Generic classes have a generic type parameter list in angle brackets
(<>) following the name of the class. */
function GenericClasses() {
    var GenericNumber = (function () {
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
    var GenericNumber = (function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpYyBDbGFzc2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR2VuZXJpYyBDbGFzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzt3Q0FFd0M7QUFDeEM7SUFDRTtRQUFBO1FBR0EsQ0FBQztRQUFELG9CQUFDO0lBQUQsQ0FBQyxBQUhELElBR0M7SUFDRCxJQUFJLGVBQWUsR0FBRyxJQUFJLGFBQWEsRUFBVSxDQUFDO0lBQ2xELGVBQWUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLGVBQWUsQ0FBQyxHQUFHLEdBQUcsVUFBUyxDQUFDLEVBQUUsQ0FBQztRQUNqQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUMsQ0FBQztJQUNGLElBQUksTUFBTSxHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEIsQ0FBQztBQUNELGNBQWMsRUFBRSxDQUFDO0FBQ2pCOztrRUFFa0U7QUFDbEU7SUFDRTtRQUFBO1FBR0EsQ0FBQztRQUFELG9CQUFDO0lBQUQsQ0FBQyxBQUhELElBR0M7SUFDRCxJQUFJLGFBQWEsR0FBRyxJQUFJLGFBQWEsRUFBVSxDQUFDO0lBQ2hELGFBQWEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQzdCLGFBQWEsQ0FBQyxHQUFHLEdBQUcsVUFBUyxDQUFDLEVBQUUsQ0FBQztRQUMvQixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUMsQ0FBQztJQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ2xFLENBQUM7QUFDRCxlQUFlLEVBQUUsQ0FBQyJ9