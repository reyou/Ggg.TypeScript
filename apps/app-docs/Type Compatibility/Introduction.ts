function StructuralTyping() {
  interface Named {
    name: string | undefined;
  }

  class Person {
    name: string | undefined;
  }

  let p: Named;
  // OK, because of structural typing
  p = new Person();
  console.log(p);
}
StructuralTyping();
