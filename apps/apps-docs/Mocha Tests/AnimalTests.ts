import Animal from "./Animal";
import { expect } from "chai";
import "mocha";
describe("Animal Test", function() {
  it("get name", function() {
    let animal = new Animal("leon");
    let name = animal.getName();
    expect(name).to.equal("leon");
  });
});
