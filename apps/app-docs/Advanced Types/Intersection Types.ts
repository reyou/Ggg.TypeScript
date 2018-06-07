/*An intersection type combines multiple types into one. This allows 
you to add together existing types to get a single type that has 
all the features you need. For example, Person & Serializable & 
Loggable is a Person and Serializable and Loggable. That means an 
object of this type will have all members of all three types.
You will mostly see intersection types used for mixins and other concepts 
that don’t fit in the classic object-oriented mold. (There are a lot of 
these in JavaScript!) Here’s a simple example that shows how to create a mixin: */
function IntersectionTypes() {
  function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
      (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
      if (!result.hasOwnProperty(id)) {
        (<any>result)[id] = (<any>second)[id];
      }
    }
    return result;
  }
  class Person {
    constructor(public name: string) {}
  }
  interface Loggable {
    log(): void;
  }
  class ConsoleLogger implements Loggable {
    log() {
      console.log("ConsoleLogger.log()");
    }
  }
  var jim = extend(new Person("Jim"), new ConsoleLogger());
  var n = jim.name;
  jim.log();
}
IntersectionTypes();
