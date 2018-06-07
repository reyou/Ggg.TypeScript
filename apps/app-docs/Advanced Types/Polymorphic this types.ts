/*A polymorphic this type represents a type that is the subtype 
of the containing class or interface. This is called F-bounded 
polymorphism. This makes hierarchical fluent interfaces much easier to 
express, for example. Take a simple calculator that returns this 
after each operation: */
function PolymorphicThisTypes() {
  class BasicCalculator {
    public constructor(protected value: number = 0) {}
    public currentValue(): number {
      return this.value;
    }
    public add(operand: number): this {
      this.value += operand;
      return this;
    }
    public multiply(operand: number): this {
      this.value *= operand;
      return this;
    }
    // ... other operations go here ...
  }

  let v = new BasicCalculator(2)
    .multiply(5)
    .add(1)
    .currentValue();
  console.log(v);
  // Since the class uses this types, you can extend it and the new class can use the old methods with no changes.

  class ScientificCalculator extends BasicCalculator {
    public constructor(value = 0) {
      super(value);
    }
    public sin() {
      this.value = Math.sin(this.value);
      return this;
    }
    // ... other operations go here ...
  }

  let v2 = new ScientificCalculator(2)
    .multiply(5)
    .sin()
    .add(1)
    .currentValue();
  console.log(v2);
}
PolymorphicThisTypes();
