"use strict";
/*You can also run into errors with this in callbacks, when
you pass functions to a library that will later call them.
Because the library that calls your callback will call it like a normal
function, this will be undefined. With some work you can use this parameters
to prevent errors with callbacks too. First, the library author needs to annotate
the callback type with this: */
function ThisParametersInCallbacks() {
    var Event = /** @class */ (function () {
        function Event() {
        }
        return Event;
    }());
    var Handler = /** @class */ (function () {
        function Handler() {
        }
        Handler.prototype.onClickBad = function (e) {
            // oops, used this here. using this callback would crash at runtime
            this.info = e.message;
        };
        return Handler;
    }());
    var h = new Handler();
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
    var Event = /** @class */ (function () {
        function Event() {
        }
        return Event;
    }());
    var Handler = /** @class */ (function () {
        function Handler() {
        }
        Handler.prototype.onClickGood = function (e) {
            // can't use this here because it's of type void!
            console.log("clicked!");
        };
        return Handler;
    }());
    var h = new Handler();
    // uiElement.addClickListener(h.onClickGood);
}
/*Because onClickGood specifies its this type as void, it is legal
to pass to addClickListener. Of course, this also means that it can’t use
this.info. If you want both then you’ll have to use an arrow function: */
function ThisParametersInCallbacksFixed2() {
    var Event = /** @class */ (function () {
        function Event() {
        }
        return Event;
    }());
    var Handler = /** @class */ (function () {
        function Handler() {
            var _this = this;
            this.onClickGood = function (e) {
                _this.info = e.message;
            };
        }
        return Handler;
    }());
    var h = new Handler();
    // uiElement.addClickListener(h.onClickGood);
}
/*This works because arrow functions don’t capture this, so you
can always pass them to something that expects this: void. The downside is
that one arrow function is created per object of type Handler. Methods,
on the other hand, are only created once and attached to Handler’s prototype.
They are shared between all objects of type Handler. */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcyBwYXJhbWV0ZXJzIGluIGNhbGxiYWNrcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRoaXMgcGFyYW1ldGVycyBpbiBjYWxsYmFja3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OzsrQkFLK0I7QUFDL0I7SUFDRTtRQUFBO1FBRUEsQ0FBQztRQUFELFlBQUM7SUFBRCxDQUFDLEFBRkQsSUFFQztJQUlEO1FBQUE7UUFNQSxDQUFDO1FBSkMsNEJBQVUsR0FBVixVQUEwQixDQUFRO1lBQ2hDLG1FQUFtRTtZQUNuRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQztRQUNILGNBQUM7SUFBRCxDQUFDLEFBTkQsSUFNQztJQUNELElBQUksQ0FBQyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFDdEIsc0RBQXNEO0FBQ3hELENBQUM7QUFDRDs7OzJCQUcyQjtBQUMzQjs7MEJBRTBCO0FBQzFCO0lBQ0U7UUFBQTtRQUVBLENBQUM7UUFBRCxZQUFDO0lBQUQsQ0FBQyxBQUZELElBRUM7SUFJRDtRQUFBO1FBTUEsQ0FBQztRQUpDLDZCQUFXLEdBQVgsVUFBd0IsQ0FBUTtZQUM5QixpREFBaUQ7WUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBQ0gsY0FBQztJQUFELENBQUMsQUFORCxJQU1DO0lBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUN0Qiw2Q0FBNkM7QUFDL0MsQ0FBQztBQUNEOzt5RUFFeUU7QUFDekU7SUFDRTtRQUFBO1FBRUEsQ0FBQztRQUFELFlBQUM7SUFBRCxDQUFDLEFBRkQsSUFFQztJQUlEO1FBQUE7WUFBQSxpQkFLQztZQUhDLGdCQUFXLEdBQUcsVUFBQyxDQUFRO2dCQUNyQixLQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDeEIsQ0FBQyxDQUFDO1FBQ0osQ0FBQztRQUFELGNBQUM7SUFBRCxDQUFDLEFBTEQsSUFLQztJQUNELElBQUksQ0FBQyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFDdEIsNkNBQTZDO0FBQy9DLENBQUM7QUFDRDs7Ozt1REFJdUQifQ==