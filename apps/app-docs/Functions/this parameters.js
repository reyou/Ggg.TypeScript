"use strict";
/*Unfortunately, the type of this.suits[pickedSuit] is still any.
That’s because this comes from the function expression inside the
object literal. To fix this, you can provide an explicit this parameter.
this parameters are fake parameters that come first in the parameter
list of a function: */
function ThisParameters() {
    let deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        // NOTE: The function now explicitly specifies that its callee must be of type Deck
        createCardPicker: function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcyBwYXJhbWV0ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGhpcyBwYXJhbWV0ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztzQkFJc0I7QUFDdEIsU0FBUyxjQUFjO0lBVXJCLElBQUksSUFBSSxHQUFTO1FBQ2YsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDO1FBQ2hELEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ2hCLG1GQUFtRjtRQUNuRixnQkFBZ0IsRUFBRTtZQUNoQixPQUFPLEdBQUcsRUFBRTtnQkFDVixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBRTdDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxHQUFHLEVBQUUsRUFBRSxDQUFDO1lBQ2pFLENBQUMsQ0FBQztRQUNKLENBQUM7S0FDRixDQUFDO0lBQ0YsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDekMsSUFBSSxVQUFVLEdBQUcsVUFBVSxFQUFFLENBQUM7SUFFOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLElBQUksR0FBRyxNQUFNLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JFLENBQUM7QUFDRDs7OENBRThDO0FBQzlDLGNBQWMsRUFBRSxDQUFDIn0=