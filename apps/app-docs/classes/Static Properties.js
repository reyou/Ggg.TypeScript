/*Up to this point, we’ve only talked about the instance members
of the class, those that show up on the object when it’s instantiated.
We can also create static members of a class, those that are visible
on the class itself rather than on the instances. In this example,
we use static on the origin, as it’s a general value for all grids.
Each instance accesses this value through prepending the name of the
class. Similarly to prepending this. in front of instance accesses,
here we prepend Grid. in front of static accesses. */
var Grid = (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = {
        x: 0, y: 0
    };
    return Grid;
}());
var grid1 = new Grid(1.0); // 1x scale
var grid2 = new Grid(5.0); // 5x scale
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGljIFByb3BlcnRpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTdGF0aWMgUHJvcGVydGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztxREFPcUQ7QUFDckQ7SUFTSSxjQUFtQixLQUFhO1FBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUFJLENBQUM7SUFMckMsMENBQTJCLEdBQTNCLFVBQTRCLEtBQWdDO1FBQ3hELElBQUksS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLElBQUksS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDakUsQ0FBQztJQVBNLFdBQU0sR0FBRztRQUNaLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7S0FDYixDQUFDO0lBT04sV0FBQztDQUFBLEFBVkQsSUFVQztBQUVELElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUUsV0FBVztBQUN2QyxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFFLFdBQVc7QUFFdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMifQ==