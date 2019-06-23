"use strict";
function getCounter() {
    let counter = function (start) {
        console.log(start);
    };
    counter.interval = 123;
    counter.reset = function () {
        counter.interval = 0;
    };
    return counter;
}
let cCounterHybrid = getCounter();
cCounterHybrid(10);
cCounterHybrid.reset();
cCounterHybrid.interval = 5.0;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHlicmlkIFR5cGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svSW50ZXJmYWNlcy9IeWJyaWQgVHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVlBLFNBQVMsVUFBVTtJQUNqQixJQUFJLE9BQU8sR0FBa0IsVUFBUyxLQUFhO1FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7SUFDdkIsT0FBTyxDQUFDLEtBQUssR0FBRztRQUNkLE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsQ0FBQztJQUNGLE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUFFRCxJQUFJLGNBQWMsR0FBRyxVQUFVLEVBQUUsQ0FBQztBQUNsQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDbkIsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3ZCLGNBQWMsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDIn0=