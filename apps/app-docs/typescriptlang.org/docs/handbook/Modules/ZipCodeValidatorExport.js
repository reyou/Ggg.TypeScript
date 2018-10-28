"use strict";
/*When exporting a module using export =, TypeScript-specific
import module = require("module") must be used to import the module. */
let numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
module.exports = ZipCodeValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWmlwQ29kZVZhbGlkYXRvckV4cG9ydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlppcENvZGVWYWxpZGF0b3JFeHBvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO3VFQUN1RTtBQUN2RSxJQUFJLFlBQVksR0FBRyxVQUFVLENBQUM7QUFDOUIsTUFBTSxnQkFBZ0I7SUFDcEIsWUFBWSxDQUFDLENBQVM7UUFDcEIsT0FBTyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FDRjtBQUNELGlCQUFTLGdCQUFnQixDQUFDIn0=