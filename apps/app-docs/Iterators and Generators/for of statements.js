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
/*for..of loops over an iterable object, invoking the Symbol.iterator
property on the object. Here is a simple for..of loop on an array: */
function ForOfStatements() {
    var someArray = [1, "string", false];
    try {
        for (var someArray_1 = __values(someArray), someArray_1_1 = someArray_1.next(); !someArray_1_1.done; someArray_1_1 = someArray_1.next()) {
            var entry = someArray_1_1.value;
            console.log(entry); // 1, "string", false
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (someArray_1_1 && !someArray_1_1.done && (_a = someArray_1.return)) _a.call(someArray_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var e_1, _a;
}
ForOfStatements();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yIG9mIHN0YXRlbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb3Igb2Ygc3RhdGVtZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7cUVBQ3FFO0FBQ3JFO0lBQ0ksSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDOztRQUVyQyxHQUFHLENBQUMsQ0FBYyxJQUFBLGNBQUEsU0FBQSxTQUFTLENBQUEsb0NBQUE7WUFBdEIsSUFBSSxLQUFLLHNCQUFBO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtTQUM1Qzs7Ozs7Ozs7OztBQUVMLENBQUM7QUFFRCxlQUFlLEVBQUUsQ0FBQyJ9