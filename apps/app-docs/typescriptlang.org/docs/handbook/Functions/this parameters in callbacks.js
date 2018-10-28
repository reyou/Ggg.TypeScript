"use strict";
/*You can also run into errors with this in callbacks, when
you pass functions to a library that will later call them.
Because the library that calls your callback will call it like a normal
function, this will be undefined. With some work you can use this parameters
to prevent errors with callbacks too. First, the library author needs to annotate
the callback type with this: */
function ThisParametersInCallbacks() {
    class Event {
    }
    class Handler {
        onClickBad(e) {
            // oops, used this here. using this callback would crash at runtime
            this.info = e.message;
        }
    }
    let h = new Handler();
    // uiElement.addClickListener(h.onClickBad); // error!
}
/*With this annotated, you make it explicit that onClickBad must be
called on an instance of Handler. Then TypeScript will detect that
addClickListener requires a function that has this: void. To fix the error,
change the type of this: */
/*this: void means that addClickListener expects onclick to be a
function that does not require a this type. Second, annotate your
calling code with this: */
function ThisParametersInCallbacksFixed() {
    class Event {
    }
    class Handler {
        onClickGood(e) {
            // can't use this here because it's of type void!
            console.log("clicked!");
        }
    }
    let h = new Handler();
    // uiElement.addClickListener(h.onClickGood);
}
/*Because onClickGood specifies its this type as void, it is legal
to pass to addClickListener. Of course, this also means that it can’t use
this.info. If you want both then you’ll have to use an arrow function: */
function ThisParametersInCallbacksFixed2() {
    class Event {
    }
    class Handler {
        constructor() {
            this.onClickGood = (e) => {
                this.info = e.message;
            };
        }
    }
    let h = new Handler();
    // uiElement.addClickListener(h.onClickGood);
}
/*This works because arrow functions don’t capture this, so you
can always pass them to something that expects this: void. The downside is
that one arrow function is created per object of type Handler. Methods,
on the other hand, are only created once and attached to Handler’s prototype.
They are shared between all objects of type Handler. */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcyBwYXJhbWV0ZXJzIGluIGNhbGxiYWNrcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRoaXMgcGFyYW1ldGVycyBpbiBjYWxsYmFja3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OzsrQkFLK0I7QUFDL0IsU0FBUyx5QkFBeUI7SUFDaEMsTUFBTSxLQUFLO0tBRVY7SUFJRCxNQUFNLE9BQU87UUFFWCxVQUFVLENBQWdCLENBQVE7WUFDaEMsbUVBQW1FO1lBQ25FLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO0tBQ0Y7SUFDRCxJQUFJLENBQUMsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQ3RCLHNEQUFzRDtBQUN4RCxDQUFDO0FBQ0Q7OzsyQkFHMkI7QUFDM0I7OzBCQUUwQjtBQUMxQixTQUFTLDhCQUE4QjtJQUNyQyxNQUFNLEtBQUs7S0FFVjtJQUlELE1BQU0sT0FBTztRQUVYLFdBQVcsQ0FBYSxDQUFRO1lBQzlCLGlEQUFpRDtZQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFCLENBQUM7S0FDRjtJQUNELElBQUksQ0FBQyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFDdEIsNkNBQTZDO0FBQy9DLENBQUM7QUFDRDs7eUVBRXlFO0FBQ3pFLFNBQVMsK0JBQStCO0lBQ3RDLE1BQU0sS0FBSztLQUVWO0lBSUQsTUFBTSxPQUFPO1FBQWI7WUFFRSxnQkFBVyxHQUFHLENBQUMsQ0FBUSxFQUFFLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUN4QixDQUFDLENBQUM7UUFDSixDQUFDO0tBQUE7SUFDRCxJQUFJLENBQUMsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQ3RCLDZDQUE2QztBQUMvQyxDQUFDO0FBQ0Q7Ozs7dURBSXVEIn0=