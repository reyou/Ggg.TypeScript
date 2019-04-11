/*Classes and function declarations can be authored directly as 
default exports. Default export class and function declaration 
names are optional. */
export default class ZipCodeValidator {
  static numberRegexp = /^[0-9]+$/;
  isAcceptable(s: string) {
    return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
  }
}
