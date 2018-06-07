// Ambient enums are used to describe the shape of already existing enum types.
// https://stackoverflow.com/questions/28818849/how-do-the-different-enum-variants-work-in-typescript
// https://tusksoft.com/blog/march-2015/const-enums-in-typescript-1-4-and-how-they-differ
declare enum AmbientEnum {
  A = 1,
  B,
  C = 2
}
