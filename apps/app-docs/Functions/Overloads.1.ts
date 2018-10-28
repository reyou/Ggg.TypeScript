/*The answer is to supply multiple function types for the same 
function as a list of overloads. This list is what the compiler 
will use to resolve function calls. Let’s create a list of 
overloads that describe what our pickCard accepts and what 
it returns. */
function FunctionOverloadsFixed() {
  let suits = ["hearts", "spades", "clubs", "diamonds"];
  function pickCard(x: { suit: string; card: number }[]): number;
  function pickCard(x: number): { suit: string; card: number };
  function pickCard(x: number | { suit: string; card: number }[]): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
      let pickedCard = Math.floor(Math.random() * x.length);
      return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
      let pickedSuit = Math.floor(x / 13);
      return { suit: suits[pickedSuit], card: x % 13 };
    }
  }
  let myDeck = [
    { suit: "diamonds", card: 2 },
    { suit: "spades", card: 10 },
    { suit: "hearts", card: 4 }
  ];
  let pickedCard1 = myDeck[pickCard(myDeck)];
  console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

  let pickedCard2 = pickCard(15);
  console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
}
/*With this change, the overloads now give us type-checked calls to 
the pickCard function.
In order for the compiler to pick the correct typecheck, it follows a 
similar process to the underlying JavaScript. It looks at the overload list, 
and proceeding with the first overload attempts to call the function with the 
provided parameters. If it finds a match, it picks this overload as the correct overload. 
For this reason, it’s customary to order overloads from most specific to least specific.
Note that the function pickCard(x): any piece is not part of the overload list, 
so it only has two overloads: one that takes an object and one that takes a number. 
Calling pickCard with any other parameter types would cause an error. */
FunctionOverloadsFixed();
