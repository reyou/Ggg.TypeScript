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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3ZlcmxvYWRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiT3ZlcmxvYWRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7a0VBRWtFO0FBQ2xFLFNBQVMsaUJBQWlCO0lBQ3hCLElBQUksS0FBSyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdEQ7Ozs7K0JBSTJCO0lBQzNCLFNBQVMsUUFBUSxDQUFDLENBQTRDO1FBQzVELHFEQUFxRDtRQUNyRCx1REFBdUQ7UUFDdkQsSUFBSSxPQUFPLENBQUMsSUFBSSxRQUFRLEVBQUU7WUFDeEIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RELE9BQU8sVUFBVSxDQUFDO1NBQ25CO1FBQ0Qsd0NBQXdDO2FBQ25DLElBQUksT0FBTyxDQUFDLElBQUksUUFBUSxFQUFFO1lBQzdCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3BDLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUM7Z0JBQ3ZCLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRTthQUNiLENBQUM7U0FDSDtJQUNILENBQUM7SUFDRCxJQUFJLE1BQU0sR0FBRztRQUNYLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO1FBQzdCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO1FBQzVCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO0tBQzVCLENBQUM7SUFDRixJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLElBQUksR0FBRyxNQUFNLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JFLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsSUFBSSxHQUFHLE1BQU0sR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkUsQ0FBQztBQUNELGlCQUFpQixFQUFFLENBQUMifQ==