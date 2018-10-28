"use strict";
/*A polymorphic this type represents a type that is the subtype
of the containing class or interface. This is called F-bounded
polymorphism. This makes hierarchical fluent interfaces much easier to
express, for example. Take a simple calculator that returns this
after each operation: */
function PolymorphicThisTypes() {
    class BasicCalculator {
        constructor(value = 0) {
            this.value = value;
        }
        currentValue() {
            return this.value;
        }
        add(operand) {
            this.value += operand;
            return this;
        }
        multiply(operand) {
            this.value *= operand;
            return this;
        }
    }
    let v = new BasicCalculator(2)
        .multiply(5)
        .add(1)
        .currentValue();
    console.log(v);
    // Since the class uses this types, you can extend it and the new class can use the old methods with no changes.
    class ScientificCalculator extends BasicCalculator {
        constructor(value = 0) {
            super(value);
        }
        sin() {
            this.value = Math.sin(this.value);
            return this;
        }
    }
    let v2 = new ScientificCalculator(2)
        .multiply(5)
        .sin()
        .add(1)
        .currentValue();
    console.log(v2);
}
PolymorphicThisTypes();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9seW1vcnBoaWMgdGhpcyB0eXBlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlBvbHltb3JwaGljIHRoaXMgdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O3dCQUl3QjtBQUN4QixTQUFTLG9CQUFvQjtJQUMzQixNQUFNLGVBQWU7UUFDbkIsWUFBNkIsUUFBZ0IsQ0FBQztZQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQUcsQ0FBQztRQUMzQyxZQUFZO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDO1FBQ00sR0FBRyxDQUFDLE9BQWU7WUFDeEIsSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUM7WUFDdEIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQ00sUUFBUSxDQUFDLE9BQWU7WUFDN0IsSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUM7WUFDdEIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBRUY7SUFFRCxJQUFJLENBQUMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUM7U0FDM0IsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUNYLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDTixZQUFZLEVBQUUsQ0FBQztJQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2YsZ0hBQWdIO0lBRWhILE1BQU0sb0JBQXFCLFNBQVEsZUFBZTtRQUNoRCxZQUFtQixLQUFLLEdBQUcsQ0FBQztZQUMxQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDZixDQUFDO1FBQ00sR0FBRztZQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEMsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBRUY7SUFFRCxJQUFJLEVBQUUsR0FBRyxJQUFJLG9CQUFvQixDQUFDLENBQUMsQ0FBQztTQUNqQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQ1gsR0FBRyxFQUFFO1NBQ0wsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNOLFlBQVksRUFBRSxDQUFDO0lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDbEIsQ0FBQztBQUNELG9CQUFvQixFQUFFLENBQUMifQ==