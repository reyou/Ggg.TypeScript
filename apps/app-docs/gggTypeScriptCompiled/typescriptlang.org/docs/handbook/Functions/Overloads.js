"use strict";
/*JavaScript is inherently a very dynamic language. It’s not
uncommon for a single JavaScript function to return different
types of objects based on the shape of the arguments passed in. */
function FunctionOverloads() {
    let suits = ["hearts", "spades", "clubs", "diamonds"];
    /*Here the pickCard function will return two different things based
    on what the user has passed in. If the users passes in an object that
    represents the deck, the function will pick the card. If the user picks
    the card, we tell them which card they’ve picked. But how do we describe
    this to the type system? */
    function pickCard(x) {
        // Check to see if we're working with an object/array
        // if so, they gave us the deck and we'll pick the card
        if (typeof x == "object") {
            let pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        }
        // Otherwise just let them pick the card
        else if (typeof x == "number") {
            let pickedSuit = Math.floor(x / 13);
            return {
                suit: suits[pickedSuit],
                card: x % 13
            };
        }
    }
    let myDeck = [
        { suit: "diamonds", card: 2 },
        { suit: "spades", card: 10 },
        { suit: "hearts", card: 4 }
    ];
    let pickedCard1 = myDeck[pickCard(myDeck)];
    console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
    let pickedCard2 = pickCard(15);
    console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
}
FunctionOverloads();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3ZlcmxvYWRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svRnVuY3Rpb25zL092ZXJsb2Fkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O2tFQUVrRTtBQUNsRSxTQUFTLGlCQUFpQjtJQUN4QixJQUFJLEtBQUssR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3REOzs7OytCQUkyQjtJQUMzQixTQUFTLFFBQVEsQ0FBQyxDQUE0QztRQUM1RCxxREFBcUQ7UUFDckQsdURBQXVEO1FBQ3ZELElBQUksT0FBTyxDQUFDLElBQUksUUFBUSxFQUFFO1lBQ3hCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0RCxPQUFPLFVBQVUsQ0FBQztTQUNuQjtRQUNELHdDQUF3QzthQUNuQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLFFBQVEsRUFBRTtZQUM3QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNwQyxPQUFPO2dCQUNMLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDO2dCQUN2QixJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUU7YUFDYixDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBQ0QsSUFBSSxNQUFNLEdBQUc7UUFDWCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTtRQUM3QixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtRQUM1QixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTtLQUM1QixDQUFDO0lBQ0YsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRSxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLElBQUksR0FBRyxNQUFNLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZFLENBQUM7QUFDRCxpQkFBaUIsRUFBRSxDQUFDIn0=