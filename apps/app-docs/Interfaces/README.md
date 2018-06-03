http://www.typescriptlang.org/docs/handbook/interfaces.html
//=============================================================================
Introduction
One of TypeScript’s core principles is that type-checking focuses on the shape
that values have. This is sometimes called “duck typing” or “structural subtyping”.
In TypeScript, interfaces fill the role of naming these types, and are a powerful
way of defining contracts within your code as well as contracts with code outside
of your project.
//=============================================================================
readonly vs const
The easiest way to remember whether to use readonly or const is to ask whether
you’re using it on a variable or a property. Variables use const whereas
properties use readonly.
//=============================================================================
