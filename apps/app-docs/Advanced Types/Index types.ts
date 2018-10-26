/*With index types, you can get the compiler to check code that 
uses dynamic property names. For example, a common Javascript 
pattern is to pick a subset of properties from an object: */
function IndexTypes() {
  function pluck2(o: any, names: any) {
    return names.map((n: any) => o[n]);
  }
  // Here’s how you would write and use this function in TypeScript,
  // using the index type query and indexed access operators:
  /*The compiler checks that name is actually a property on Person. 
  The example introduces a couple of new type operators. First is keyof T, 
  the index type query operator. For any type T, keyof T is the union 
  of known, public property names of T. For example: */
  function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
  }

  interface Person {
    name: string;
    age: number;
  }
  let person: Person = {
    name: "Jarid",
    age: 35
  };
  let strings: string[] = pluck(person, ["name"]); // ok, string[]
  console.log(strings);
}
IndexTypes();
