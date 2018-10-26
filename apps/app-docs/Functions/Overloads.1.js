"use strict";
/*The answer is to supply multiple function types for the same
function as a list of overloads. This list is what the compiler
will use to resolve function calls. Let’s create a list of
overloads that describe what our pickCard accepts and what
it returns. */
function FunctionOverloadsFixed() {
    var suits = ["hearts", "spades", "clubs", "diamonds"];
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
            return { suit: suits[pickedSuit], card: x % 13 };
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
/*With this change, the overloads now give us type-checked calls to
the pickCard function.
In order for the compiler to pick the correct typecheck, it follows a
similar process to the underlying JavaScript. It looks at the overload list,
and proceeding with the first overload attempts to call the function with the
provided parameters. If it finds a match, it picks this overload as the correct overload.
For this reason, it’s customary to order overloads from most specific to least specific.
Note that the function pickCard(x): any piece is not part of the overload list,
so it only has two overloads: one that takes an object and one that takes a number.
Calling pickCard with any other parameter types would cause an error. */
FunctionOverloadsFixed();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3ZlcmxvYWRzLjEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJPdmVybG9hZHMuMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Y0FJYztBQUNkO0lBQ0UsSUFBSSxLQUFLLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUd0RCxrQkFBa0IsQ0FBQztRQUNqQixxREFBcUQ7UUFDckQsdURBQXVEO1FBQ3ZELElBQUksT0FBTyxDQUFDLElBQUksUUFBUSxFQUFFO1lBQ3hCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0RCxPQUFPLFVBQVUsQ0FBQztTQUNuQjtRQUNELHdDQUF3QzthQUNuQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLFFBQVEsRUFBRTtZQUM3QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNwQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQztJQUNELElBQUksTUFBTSxHQUFHO1FBQ1gsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7UUFDN0IsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7UUFDNUIsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7S0FDNUIsQ0FBQztJQUNGLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsSUFBSSxHQUFHLE1BQU0sR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFckUsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2RSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozt3RUFTd0U7QUFDeEUsc0JBQXNCLEVBQUUsQ0FBQyJ9