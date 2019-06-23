import validator from "./ZipCodeValidator.2";
import validate from "./StaticZipCodeValidator";

function TestModuleValidator() {
  let myValidator = new validator();
  let strings = ["Hello", "98052", "101"];

  // Use function validate
  strings.forEach(s => {
    console.log(`"${s}" ${validate(s) ? " matches" : " does not match"}`);
  });
}
if (require.main === module) {
  TestModuleValidator();
} else {
  // I am referenced as module.
}
