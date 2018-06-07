var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
digital.tick();
analog.tick();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljIGFuZCBpbnN0YW5jZSBzaWRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YXRpYyBhbmQgaW5zdGFuY2Ugc2lkZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7SUFDRSxzQkFBWSxDQUFTLEVBQUUsQ0FBUztJQUFHLENBQUM7SUFDcEMsMkJBQUksR0FBSjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFDRDtJQUNFLHFCQUFZLENBQVMsRUFBRSxDQUFTO0lBQUcsQ0FBQztJQUNwQywwQkFBSSxHQUFKO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQztBQUNELHFCQUNFLElBQXNCLEVBQ3RCLElBQVksRUFDWixNQUFjO0lBRWQsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDaEMsQ0FBQztBQUNELElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxZQUFZLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2hELElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzdDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNmLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyJ9