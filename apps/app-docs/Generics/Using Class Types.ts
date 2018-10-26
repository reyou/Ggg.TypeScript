/*When creating factories in TypeScript using generics, 
it is necessary to refer to class types by their constructor functions. 
For example, */
function UsingClassTypes() {
  function create<T>(c: { new (): T }): T {
    return new c();
  }
}
/*A more advanced example uses the prototype property to 
infer and constrain relationships between the constructor function and 
the instance side of class types. */
function UsingClassTypesAdvanced() {
  class BeeKeeper {
    hasMask: boolean | undefined;
  }

  class ZooKeeper {
    nametag: string | undefined;
  }

  class Animal {
    numLegs: number | undefined;
  }

  class Bee extends Animal {
    keeper: BeeKeeper | undefined;
  }

  class Lion extends Animal {
    keeper: ZooKeeper | undefined;
  }
  function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
  }
  try {
    createInstance(Lion).keeper.nametag; // typechecks!
    createInstance(Bee).keeper.hasMask; // typechecks!
  } catch (ex) {
    console.log(ex);
  }
}
UsingClassTypesAdvanced();
