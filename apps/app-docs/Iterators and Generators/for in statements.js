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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yIGluIHN0YXRlbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb3IgaW4gc3RhdGVtZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7eURBSXlEO0FBQ3pEO0lBQ0ksSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXJCLEtBQUssSUFBSSxHQUFDLElBQUksSUFBSSxFQUFFO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUI7S0FDcEM7O1FBRUQsS0FBYyxJQUFBLFNBQUEsU0FBQSxJQUFJLENBQUEsMEJBQUE7WUFBYixJQUFJLEdBQUMsaUJBQUE7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCO1NBQ25DOzs7Ozs7Ozs7O0FBRUwsQ0FBQztBQUNELGVBQWUsRUFBRSxDQUFDO0FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0NBQStDLENBQUMsQ0FBQztBQUM3RDtJQUNJLElBQUksSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUV2QyxLQUFLLElBQUksR0FBQyxJQUFJLElBQUksRUFBRTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUMsQ0FBQyxDQUFDO0tBQ2xCOztRQUVELEtBQWMsSUFBQSxTQUFBLFNBQUEsSUFBSSxDQUFBLDBCQUFBO1lBQWIsSUFBSSxHQUFDLGlCQUFBO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsQ0FBQztTQUNsQjs7Ozs7Ozs7OztBQUVMLENBQUM7QUFDRCxnQkFBZ0IsRUFBRSxDQUFDIn0=