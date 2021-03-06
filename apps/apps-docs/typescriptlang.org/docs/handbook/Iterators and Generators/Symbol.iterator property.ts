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
  let pets: Set<string> & { species?: string } = new Set([
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
