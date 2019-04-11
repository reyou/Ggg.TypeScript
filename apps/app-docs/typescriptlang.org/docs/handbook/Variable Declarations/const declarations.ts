/*They are like let declarations but, as their name implies, 
their value cannot be changed once they are bound. In other words, 
they have the same scoping rules as let, but you can’t re-assign to them.
This should not be confused with the idea that the values 
they refer to are immutable. */
const numLivesForCat = 9;
const kitty = {
  name: "Aurora",
  numLives: numLivesForCat
};

// Error
// kitty = {
//   name: "Danielle",
//   numLives: numLivesForCat
// };

// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
