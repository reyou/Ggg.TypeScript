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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcyBwYXJhbWV0ZXJzIGluIGNhbGxiYWNrcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3R5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL0Z1bmN0aW9ucy90aGlzIHBhcmFtZXRlcnMgaW4gY2FsbGJhY2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7K0JBSytCO0FBQy9CLFNBQVMseUJBQXlCO0lBQ2hDLE1BQU0sS0FBSztLQUVWO0lBSUQsTUFBTSxPQUFPO1FBRVgsVUFBVSxDQUFnQixDQUFRO1lBQ2hDLG1FQUFtRTtZQUNuRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQztLQUNGO0lBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUN0QixzREFBc0Q7QUFDeEQsQ0FBQztBQUNEOzs7MkJBRzJCO0FBQzNCOzswQkFFMEI7QUFDMUIsU0FBUyw4QkFBOEI7SUFDckMsTUFBTSxLQUFLO0tBRVY7SUFJRCxNQUFNLE9BQU87UUFFWCxXQUFXLENBQWEsQ0FBUTtZQUM5QixpREFBaUQ7WUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxQixDQUFDO0tBQ0Y7SUFDRCxJQUFJLENBQUMsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQ3RCLDZDQUE2QztBQUMvQyxDQUFDO0FBQ0Q7O3lFQUV5RTtBQUN6RSxTQUFTLCtCQUErQjtJQUN0QyxNQUFNLEtBQUs7S0FFVjtJQUlELE1BQU0sT0FBTztRQUFiO1lBRUUsZ0JBQVcsR0FBRyxDQUFDLENBQVEsRUFBRSxFQUFFO2dCQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDeEIsQ0FBQyxDQUFDO1FBQ0osQ0FBQztLQUFBO0lBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUN0Qiw2Q0FBNkM7QUFDL0MsQ0FBQztBQUNEOzs7O3VEQUl1RCJ9