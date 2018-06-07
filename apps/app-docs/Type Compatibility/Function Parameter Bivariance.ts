/*When comparing the types of function parameters, assignment succeeds 
if either the source parameter is assignable to the target parameter, 
or vice versa. This is unsound because a caller might end up being 
given a function that takes a more specialized type, but invokes 
the function with a less specialized type. In practice, this sort 
of error is rare, and allowing this enables many common JavaScript 
patterns. A brief example: */
function FunctionParameterBivariance() {
  enum EventType {
    Mouse,
    Keyboard
  }

  interface Event {
    timestamp: number;
  }
  interface MouseEvent extends Event {
    x: number;
    y: number;
  }
  interface KeyEvent extends Event {
    keyCode: number;
  }

  function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    /* ... */
  }

  // Unsound, but useful and common
  listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + "," + e.y));

  // Undesirable alternatives in presence of soundness
  listenEvent(EventType.Mouse, (e: Event) =>
    console.log((<MouseEvent>e).x + "," + (<MouseEvent>e).y)
  );
  listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) =>
    console.log(e.x + "," + e.y)));

  // Still disallowed (clear error). Type safety enforced for wholly incompatible types
  // listenEvent(EventType.Mouse, (e: number) => console.log(e));
}
