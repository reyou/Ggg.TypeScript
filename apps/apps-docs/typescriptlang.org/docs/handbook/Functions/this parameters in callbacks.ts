/*You can also run into errors with this in callbacks, when 
you pass functions to a library that will later call them. 
Because the library that calls your callback will call it like a normal 
function, this will be undefined. With some work you can use this parameters 
to prevent errors with callbacks too. First, the library author needs to annotate 
the callback type with this: */
function ThisParametersInCallbacks() {
  class Event {
    message: string | undefined;
  }
  interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
  }
  class Handler {
    info: string | undefined;
    onClickBad(this: Handler, e: Event) {
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
    message: string | undefined;
  }
  interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
  }
  class Handler {
    info: string | undefined;
    onClickGood(this: void, e: Event) {
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
    message: string | undefined;
  }
  interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
  }
  class Handler {
    info: string | undefined;
    onClickGood = (e: Event) => {
      this.info = e.message;
    };
  }
  let h = new Handler();
  // uiElement.addClickListener(h.onClickGood);
}
/*This works because arrow functions don’t capture this, so you 
can always pass them to something that expects this: void. The downside is 
that one arrow function is created per object of type Handler. Methods, 
on the other hand, are only created once and attached to Handler’s prototype. 
They are shared between all objects of type Handler. */
