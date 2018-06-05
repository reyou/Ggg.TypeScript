function ThisAndArrow() {
    let deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            return function () {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);
                return {
                    suit: this.suits[pickedSuit],
                    card: pickedCard % 13
                };
            };
        }
    };
    try {
        let cardPicker = deck.createCardPicker();
        let pickedCard = cardPicker();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcyBhbmQgYXJyb3cgZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGhpcyBhbmQgYXJyb3cgZnVuY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0UsSUFBSSxJQUFJLEdBQUc7UUFDVCxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUM7UUFDaEQsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDaEIsZ0JBQWdCLEVBQUU7WUFDaEIsT0FBTztnQkFDTCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQzdDLE9BQU87b0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO29CQUM1QixJQUFJLEVBQUUsVUFBVSxHQUFHLEVBQUU7aUJBQ3RCLENBQUM7WUFDSixDQUFDLENBQUM7UUFDSixDQUFDO0tBQ0YsQ0FBQztJQUNGLElBQUk7UUFDRixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN6QyxJQUFJLFVBQVUsR0FBRyxVQUFVLEVBQUUsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsSUFBSSxHQUFHLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDcEU7SUFBQyxPQUFPLEVBQUUsRUFBRTtRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDakI7QUFDSCxDQUFDO0FBQ0Q7Ozs7Ozs4Q0FNOEM7QUFDOUMsWUFBWSxFQUFFLENBQUMifQ==