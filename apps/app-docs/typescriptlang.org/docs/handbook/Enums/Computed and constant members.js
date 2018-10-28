"use strict";
/*Each enum member has a value associated with it which
can be either constant or computed. An enum member is considered constant if: */
function ComputedEnums() {
    // It is the first member in the enum and it has no initializer, in which case it’s assigned the value 0:
    // E.X is constant:
    let E;
    (function (E) {
        E[E["X"] = 0] = "X";
    })(E || (E = {}));
    /*It does not have an initializer and the preceding enum member was a numeric
    constant. In this case the value of the current enum member will be the value
    of the preceding enum member plus one. */
    // All enum members in 'E1' and 'E2' are constant.
    let E1;
    (function (E1) {
        E1[E1["X"] = 0] = "X";
        E1[E1["Y"] = 1] = "Y";
        E1[E1["Z"] = 2] = "Z";
    })(E1 || (E1 = {}));
    let E2;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcHV0ZWQgYW5kIGNvbnN0YW50IG1lbWJlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb21wdXRlZCBhbmQgY29uc3RhbnQgbWVtYmVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Z0ZBQ2dGO0FBQ2hGLFNBQVMsYUFBYTtJQUNwQix5R0FBeUc7SUFDekcsbUJBQW1CO0lBQ25CLElBQUssQ0FFSjtJQUZELFdBQUssQ0FBQztRQUNKLG1CQUFDLENBQUE7SUFDSCxDQUFDLEVBRkksQ0FBQyxLQUFELENBQUMsUUFFTDtJQUNEOzs2Q0FFeUM7SUFDekMsa0RBQWtEO0lBQ2xELElBQUssRUFJSjtJQUpELFdBQUssRUFBRTtRQUNMLHFCQUFDLENBQUE7UUFDRCxxQkFBQyxDQUFBO1FBQ0QscUJBQUMsQ0FBQTtJQUNILENBQUMsRUFKSSxFQUFFLEtBQUYsRUFBRSxRQUlOO0lBRUQsSUFBSyxFQUlKO0lBSkQsV0FBSyxFQUFFO1FBQ0wscUJBQUssQ0FBQTtRQUNMLHFCQUFDLENBQUE7UUFDRCxxQkFBQyxDQUFBO0lBQ0gsQ0FBQyxFQUpJLEVBQUUsS0FBRixFQUFFLFFBSU47SUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQixDQUFDO0FBQ0QsYUFBYSxFQUFFLENBQUMifQ==