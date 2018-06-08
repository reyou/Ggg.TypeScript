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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNpbmcgQ2xhc3MgVHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVc2luZyBDbGFzcyBUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O2VBRWU7QUFDZjtJQUNFLGdCQUFtQixDQUFnQjtRQUNqQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDakIsQ0FBQztBQUNILENBQUM7QUFDRDs7b0NBRW9DO0FBQ3BDO0lBQ0U7UUFBQTtRQUVBLENBQUM7UUFBRCxnQkFBQztJQUFELENBQUMsQUFGRCxJQUVDO0lBRUQ7UUFBQTtRQUVBLENBQUM7UUFBRCxnQkFBQztJQUFELENBQUMsQUFGRCxJQUVDO0lBRUQ7UUFBQTtRQUVBLENBQUM7UUFBRCxhQUFDO0lBQUQsQ0FBQyxBQUZELElBRUM7SUFFRDtRQUFrQix1QkFBTTtRQUF4Qjs7UUFFQSxDQUFDO1FBQUQsVUFBQztJQUFELENBQUMsQUFGRCxDQUFrQixNQUFNLEdBRXZCO0lBRUQ7UUFBbUIsd0JBQU07UUFBekI7O1FBRUEsQ0FBQztRQUFELFdBQUM7SUFBRCxDQUFDLEFBRkQsQ0FBbUIsTUFBTSxHQUV4QjtJQUNELHdCQUEwQyxDQUFjO1FBQ3RELE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQ0QsSUFBSTtRQUNGLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYztRQUNuRCxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWM7S0FDbkQ7SUFBQyxPQUFPLEVBQUUsRUFBRTtRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDakI7QUFDSCxDQUFDO0FBQ0QsdUJBQXVCLEVBQUUsQ0FBQyJ9