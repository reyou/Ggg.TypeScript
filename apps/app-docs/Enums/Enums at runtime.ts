// Enums are real objects that exist at runtime. For example, the following enum
function EnumsAtRuntime() {
  enum E {
    X,
    Y,
    Z
  }
  function f(obj: { X: number }) {
    return obj.X;
  }

  // Works, since 'E' has a property named 'X' which is a number.
  let result = f(E);
  console.log(result);
}
EnumsAtRuntime();
