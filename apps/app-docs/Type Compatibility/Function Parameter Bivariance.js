/*When comparing the types of function parameters, assignment succeeds
if either the source parameter is assignable to the target parameter,
or vice versa. This is unsound because a caller might end up being
given a function that takes a more specialized type, but invokes
the function with a less specialized type. In practice, this sort
of error is rare, and allowing this enables many common JavaScript
patterns. A brief example: */
function FunctionParameterBivariance() {
    var EventType;
    (function (EventType) {
        EventType[EventType["Mouse"] = 0] = "Mouse";
        EventType[EventType["Keyboard"] = 1] = "Keyboard";
    })(EventType || (EventType = {}));
    function listenEvent(eventType, handler) {
        /* ... */
    }
    // Unsound, but useful and common
    listenEvent(EventType.Mouse, function (e) { return console.log(e.x + "," + e.y); });
    // Undesirable alternatives in presence of soundness
    listenEvent(EventType.Mouse, function (e) {
        return console.log(e.x + "," + e.y);
    });
    listenEvent(EventType.Mouse, (function (e) {
        return console.log(e.x + "," + e.y);
    }));
    // Still disallowed (clear error). Type safety enforced for wholly incompatible types
    // listenEvent(EventType.Mouse, (e: number) => console.log(e));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY3Rpb24gUGFyYW1ldGVyIEJpdmFyaWFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGdW5jdGlvbiBQYXJhbWV0ZXIgQml2YXJpYW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OzZCQU02QjtBQUM3QjtJQUNFLElBQUssU0FHSjtJQUhELFdBQUssU0FBUztRQUNaLDJDQUFLLENBQUE7UUFDTCxpREFBUSxDQUFBO0lBQ1YsQ0FBQyxFQUhJLFNBQVMsS0FBVCxTQUFTLFFBR2I7SUFhRCxxQkFBcUIsU0FBb0IsRUFBRSxPQUEyQjtRQUNwRSxTQUFTO0lBQ1gsQ0FBQztJQUVELGlDQUFpQztJQUNqQyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxVQUFDLENBQWEsSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7SUFFOUUsb0RBQW9EO0lBQ3BELFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFVBQUMsQ0FBUTtRQUNwQyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQWMsQ0FBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQWdCLENBQUUsQ0FBQyxDQUFDLENBQUM7SUFBeEQsQ0FBd0QsQ0FDekQsQ0FBQztJQUNGLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFzQixDQUFDLFVBQUMsQ0FBYTtRQUM5RCxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUE1QixDQUE0QixDQUFDLENBQUMsQ0FBQztJQUVqQyxxRkFBcUY7SUFDckYsK0RBQStEO0FBQ2pFLENBQUMifQ==