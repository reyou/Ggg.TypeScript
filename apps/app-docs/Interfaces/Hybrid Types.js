function getCounter() {
    var counter = function (start) {
        console.log(start);
    };
    counter.interval = 123;
    counter.reset = function () {
        counter.interval = 0;
    };
    return counter;
}
var cCounterHybrid = getCounter();
cCounterHybrid(10);
cCounterHybrid.reset();
cCounterHybrid.interval = 5.0;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHlicmlkIFR5cGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSHlicmlkIFR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBO0lBQ0UsSUFBSSxPQUFPLEdBQWtCLFVBQVMsS0FBYTtRQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JCLENBQUMsQ0FBQztJQUNGLE9BQU8sQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0lBQ3ZCLE9BQU8sQ0FBQyxLQUFLLEdBQUc7UUFDZCxPQUFPLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDLENBQUM7SUFDRixPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBRUQsSUFBSSxjQUFjLEdBQUcsVUFBVSxFQUFFLENBQUM7QUFDbEMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ25CLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN2QixjQUFjLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyJ9