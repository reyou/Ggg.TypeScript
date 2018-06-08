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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcyBwYXJhbWV0ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGhpcyBwYXJhbWV0ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O3NCQUlzQjtBQUN0QjtJQVVFLElBQUksSUFBSSxHQUFTO1FBQ2YsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDO1FBQ2hELEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ2hCLG1GQUFtRjtRQUNuRixnQkFBZ0IsRUFBRTtZQUFBLGlCQU9qQjtZQU5DLE9BQU87Z0JBQ0wsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ2hELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUU3QyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsR0FBRyxFQUFFLEVBQUUsQ0FBQztZQUNqRSxDQUFDLENBQUM7UUFDSixDQUFDO0tBQ0YsQ0FBQztJQUNGLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3pDLElBQUksVUFBVSxHQUFHLFVBQVUsRUFBRSxDQUFDO0lBRTlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNyRSxDQUFDO0FBQ0Q7OzhDQUU4QztBQUM5QyxjQUFjLEVBQUUsQ0FBQyJ9