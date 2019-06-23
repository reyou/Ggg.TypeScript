export const numberRegexp = /^[0-9]+$/;
import { StringValidator } from "./Validation";
export class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}
function ZipCodeRunner() {
  let zipValidator = new ZipCodeValidator();
  let result = zipValidator.isAcceptable("07071");
  console.log(result);
}
if (require.main === module) {
  ZipCodeRunner();
}
