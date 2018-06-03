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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3QgZGVjbGFyYXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uc3QgZGVjbGFyYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUkrQjtBQUMvQixNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUM7QUFDekIsTUFBTSxLQUFLLEdBQUc7SUFDWixJQUFJLEVBQUUsUUFBUTtJQUNkLFFBQVEsRUFBRSxjQUFjO0NBQ3pCLENBQUM7QUFFRixRQUFRO0FBQ1IsWUFBWTtBQUNaLHNCQUFzQjtBQUN0Qiw2QkFBNkI7QUFDN0IsS0FBSztBQUVMLGFBQWE7QUFDYixLQUFLLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztBQUNwQixLQUFLLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztBQUNyQixLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztBQUNuQixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMifQ==