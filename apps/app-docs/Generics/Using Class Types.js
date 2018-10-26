"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*When creating factories in TypeScript using generics,
it is necessary to refer to class types by their constructor functions.
For example, */
function UsingClassTypes() {
    function create(c) {
        return new c();
    }
}
/*A more advanced example uses the prototype property to
infer and constrain relationships between the constructor function and
the instance side of class types. */
function UsingClassTypesAdvanced() {
    var BeeKeeper = /** @class */ (function () {
        function BeeKeeper() {
        }
        return BeeKeeper;
    }());
    var ZooKeeper = /** @class */ (function () {
        function ZooKeeper() {
        }
        return ZooKeeper;
    }());
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        return Animal;
    }());
    var Bee = /** @class */ (function (_super) {
        __extends(Bee, _super);
        function Bee() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Bee;
    }(Animal));
    var Lion = /** @class */ (function (_super) {
        __extends(Lion, _super);
        function Lion() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Lion;
    }(Animal));
    function createInstance(c) {
        return new c();
    }
    try {
        createInstance(Lion).keeper.nametag; // typechecks!
        createInstance(Bee).keeper.hasMask; // typechecks!
    }
    catch (ex) {
        console.log(ex);
    }
}
UsingClassTypesAdvanced();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNpbmcgQ2xhc3MgVHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVc2luZyBDbGFzcyBUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztlQUVlO0FBQ2Y7SUFDRSxnQkFBbUIsQ0FBZ0I7UUFDakMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7QUFDSCxDQUFDO0FBQ0Q7O29DQUVvQztBQUNwQztJQUNFO1FBQUE7UUFFQSxDQUFDO1FBQUQsZ0JBQUM7SUFBRCxDQUFDLEFBRkQsSUFFQztJQUVEO1FBQUE7UUFFQSxDQUFDO1FBQUQsZ0JBQUM7SUFBRCxDQUFDLEFBRkQsSUFFQztJQUVEO1FBQUE7UUFFQSxDQUFDO1FBQUQsYUFBQztJQUFELENBQUMsQUFGRCxJQUVDO0lBRUQ7UUFBa0IsdUJBQU07UUFBeEI7O1FBRUEsQ0FBQztRQUFELFVBQUM7SUFBRCxDQUFDLEFBRkQsQ0FBa0IsTUFBTSxHQUV2QjtJQUVEO1FBQW1CLHdCQUFNO1FBQXpCOztRQUVBLENBQUM7UUFBRCxXQUFDO0lBQUQsQ0FBQyxBQUZELENBQW1CLE1BQU0sR0FFeEI7SUFDRCx3QkFBMEMsQ0FBYztRQUN0RCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUNELElBQUk7UUFDRixjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWM7UUFDbkQsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFjO0tBQ25EO0lBQUMsT0FBTyxFQUFFLEVBQUU7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2pCO0FBQ0gsQ0FBQztBQUNELHVCQUF1QixFQUFFLENBQUMifQ==