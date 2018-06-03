/*The interface LabelledValue is a name we can now use to describe 
the requirement in the previous example. It still represents having 
a single property called label that is of type string. Notice we 
didn’t have to explicitly say that the object we pass to printLabel 
implements this interface like we might have to in other languages. 
Here, it’s only the shape that matters. If the object we pass to the 
function meets the requirements listed, then it’s allowed.
It’s worth pointing out that the type-checker does not require that 
these properties come in any sort of order, only that the properties 
the interface requires are present and have the required type. */
interface LabelledValue2 {
  label: string;
}

function printLabel2(labelledObj: LabelledValue2) {
  console.log(labelledObj.label);
}

let myObj2 = {
  size: 10,
  label: "Size 11 Object"
};
printLabel2(myObj2);
