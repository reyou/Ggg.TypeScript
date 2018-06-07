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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcyBhbmQgYXJyb3cgZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGhpcyBhbmQgYXJyb3cgZnVuY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0UsSUFBSSxJQUFJLEdBQUc7UUFDVCxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUM7UUFDaEQsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDaEIsZ0JBQWdCLEVBQUU7WUFDaEIsTUFBTSxDQUFDO2dCQUNMLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDN0MsTUFBTSxDQUFDO29CQUNMLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztvQkFDNUIsSUFBSSxFQUFFLFVBQVUsR0FBRyxFQUFFO2lCQUN0QixDQUFDO1lBQ0osQ0FBQyxDQUFDO1FBQ0osQ0FBQztLQUNGLENBQUM7SUFDRixJQUFJLENBQUM7UUFDSCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN6QyxJQUFJLFVBQVUsR0FBRyxVQUFVLEVBQUUsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsSUFBSSxHQUFHLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7QUFDSCxDQUFDO0FBQ0Q7Ozs7Ozs4Q0FNOEM7QUFDOUMsWUFBWSxFQUFFLENBQUMifQ==