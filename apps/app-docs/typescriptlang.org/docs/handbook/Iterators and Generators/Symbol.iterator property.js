"use strict";
/*
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
*/
/*Another distinction is that for..in operates on any object;
it serves as a way to inspect properties on this object. for..of on
the other hand, is mainly interested in values of iterable objects.
Built-in objects like Map and Set implement Symbol.iterator property
allowing access to stored values. */
function SymbolIterator() {
    let pets = new Set(["Cat", "Dog", "Hamster"]);
    //pets["species"] = "mammals";
    for (let pet in pets) {
        console.log(pet); // "species"
    }
    console.log("\n==============================\n");
    // "downlevelIteration": true (tsconfig.json)
    for (let pet of pets) {
        console.log(pet); // "Cat", "Dog", "Hamster"
    }
}
SymbolIterator();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3ltYm9sLml0ZXJhdG9yIHByb3BlcnR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3ltYm9sLml0ZXJhdG9yIHByb3BlcnR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7RUFFRTtBQUNGOzs7O29DQUlvQztBQUNwQyxTQUFTLGNBQWM7SUFDckIsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsOEJBQThCO0lBRTlCLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZO0tBQy9CO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0lBQ2xELDZDQUE2QztJQUM3QyxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsMEJBQTBCO0tBQzdDO0FBQ0gsQ0FBQztBQUVELGNBQWMsRUFBRSxDQUFDIn0=