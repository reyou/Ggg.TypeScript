/*JavaScript is inherently a very dynamic language. It’s not 
uncommon for a single JavaScript function to return different 
types of objects based on the shape of the arguments passed in. */
function FunctionOverloads() {
  let suits = ["hearts", "spades", "clubs", "diamonds"];
  /*Here the pickCard function will return two different things based 
  on what the user has passed in. If the users passes in an object that 
  represents the deck, the function will pick the card. If the user picks 
  the card, we tell them which card they’ve picked. But how do we describe 
  this to the type system? */
  function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
      let pickedCard = Math.floor(Math.random() * x.length);
      return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
      let pickedSuit = Math.floor(x / 13);
      return {
        suit: suits[pickedSuit],
        card: x % 13
      };
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
FunctionOverloads();
