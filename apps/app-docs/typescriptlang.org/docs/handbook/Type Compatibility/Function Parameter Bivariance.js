"use strict";
/*When comparing the types of function parameters, assignment succeeds
if either the source parameter is assignable to the target parameter,
or vice versa. This is unsound because a caller might end up being
given a function that takes a more specialized type, but invokes
the function with a less specialized type. In practice, this sort
of error is rare, and allowing this enables many common JavaScript
patterns. A brief example: */
function FunctionParameterBivariance() {
    let EventType;
    (function (EventType) {
        EventType[EventType["Mouse"] = 0] = "Mouse";
        EventType[EventType["Keyboard"] = 1] = "Keyboard";
    })(EventType || (EventType = {}));
    function listenEvent(eventType, handler) {
        /* ... */
    }
    // Unsound, but useful and common
    listenEvent(EventType.Mouse, (e) => {
        console.log(e + "," + e);
    });
    // Undesirable alternatives in presence of soundness
    listenEvent(EventType.Mouse, (e) => console.log(e.x + "," + e.y));
    listenEvent(EventType.Mouse, (((e) => console.log(e.x + "," + e.y))));
    // Still disallowed (clear error). Type safety enforced for wholly incompatible types
    // listenEvent(EventType.Mouse, (e: number) => console.log(e));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY3Rpb24gUGFyYW1ldGVyIEJpdmFyaWFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGdW5jdGlvbiBQYXJhbWV0ZXIgQml2YXJpYW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs2QkFNNkI7QUFDN0IsU0FBUywyQkFBMkI7SUFDbEMsSUFBSyxTQUdKO0lBSEQsV0FBSyxTQUFTO1FBQ1osMkNBQUssQ0FBQTtRQUNMLGlEQUFRLENBQUE7SUFDVixDQUFDLEVBSEksU0FBUyxLQUFULFNBQVMsUUFHYjtJQWFELFNBQVMsV0FBVyxDQUFDLFNBQW9CLEVBQUUsT0FBMkI7UUFDcEUsU0FBUztJQUNYLENBQUM7SUFFRCxpQ0FBaUM7SUFDakMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFRLEVBQUUsRUFBRTtRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxvREFBb0Q7SUFDcEQsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFRLEVBQUUsRUFBRSxDQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFjLENBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFnQixDQUFFLENBQUMsQ0FBQyxDQUFDLENBQ3pELENBQUM7SUFDRixXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBc0IsQ0FDL0MsQ0FBQyxDQUFDLENBQWEsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDbEQsQ0FBQyxDQUFDO0lBRUgscUZBQXFGO0lBQ3JGLCtEQUErRDtBQUNqRSxDQUFDIn0=