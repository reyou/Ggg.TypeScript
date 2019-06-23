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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcyBwYXJhbWV0ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svRnVuY3Rpb25zL3RoaXMgcGFyYW1ldGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7c0JBSXNCO0FBQ3RCLFNBQVMsY0FBYztJQVVyQixJQUFJLElBQUksR0FBUztRQUNmLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQztRQUNoRCxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUNoQixtRkFBbUY7UUFDbkYsZ0JBQWdCLEVBQUU7WUFDaEIsT0FBTyxHQUFHLEVBQUU7Z0JBQ1YsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ2hELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUU3QyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsR0FBRyxFQUFFLEVBQUUsQ0FBQztZQUNqRSxDQUFDLENBQUM7UUFDSixDQUFDO0tBQ0YsQ0FBQztJQUNGLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3pDLElBQUksVUFBVSxHQUFHLFVBQVUsRUFBRSxDQUFDO0lBRTlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNyRSxDQUFDO0FBQ0Q7OzhDQUU4QztBQUM5QyxjQUFjLEVBQUUsQ0FBQyJ9