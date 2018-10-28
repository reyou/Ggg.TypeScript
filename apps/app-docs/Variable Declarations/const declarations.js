"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3QgZGVjbGFyYXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uc3QgZGVjbGFyYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OzsrQkFJK0I7QUFDL0IsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBQ3pCLE1BQU0sS0FBSyxHQUFHO0lBQ1osSUFBSSxFQUFFLFFBQVE7SUFDZCxRQUFRLEVBQUUsY0FBYztDQUN6QixDQUFDO0FBRUYsUUFBUTtBQUNSLFlBQVk7QUFDWixzQkFBc0I7QUFDdEIsNkJBQTZCO0FBQzdCLEtBQUs7QUFFTCxhQUFhO0FBQ2IsS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7QUFDcEIsS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7QUFDckIsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7QUFDbkIsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDIn0=