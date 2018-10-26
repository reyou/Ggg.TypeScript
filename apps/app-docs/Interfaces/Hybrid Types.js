"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHlicmlkIFR5cGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSHlicmlkIFR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFZQTtJQUNFLElBQUksT0FBTyxHQUFrQixVQUFTLEtBQWE7UUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQixDQUFDLENBQUM7SUFDRixPQUFPLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUN2QixPQUFPLENBQUMsS0FBSyxHQUFHO1FBQ2QsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQztBQUVELElBQUksY0FBYyxHQUFHLFVBQVUsRUFBRSxDQUFDO0FBQ2xDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNuQixjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDdkIsY0FBYyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMifQ==