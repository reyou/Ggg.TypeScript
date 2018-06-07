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
/*A polymorphic this type represents a type that is the subtype
of the containing class or interface. This is called F-bounded
polymorphism. This makes hierarchical fluent interfaces much easier to
express, for example. Take a simple calculator that returns this
after each operation: */
function PolymorphicThisTypes() {
    var BasicCalculator = (function () {
        function BasicCalculator(value) {
            if (value === void 0) { value = 0; }
            this.value = value;
        }
        BasicCalculator.prototype.currentValue = function () {
            return this.value;
        };
        BasicCalculator.prototype.add = function (operand) {
            this.value += operand;
            return this;
        };
        BasicCalculator.prototype.multiply = function (operand) {
            this.value *= operand;
            return this;
        };
        return BasicCalculator;
    }());
    var v = new BasicCalculator(2)
        .multiply(5)
        .add(1)
        .currentValue();
    console.log(v);
    // Since the class uses this types, you can extend it and the new class can use the old methods with no changes.
    var ScientificCalculator = (function (_super) {
        __extends(ScientificCalculator, _super);
        function ScientificCalculator(value) {
            if (value === void 0) { value = 0; }
            return _super.call(this, value) || this;
        }
        ScientificCalculator.prototype.sin = function () {
            this.value = Math.sin(this.value);
            return this;
        };
        return ScientificCalculator;
    }(BasicCalculator));
    var v2 = new ScientificCalculator(2)
        .multiply(5)
        .sin()
        .add(1)
        .currentValue();
    console.log(v2);
}
PolymorphicThisTypes();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9seW1vcnBoaWMgdGhpcyB0eXBlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlBvbHltb3JwaGljIHRoaXMgdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O3dCQUl3QjtBQUN4QjtJQUNFO1FBQ0UseUJBQTZCLEtBQWlCO1lBQWpCLHNCQUFBLEVBQUEsU0FBaUI7WUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUFHLENBQUM7UUFDM0Msc0NBQVksR0FBbkI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDO1FBQ00sNkJBQUcsR0FBVixVQUFXLE9BQWU7WUFDeEIsSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUM7WUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFDTSxrQ0FBUSxHQUFmLFVBQWdCLE9BQWU7WUFDN0IsSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUM7WUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFFSCxzQkFBQztJQUFELENBQUMsQUFkRCxJQWNDO0lBRUQsSUFBSSxDQUFDLEdBQUcsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDO1NBQzNCLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDWCxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ04sWUFBWSxFQUFFLENBQUM7SUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNmLGdIQUFnSDtJQUVoSDtRQUFtQyx3Q0FBZTtRQUNoRCw4QkFBbUIsS0FBUztZQUFULHNCQUFBLEVBQUEsU0FBUzttQkFDMUIsa0JBQU0sS0FBSyxDQUFDO1FBQ2QsQ0FBQztRQUNNLGtDQUFHLEdBQVY7WUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBRUgsMkJBQUM7SUFBRCxDQUFDLEFBVEQsQ0FBbUMsZUFBZSxHQVNqRDtJQUVELElBQUksRUFBRSxHQUFHLElBQUksb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1NBQ2pDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDWCxHQUFHLEVBQUU7U0FDTCxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ04sWUFBWSxFQUFFLENBQUM7SUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNsQixDQUFDO0FBQ0Qsb0JBQW9CLEVBQUUsQ0FBQyJ9