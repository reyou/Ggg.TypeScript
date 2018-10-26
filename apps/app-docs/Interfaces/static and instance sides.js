"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljIGFuZCBpbnN0YW5jZSBzaWRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YXRpYyBhbmQgaW5zdGFuY2Ugc2lkZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVlBO0lBQ0Usc0JBQVksQ0FBUyxFQUFFLENBQVM7SUFBRyxDQUFDO0lBQ3BDLDJCQUFJLEdBQUo7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBQ0Q7SUFDRSxxQkFBWSxDQUFTLEVBQUUsQ0FBUztJQUFHLENBQUM7SUFDcEMsMEJBQUksR0FBSjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFDRCxxQkFDRSxJQUFzQixFQUN0QixJQUFZLEVBQ1osTUFBYztJQUVkLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFDRCxJQUFJLE9BQU8sR0FBRyxXQUFXLENBQUMsWUFBWSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNoRCxJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3QyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDZixNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMifQ==