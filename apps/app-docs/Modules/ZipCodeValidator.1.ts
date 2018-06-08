export const numberRegexp = /^[0-9]+$/;
import { StringValidator } from "./Validation";
class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}
function ZipCodeRunner() {
  let zipValidator = new ZipCodeValidator();
  let result = zipValidator.isAcceptable("07071");
  console.log(result);
}
// Export statements are handy when exports need to be renamed for
// consumers, so the above example can be written as:
export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };
