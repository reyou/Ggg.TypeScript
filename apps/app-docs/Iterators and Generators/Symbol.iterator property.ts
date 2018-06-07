/*Another distinction is that for..in operates on any object; 
it serves as a way to inspect properties on this object. for..of on 
the other hand, is mainly interested in values of iterable objects. 
Built-in objects like Map and Set implement Symbol.iterator property 
allowing access to stored values. */
function SymbolIterator() {
    let pets = new Set(["Cat", "Dog", "Hamster"]);
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