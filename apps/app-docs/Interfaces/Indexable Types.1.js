/*There are two types of supported index signatures: string and number.
It is possible to support both types of indexers, but the type
returned from a numeric indexer must be a subtype of the type returned
from the string indexer. This is because when indexing with a number,
JavaScript will actually convert that to a string before indexing into
an object. That means that indexing with 100 (a number) is the same
thing as indexing with "100" (a string), so the two need to be consistent. */
class AnimalIndex {
}
class DogIndex extends AnimalIndex {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXhhYmxlIFR5cGVzLjEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJJbmRleGFibGUgVHlwZXMuMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OzZFQU02RTtBQUM3RTtDQUVDO0FBQ0QsY0FBZSxTQUFRLFdBQVc7Q0FFakMifQ==