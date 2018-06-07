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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xhc3MgVHlwZXMuMS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNsYXNzIFR5cGVzLjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7SUFRRSxnQkFBWSxDQUFTLEVBQUUsQ0FBUztRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBUkQsd0JBQU8sR0FBUCxVQUFRLENBQU87UUFDYixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0QsMEJBQVMsR0FBVDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFJSCxhQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFFRCxJQUFJLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDaEMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDIn0=