/*When exporting a module using export =, TypeScript-specific 
import module = require("module") must be used to import the module. */
let numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}
export = ZipCodeValidator;
