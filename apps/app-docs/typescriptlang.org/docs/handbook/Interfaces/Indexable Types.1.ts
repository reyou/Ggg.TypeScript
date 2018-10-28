/*There are two types of supported index signatures: string and number. 
It is possible to support both types of indexers, but the type 
returned from a numeric indexer must be a subtype of the type returned 
from the string indexer. This is because when indexing with a number, 
JavaScript will actually convert that to a string before indexing into 
an object. That means that indexing with 100 (a number) is the same 
thing as indexing with "100" (a string), so the two need to be consistent. */
class AnimalIndex {
  name: string | undefined;
}
class DogIndex extends AnimalIndex {
  breed: string | undefined;
}

// Error: indexing with a numeric string might get you a completely separate type of Animal!
interface NotOkay {
  //[x: number]: AnimalIndex;
  [x: string]: DogIndex;
}
