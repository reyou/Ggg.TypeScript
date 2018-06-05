function ThisAndArrow() {
  let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
      return function() {
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
  } catch (ex) {
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
