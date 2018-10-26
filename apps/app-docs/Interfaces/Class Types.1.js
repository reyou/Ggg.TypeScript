"use strict";
var Clock2 = /** @class */ (function () {
    function Clock2(h, m) {
        this.currentTime = new Date(h, m);
    }
    Clock2.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    Clock2.prototype.printTime = function () {
        console.log(this.currentTime);
    };
    return Clock2;
}());
var clock2 = new Clock2(12, 15);
clock2.printTime();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xhc3MgVHlwZXMuMS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNsYXNzIFR5cGVzLjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVFBO0lBUUUsZ0JBQVksQ0FBUyxFQUFFLENBQVM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQVJELHdCQUFPLEdBQVAsVUFBUSxDQUFPO1FBQ2IsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNELDBCQUFTLEdBQVQ7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBSUgsYUFBQztBQUFELENBQUMsQUFYRCxJQVdDO0FBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2hDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyJ9