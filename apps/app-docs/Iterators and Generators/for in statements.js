"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
/*Both for..of and for..in statements iterate over lists;
the values iterated on are different though, for..in returns a
list of keys on the object being iterated, whereas for..of returns a
list of values of the numeric properties of the object being iterated.
Here is an example that demonstrates this distinction: */
function ForInStatements() {
    var list = [4, 5, 6];
    for (var i_1 in list) {
        console.log(i_1); // "0", "1", "2",
    }
    try {
        for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
            var i_2 = list_1_1.value;
            console.log(i_2); // "4", "5", "6"
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var e_1, _a;
}
ForInStatements();
console.log("\n=========================================\n");
function ForInStatements2() {
    var list = ["hello", "mello", "cello"];
    for (var i_3 in list) {
        console.log(i_3);
    }
    try {
        for (var list_2 = __values(list), list_2_1 = list_2.next(); !list_2_1.done; list_2_1 = list_2.next()) {
            var i_4 = list_2_1.value;
            console.log(i_4);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (list_2_1 && !list_2_1.done && (_a = list_2.return)) _a.call(list_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    var e_2, _a;
}
ForInStatements2();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yIGluIHN0YXRlbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb3IgaW4gc3RhdGVtZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O3lEQUl5RDtBQUN6RDtJQUNJLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUVyQixLQUFLLElBQUksR0FBQyxJQUFJLElBQUksRUFBRTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCO0tBQ3BDOztRQUVELEtBQWMsSUFBQSxTQUFBLFNBQUEsSUFBSSxDQUFBLDBCQUFBO1lBQWIsSUFBSSxHQUFDLGlCQUFBO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQjtTQUNuQzs7Ozs7Ozs7OztBQUVMLENBQUM7QUFDRCxlQUFlLEVBQUUsQ0FBQztBQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7QUFDN0Q7SUFDSSxJQUFJLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFdkMsS0FBSyxJQUFJLEdBQUMsSUFBSSxJQUFJLEVBQUU7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsQ0FBQztLQUNsQjs7UUFFRCxLQUFjLElBQUEsU0FBQSxTQUFBLElBQUksQ0FBQSwwQkFBQTtZQUFiLElBQUksR0FBQyxpQkFBQTtZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBQyxDQUFDLENBQUM7U0FDbEI7Ozs7Ozs7Ozs7QUFFTCxDQUFDO0FBQ0QsZ0JBQWdCLEVBQUUsQ0FBQyJ9