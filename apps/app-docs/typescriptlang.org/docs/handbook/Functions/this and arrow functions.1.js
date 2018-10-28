"use strict";
/*We can fix this by making sure the function is bound to the correct
this before we return the function to be used later. This way,
regardless of how it’s later used, it will still be able to
see the original deck object. To do this, we change the function
expression to use the ECMAScript 6 arrow syntax.  */
/*Arrow functions capture the this where the function is created rather than
where it is invoked. */
// https://github.com/reyou/Ggg.TypeScript/wiki/TypeScript-Highlights
function ThisAndArrowFixed() {
    let deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
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
ThisAndArrowFixed();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcyBhbmQgYXJyb3cgZnVuY3Rpb25zLjEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aGlzIGFuZCBhcnJvdyBmdW5jdGlvbnMuMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7b0RBSW9EO0FBQ3BEO3VCQUN1QjtBQUN2QixxRUFBcUU7QUFDckUsU0FBUyxpQkFBaUI7SUFDeEIsSUFBSSxJQUFJLEdBQUc7UUFDVCxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUM7UUFDaEQsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDaEIsZ0JBQWdCLEVBQUU7WUFDaEIsMEZBQTBGO1lBQzFGLE9BQU8sR0FBRyxFQUFFO2dCQUNWLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDN0MsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEdBQUcsRUFBRSxFQUFFLENBQUM7WUFDakUsQ0FBQyxDQUFDO1FBQ0osQ0FBQztLQUNGLENBQUM7SUFFRixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUN6QyxJQUFJLFVBQVUsR0FBRyxVQUFVLEVBQUUsQ0FBQztJQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsSUFBSSxHQUFHLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckUsQ0FBQztBQUVELGlCQUFpQixFQUFFLENBQUMifQ==