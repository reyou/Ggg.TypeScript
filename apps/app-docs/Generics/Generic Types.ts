/*The type of generic functions is just like those of non-generic functions, 
with the type parameters listed first, similarly to function declarations: */
function GenericTypes() {
  function identity<T>(arg: T): T {
    return arg;
  }

  let myIdentity: <T>(arg: T) => T = identity;
  let result = myIdentity("this is my identity");
  console.log(result);
}
GenericTypes();
/*We could also have used a different name for the generic 
type parameter in the type, so long as the number of 
type variables and how the type variables are used line up. */
function GenericTypes2() {
  function identity<T>(arg: T): T {
    return arg;
  }

  let myIdentity: <U>(arg: U) => U = identity;
  let result = myIdentity("this is my identity 2");
  console.log(result);
}
GenericTypes2();
// We can also write the generic type as a call signature of an object literal type:
function GenericTypes3() {
  function identity<T>(arg: T): T {
    return arg;
  }

  let myIdentity: { <T>(arg: T): T } = identity;
}
