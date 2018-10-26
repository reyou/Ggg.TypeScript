"use strict";
/*JavaScript is inherently a very dynamic language. It’s not
uncommon for a single JavaScript function to return different
types of objects based on the shape of the arguments passed in. */
function FunctionOverloads() {
    var suits = ["hearts", "spades", "clubs", "diamonds"];
    /*Here the pickCard function will return two different things based
    on what the user has passed in. If the users passes in an object that
    represents the deck, the function will pick the card. If the user picks
    the card, we tell them which card they’ve picked. But how do we describe
    this to the type system? */
    function pickCard(x) {
        // Check to see if we're working with an object/array
        // if so, they gave us the deck and we'll pick the card
        if (typeof x == "object") {
            var pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        }
        // Otherwise just let them pick the card
        else if (typeof x == "number") {
            var pickedSuit = Math.floor(x / 13);
            return {
                suit: suits[pickedSuit],
                card: x % 13
            };
        }
    }
    var myDeck = [
        { suit: "diamonds", card: 2 },
        { suit: "spades", card: 10 },
        { suit: "hearts", card: 4 }
    ];
    var pickedCard1 = myDeck[pickCard(myDeck)];
    console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
    var pickedCard2 = pickCard(15);
    console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
}
FunctionOverloads();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3ZlcmxvYWRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiT3ZlcmxvYWRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7a0VBRWtFO0FBQ2xFO0lBQ0UsSUFBSSxLQUFLLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN0RDs7OzsrQkFJMkI7SUFDM0Isa0JBQWtCLENBQUM7UUFDakIscURBQXFEO1FBQ3JELHVEQUF1RDtRQUN2RCxJQUFJLE9BQU8sQ0FBQyxJQUFJLFFBQVEsRUFBRTtZQUN4QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEQsT0FBTyxVQUFVLENBQUM7U0FDbkI7UUFDRCx3Q0FBd0M7YUFDbkMsSUFBSSxPQUFPLENBQUMsSUFBSSxRQUFRLEVBQUU7WUFDN0IsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDcEMsT0FBTztnQkFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQztnQkFDdkIsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFO2FBQ2IsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUNELElBQUksTUFBTSxHQUFHO1FBQ1gsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7UUFDN0IsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7UUFDNUIsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7S0FDNUIsQ0FBQztJQUNGLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsSUFBSSxHQUFHLE1BQU0sR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckUsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2RSxDQUFDO0FBQ0QsaUJBQWlCLEVBQUUsQ0FBQyJ9