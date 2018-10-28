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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY3Rpb24gUGFyYW1ldGVyIEJpdmFyaWFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9UeXBlIENvbXBhdGliaWxpdHkvRnVuY3Rpb24gUGFyYW1ldGVyIEJpdmFyaWFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7NkJBTTZCO0FBQzdCLFNBQVMsMkJBQTJCO0lBQ2xDLElBQUssU0FHSjtJQUhELFdBQUssU0FBUztRQUNaLDJDQUFLLENBQUE7UUFDTCxpREFBUSxDQUFBO0lBQ1YsQ0FBQyxFQUhJLFNBQVMsS0FBVCxTQUFTLFFBR2I7SUFhRCxTQUFTLFdBQVcsQ0FBQyxTQUFvQixFQUFFLE9BQTJCO1FBQ3BFLFNBQVM7SUFDWCxDQUFDO0lBRUQsaUNBQWlDO0lBQ2pDLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBUSxFQUFFLEVBQUU7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUMsQ0FBQyxDQUFDO0lBRUgsb0RBQW9EO0lBQ3BELFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBUSxFQUFFLEVBQUUsQ0FDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBYyxDQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBZ0IsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUN6RCxDQUFDO0lBQ0YsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQXNCLENBQy9DLENBQUMsQ0FBQyxDQUFhLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ2xELENBQUMsQ0FBQztJQUVILHFGQUFxRjtJQUNyRiwrREFBK0Q7QUFDakUsQ0FBQyJ9