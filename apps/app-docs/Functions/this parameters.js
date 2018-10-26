"use strict";
/*Unfortunately, the type of this.suits[pickedSuit] is still any.
That’s because this comes from the function expression inside the
object literal. To fix this, you can provide an explicit this parameter.
this parameters are fake parameters that come first in the parameter
list of a function: */
function ThisParameters() {
    var deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        // NOTE: The function now explicitly specifies that its callee must be of type Deck
        createCardPicker: function () {
            var _this = this;
            return function () {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };
    var cardPicker = deck.createCardPicker();
    var pickedCard = cardPicker();
    console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
}
/*Now TypeScript knows that createCardPicker expects to be called on a
Deck object. That means that this is of type Deck now, not any, so
--noImplicitThis will not cause any errors. */
ThisParameters();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcyBwYXJhbWV0ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGhpcyBwYXJhbWV0ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztzQkFJc0I7QUFDdEI7SUFVRSxJQUFJLElBQUksR0FBUztRQUNmLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQztRQUNoRCxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUNoQixtRkFBbUY7UUFDbkYsZ0JBQWdCLEVBQUU7WUFBQSxpQkFPakI7WUFOQyxPQUFPO2dCQUNMLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFFN0MsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEdBQUcsRUFBRSxFQUFFLENBQUM7WUFDakUsQ0FBQyxDQUFDO1FBQ0osQ0FBQztLQUNGLENBQUM7SUFDRixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUN6QyxJQUFJLFVBQVUsR0FBRyxVQUFVLEVBQUUsQ0FBQztJQUU5QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsSUFBSSxHQUFHLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckUsQ0FBQztBQUNEOzs4Q0FFOEM7QUFDOUMsY0FBYyxFQUFFLENBQUMifQ==