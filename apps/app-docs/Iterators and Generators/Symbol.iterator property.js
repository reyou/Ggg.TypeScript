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
/*Another distinction is that for..in operates on any object;
it serves as a way to inspect properties on this object. for..of on
the other hand, is mainly interested in values of iterable objects.
Built-in objects like Map and Set implement Symbol.iterator property
allowing access to stored values. */
function SymbolIterator() {
    var pets = new Set(["Cat", "Dog", "Hamster"]);
    pets["species"] = "mammals";
    for (var pet in pets) {
        console.log(pet); // "species"
    }
    console.log("\n==============================\n");
    try {
        // "downlevelIteration": true (tsconfig.json)
        for (var pets_1 = __values(pets), pets_1_1 = pets_1.next(); !pets_1_1.done; pets_1_1 = pets_1.next()) {
            var pet = pets_1_1.value;
            console.log(pet); // "Cat", "Dog", "Hamster"
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (pets_1_1 && !pets_1_1.done && (_a = pets_1.return)) _a.call(pets_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var e_1, _a;
}
SymbolIterator();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3ltYm9sLml0ZXJhdG9yIHByb3BlcnR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3ltYm9sLml0ZXJhdG9yIHByb3BlcnR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7b0NBSW9DO0FBQ3BDO0lBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUU1QixLQUFLLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWTtLQUMvQjtJQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQzs7UUFDbEQsNkNBQTZDO1FBQzdDLEtBQWdCLElBQUEsU0FBQSxTQUFBLElBQUksQ0FBQSwwQkFBQTtZQUFmLElBQUksR0FBRyxpQkFBQTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQywwQkFBMEI7U0FDN0M7Ozs7Ozs7Ozs7QUFDSCxDQUFDO0FBRUQsY0FBYyxFQUFFLENBQUMifQ==