"use strict";
/*With index types, you can get the compiler to check code that
uses dynamic property names. For example, a common Javascript
pattern is to pick a subset of properties from an object: */
function IndexTypes() {
    function pluck2(o, names) {
        return names.map((n) => o[n]);
    }
    // Here’s how you would write and use this function in TypeScript,
    // using the index type query and indexed access operators:
    /*The compiler checks that name is actually a property on Person.
    The example introduces a couple of new type operators. First is keyof T,
    the index type query operator. For any type T, keyof T is the union
    of known, public property names of T. For example: */
    function pluck(o, names) {
        return names.map(n => o[n]);
    }
    let person = {
        name: "Jarid",
        age: 35
    };
    let strings = pluck(person, ["name"]); // ok, string[]
    console.log(strings);
}
IndexTypes();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXggdHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJJbmRleCB0eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7OzREQUU0RDtBQUM1RCxTQUFTLFVBQVU7SUFDakIsU0FBUyxNQUFNLENBQUMsQ0FBTSxFQUFFLEtBQVU7UUFDaEMsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsa0VBQWtFO0lBQ2xFLDJEQUEyRDtJQUMzRDs7O3lEQUdxRDtJQUNyRCxTQUFTLEtBQUssQ0FBdUIsQ0FBSSxFQUFFLEtBQVU7UUFDbkQsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQU1ELElBQUksTUFBTSxHQUFXO1FBQ25CLElBQUksRUFBRSxPQUFPO1FBQ2IsR0FBRyxFQUFFLEVBQUU7S0FDUixDQUFDO0lBQ0YsSUFBSSxPQUFPLEdBQWEsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlO0lBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdkIsQ0FBQztBQUNELFVBQVUsRUFBRSxDQUFDIn0=