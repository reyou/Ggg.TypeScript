/* Not all properties of an interface may be required. 
Some exist under certain conditions or may not be there at all. 
These optional properties are popular when creating patterns 
like “option bags” where you pass an object to a function that 
only has a couple of properties filled in.
Here’s an example of this pattern: */
interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
let square = createSquare({ color: "red", width: 12 });
console.log(square);
