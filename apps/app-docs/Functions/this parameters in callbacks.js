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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcyBwYXJhbWV0ZXJzIGluIGNhbGxiYWNrcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRoaXMgcGFyYW1ldGVycyBpbiBjYWxsYmFja3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OytCQUsrQjtBQUMvQjtJQUNFO0tBRUM7SUFJRDtRQUVFLFVBQVUsQ0FBZ0IsQ0FBUTtZQUNoQyxtRUFBbUU7WUFDbkUsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7S0FDRjtJQUNELElBQUksQ0FBQyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFDdEIsc0RBQXNEO0FBQ3hELENBQUM7QUFDRDs7OzJCQUcyQjtBQUMzQjs7MEJBRTBCO0FBQzFCO0lBQ0U7S0FFQztJQUlEO1FBRUUsV0FBVyxDQUFhLENBQVE7WUFDOUIsaURBQWlEO1lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUIsQ0FBQztLQUNGO0lBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUN0Qiw2Q0FBNkM7QUFDL0MsQ0FBQztBQUNEOzt5RUFFeUU7QUFDekU7SUFDRTtLQUVDO0lBSUQ7UUFBQTtZQUVFLGdCQUFXLEdBQUcsQ0FBQyxDQUFRLEVBQUUsRUFBRTtnQkFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ3hCLENBQUMsQ0FBQztRQUNKLENBQUM7S0FBQTtJQUNELElBQUksQ0FBQyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFDdEIsNkNBQTZDO0FBQy9DLENBQUM7QUFDRDs7Ozt1REFJdUQifQ==