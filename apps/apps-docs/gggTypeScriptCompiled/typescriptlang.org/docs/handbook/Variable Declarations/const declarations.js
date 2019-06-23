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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3QgZGVjbGFyYXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svVmFyaWFibGUgRGVjbGFyYXRpb25zL2NvbnN0IGRlY2xhcmF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7K0JBSStCO0FBQy9CLE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBQztBQUN6QixNQUFNLEtBQUssR0FBRztJQUNaLElBQUksRUFBRSxRQUFRO0lBQ2QsUUFBUSxFQUFFLGNBQWM7Q0FDekIsQ0FBQztBQUVGLFFBQVE7QUFDUixZQUFZO0FBQ1osc0JBQXNCO0FBQ3RCLDZCQUE2QjtBQUM3QixLQUFLO0FBRUwsYUFBYTtBQUNiLEtBQUssQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO0FBQ3BCLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0FBQ3JCLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQ25CLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyJ9