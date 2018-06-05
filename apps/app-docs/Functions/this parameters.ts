/*Unfortunately, the type of this.suits[pickedSuit] is still any. 
That’s because this comes from the function expression inside the 
object literal. To fix this, you can provide an explicit this parameter. 
this parameters are fake parameters that come first in the parameter 
list of a function: */
function ThisParameters() {
  interface Card {
    suit: string;
    card: number;
  }
  interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
  }
  let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function(this: Deck) {
      return () => {
        let pickedCard = Math.floor(Math.random() * 52);
        let pickedSuit = Math.floor(pickedCard / 13);

        return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
      };
    }
  };
  let cardPicker = deck.createCardPicker();
  let pickedCard = cardPicker();

  console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
}
/*Now TypeScript knows that createCardPicker expects to be called on a 
Deck object. That means that this is of type Deck now, not any, so 
--noImplicitThis will not cause any errors. */
ThisParameters();
