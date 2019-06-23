"use strict";
/*
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
* https://stackoverflow.com/questions/53028291/element-implicitly-has-an-any-type-because-type-setstring-has-no-index-sig
*/
/*Another distinction is that for..in operates on any object;
it serves as a way to inspect properties on this object. for..of on
the other hand, is mainly interested in values of iterable objects.
Built-in objects like Map and Set implement Symbol.iterator property
allowing access to stored values. */
function SymbolIterator() {
    // let pets = new Set(["Cat", "Dog", "Hamster"]);
    let pets = new Set([
        "Cat",
        "Dog",
        "Hamster"
    ]);
    pets["species"] = "mammals";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3ltYm9sLml0ZXJhdG9yIHByb3BlcnR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svSXRlcmF0b3JzIGFuZCBHZW5lcmF0b3JzL1N5bWJvbC5pdGVyYXRvciBwcm9wZXJ0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7OztFQUdFO0FBQ0Y7Ozs7b0NBSW9DO0FBQ3BDLFNBQVMsY0FBYztJQUNyQixpREFBaUQ7SUFDakQsSUFBSSxJQUFJLEdBQXVDLElBQUksR0FBRyxDQUFDO1FBQ3JELEtBQUs7UUFDTCxLQUFLO1FBQ0wsU0FBUztLQUNWLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUM7SUFFNUIsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVk7S0FDL0I7SUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7SUFDbEQsNkNBQTZDO0lBQzdDLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQywwQkFBMEI7S0FDN0M7QUFDSCxDQUFDO0FBRUQsY0FBYyxFQUFFLENBQUMifQ==