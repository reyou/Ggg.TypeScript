"use strict";
/*Each enum member has a value associated with it which
can be either constant or computed. An enum member is considered constant if: */
function ComputedEnums() {
    // It is the first member in the enum and it has no initializer, in which case it’s assigned the value 0:
    // E.X is constant:
    var E;
    (function (E) {
        E[E["X"] = 0] = "X";
    })(E || (E = {}));
    /*It does not have an initializer and the preceding enum member was a numeric
    constant. In this case the value of the current enum member will be the value
    of the preceding enum member plus one. */
    // All enum members in 'E1' and 'E2' are constant.
    var E1;
    (function (E1) {
        E1[E1["X"] = 0] = "X";
        E1[E1["Y"] = 1] = "Y";
        E1[E1["Z"] = 2] = "Z";
    })(E1 || (E1 = {}));
    var E2;
    (function (E2) {
        E2[E2["A"] = 1] = "A";
        E2[E2["B"] = 2] = "B";
        E2[E2["C"] = 3] = "C";
    })(E2 || (E2 = {}));
    console.log(E.X);
    console.log(E1.Y);
    console.log(E2.C);
}
ComputedEnums();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcHV0ZWQgYW5kIGNvbnN0YW50IG1lbWJlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb21wdXRlZCBhbmQgY29uc3RhbnQgbWVtYmVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Z0ZBQ2dGO0FBQ2hGO0lBQ0UseUdBQXlHO0lBQ3pHLG1CQUFtQjtJQUNuQixJQUFLLENBRUo7SUFGRCxXQUFLLENBQUM7UUFDSixtQkFBQyxDQUFBO0lBQ0gsQ0FBQyxFQUZJLENBQUMsS0FBRCxDQUFDLFFBRUw7SUFDRDs7NkNBRXlDO0lBQ3pDLGtEQUFrRDtJQUNsRCxJQUFLLEVBSUo7SUFKRCxXQUFLLEVBQUU7UUFDTCxxQkFBQyxDQUFBO1FBQ0QscUJBQUMsQ0FBQTtRQUNELHFCQUFDLENBQUE7SUFDSCxDQUFDLEVBSkksRUFBRSxLQUFGLEVBQUUsUUFJTjtJQUVELElBQUssRUFJSjtJQUpELFdBQUssRUFBRTtRQUNMLHFCQUFLLENBQUE7UUFDTCxxQkFBQyxDQUFBO1FBQ0QscUJBQUMsQ0FBQTtJQUNILENBQUMsRUFKSSxFQUFFLEtBQUYsRUFBRSxRQUlOO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEIsQ0FBQztBQUNELGFBQWEsRUFBRSxDQUFDIn0=