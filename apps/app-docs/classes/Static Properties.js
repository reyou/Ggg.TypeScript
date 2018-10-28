"use strict";
/*Up to this point, we’ve only talked about the instance members
of the class, those that show up on the object when it’s instantiated.
We can also create static members of a class, those that are visible
on the class itself rather than on the instances. In this example,
we use static on the origin, as it’s a general value for all grids.
Each instance accesses this value through prepending the name of the
class. Similarly to prepending this. in front of instance accesses,
here we prepend Grid. in front of static accesses. */
class Grid {
    constructor(scale) {
        this.scale = scale;
    }
    calculateDistanceFromOrigin(point) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
}
Grid.origin = {
    x: 0, y: 0
};
let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGljIFByb3BlcnRpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTdGF0aWMgUHJvcGVydGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7cURBT3FEO0FBQ3JELE1BQU0sSUFBSTtJQVNOLFlBQW1CLEtBQWE7UUFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO0lBQUksQ0FBQztJQUxyQywyQkFBMkIsQ0FBQyxLQUFnQztRQUN4RCxJQUFJLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QyxJQUFJLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNqRSxDQUFDOztBQVBNLFdBQU0sR0FBRztJQUNaLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7Q0FDYixDQUFDO0FBU04sSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBRSxXQUFXO0FBQ3ZDLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUUsV0FBVztBQUV2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyJ9