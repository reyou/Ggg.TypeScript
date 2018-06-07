/*We can fix this by making sure the function is bound to the correct
this before we return the function to be used later. This way,
regardless of how it’s later used, it will still be able to
see the original deck object. To do this, we change the function
expression to use the ECMAScript 6 arrow syntax.  */
/*Arrow functions capture the this where the function is created rather than
where it is invoked. */
// https://github.com/reyou/Ggg.TypeScript/wiki/TypeScript-Highlights
function ThisAndArrowFixed() {
    var deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            var _this = this;
            // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
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
ThisAndArrowFixed();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcyBhbmQgYXJyb3cgZnVuY3Rpb25zLjEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aGlzIGFuZCBhcnJvdyBmdW5jdGlvbnMuMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztvREFJb0Q7QUFDcEQ7dUJBQ3VCO0FBQ3ZCLHFFQUFxRTtBQUNyRTtJQUNFLElBQUksSUFBSSxHQUFHO1FBQ1QsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDO1FBQ2hELEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ2hCLGdCQUFnQixFQUFFO1lBQUEsaUJBT2pCO1lBTkMsMEZBQTBGO1lBQzFGLE1BQU0sQ0FBQztnQkFDTCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQzdDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEdBQUcsRUFBRSxFQUFFLENBQUM7WUFDakUsQ0FBQyxDQUFDO1FBQ0osQ0FBQztLQUNGLENBQUM7SUFFRixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUN6QyxJQUFJLFVBQVUsR0FBRyxVQUFVLEVBQUUsQ0FBQztJQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsSUFBSSxHQUFHLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckUsQ0FBQztBQUVELGlCQUFpQixFQUFFLENBQUMifQ==