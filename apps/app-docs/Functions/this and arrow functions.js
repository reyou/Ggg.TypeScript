"use strict";
function ThisAndArrow() {
    var deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            return function () {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                return {
                    suit: this.suits[pickedSuit],
                    card: pickedCard % 13
                };
            };
        }
    };
    try {
        var cardPicker = deck.createCardPicker();
        var pickedCard = cardPicker();
        console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
    }
    catch (ex) {
        console.log(ex);
    }
}
/*Notice that createCardPicker is a function that itself returns a function.
If we tried to run the example, we would get an error instead of the
expected alert box. This is because the this being used in the function
created by createCardPicker will be set to window instead of our deck object.
That’s because we call cardPicker() on its own. A top-level non-method
syntax call like this will use window for this. (Note: under strict mode,
this will be undefined rather than window). */
ThisAndArrow();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcyBhbmQgYXJyb3cgZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGhpcyBhbmQgYXJyb3cgZnVuY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUNFLElBQUksSUFBSSxHQUFHO1FBQ1QsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDO1FBQ2hELEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ2hCLGdCQUFnQixFQUFFO1lBQ2hCLE9BQU87Z0JBQ0wsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ2hELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUM3QyxPQUFPO29CQUNMLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztvQkFDNUIsSUFBSSxFQUFFLFVBQVUsR0FBRyxFQUFFO2lCQUN0QixDQUFDO1lBQ0osQ0FBQyxDQUFDO1FBQ0osQ0FBQztLQUNGLENBQUM7SUFDRixJQUFJO1FBQ0YsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDekMsSUFBSSxVQUFVLEdBQUcsVUFBVSxFQUFFLENBQUM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLElBQUksR0FBRyxNQUFNLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3BFO0lBQUMsT0FBTyxFQUFFLEVBQUU7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2pCO0FBQ0gsQ0FBQztBQUNEOzs7Ozs7OENBTThDO0FBQzlDLFlBQVksRUFBRSxDQUFDIn0=