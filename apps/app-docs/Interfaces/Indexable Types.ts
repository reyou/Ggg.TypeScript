/*Similarly to how we can use interfaces to describe function types, 
we can also describe types that we can “index into” like a[10], 
or ageMap["daniel"]. Indexable types have an index signature that 
describes the types we can use to index into the object, along 
with the corresponding return types when indexing. 
Let’s take an example: */
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];
console.log(myArray);
let myStr: string = myArray[0];
console.log(myStr);
/*Above, we have a StringArray interface that has an index signature. 
This index signature states that when a StringArray is 
indexed with a number, it will return a string. */
