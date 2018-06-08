import zip = require("./ZipCodeValidatorExport");

function TestExportRun() {
  // Some samples to try
  let strings = ["Hello", "98052", "101"];

  // Validators to use
  let validator = new zip();

  // Show whether each string passed each validator
  strings.forEach(s => {
    console.log(
      `"${s}" - ${validator.isAcceptable(s) ? "matches" : "does not match"}`
    );
  });
}
if (require.main === module) {
  TestExportRun();
} else {
  // I am referenced as module.
}
