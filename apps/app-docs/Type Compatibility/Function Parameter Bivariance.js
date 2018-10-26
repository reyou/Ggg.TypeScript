"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY3Rpb24gUGFyYW1ldGVyIEJpdmFyaWFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGdW5jdGlvbiBQYXJhbWV0ZXIgQml2YXJpYW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs2QkFNNkI7QUFDN0I7SUFDRSxJQUFLLFNBR0o7SUFIRCxXQUFLLFNBQVM7UUFDWiwyQ0FBSyxDQUFBO1FBQ0wsaURBQVEsQ0FBQTtJQUNWLENBQUMsRUFISSxTQUFTLEtBQVQsU0FBUyxRQUdiO0lBYUQscUJBQXFCLFNBQW9CLEVBQUUsT0FBMkI7UUFDcEUsU0FBUztJQUNYLENBQUM7SUFFRCxpQ0FBaUM7SUFDakMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsVUFBQyxDQUFhLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO0lBRTlFLG9EQUFvRDtJQUNwRCxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxVQUFDLENBQVE7UUFDcEMsT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFjLENBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFnQixDQUFFLENBQUMsQ0FBQyxDQUFDO0lBQXhELENBQXdELENBQ3pELENBQUM7SUFDRixXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBc0IsQ0FBQyxVQUFDLENBQWE7UUFDOUQsT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFBNUIsQ0FBNEIsQ0FBQyxDQUFDLENBQUM7SUFFakMscUZBQXFGO0lBQ3JGLCtEQUErRDtBQUNqRSxDQUFDIn0=