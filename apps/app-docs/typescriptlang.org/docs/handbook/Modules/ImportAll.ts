import {
  StringValidator,
  LettersOnlyValidator,
  ZipCodeValidator
} from "./AllValidators";
console.log("All Modules Imported!");
let stringValidator = new StringValidator("this is title");
console.log(stringValidator.validate());
