/*Which leads us to writing our first generic interface. 
Let’s take the object literal from the previous example and move it to an interface: */
function GenericInterface() {
  interface GenericIdentityFn {
    <T>(arg: T): T;
  }

  function identity<T>(arg: T): T {
    return arg;
  }

  let myIdentity: GenericIdentityFn = identity;
  let result = myIdentity("this is my identity 2");
  console.log(result);
}
GenericInterface();
/*In a similar example, we may want to move the generic 
parameter to be a parameter of the whole interface. This lets us 
see what type(s) we’re generic over (e.g. Dictionary<string> rather 
than just Dictionary). This makes the type parameter visible to 
all the other members of the interface. */
function GenericInterface2() {
  interface GenericIdentityFn<T> {
    (arg: T): T;
  }

  function identity<T>(arg: T): T {
    return arg;
  }

  let myIdentity: GenericIdentityFn<number> = identity;
  let result = myIdentity(1234);
  console.log(result);
}
GenericInterface2();
