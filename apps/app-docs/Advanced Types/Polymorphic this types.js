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
/*A polymorphic this type represents a type that is the subtype
of the containing class or interface. This is called F-bounded
polymorphism. This makes hierarchical fluent interfaces much easier to
express, for example. Take a simple calculator that returns this
after each operation: */
function PolymorphicThisTypes() {
    var BasicCalculator = /** @class */ (function () {
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
    var ScientificCalculator = /** @class */ (function (_super) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9seW1vcnBoaWMgdGhpcyB0eXBlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlBvbHltb3JwaGljIHRoaXMgdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozt3QkFJd0I7QUFDeEI7SUFDRTtRQUNFLHlCQUE2QixLQUFpQjtZQUFqQixzQkFBQSxFQUFBLFNBQWlCO1lBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFBRyxDQUFDO1FBQzNDLHNDQUFZLEdBQW5CO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7UUFDTSw2QkFBRyxHQUFWLFVBQVcsT0FBZTtZQUN4QixJQUFJLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQztZQUN0QixPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFDTSxrQ0FBUSxHQUFmLFVBQWdCLE9BQWU7WUFDN0IsSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUM7WUFDdEIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBRUgsc0JBQUM7SUFBRCxDQUFDLEFBZEQsSUFjQztJQUVELElBQUksQ0FBQyxHQUFHLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQztTQUMzQixRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQ1gsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNOLFlBQVksRUFBRSxDQUFDO0lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDZixnSEFBZ0g7SUFFaEg7UUFBbUMsd0NBQWU7UUFDaEQsOEJBQW1CLEtBQVM7WUFBVCxzQkFBQSxFQUFBLFNBQVM7bUJBQzFCLGtCQUFNLEtBQUssQ0FBQztRQUNkLENBQUM7UUFDTSxrQ0FBRyxHQUFWO1lBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQyxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFFSCwyQkFBQztJQUFELENBQUMsQUFURCxDQUFtQyxlQUFlLEdBU2pEO0lBRUQsSUFBSSxFQUFFLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7U0FDakMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUNYLEdBQUcsRUFBRTtTQUNMLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDTixZQUFZLEVBQUUsQ0FBQztJQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2xCLENBQUM7QUFDRCxvQkFBb0IsRUFBRSxDQUFDIn0=