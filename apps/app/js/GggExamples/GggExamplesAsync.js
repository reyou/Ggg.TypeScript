"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class GggExamplesPromise {
    static ExecutePromise() {
        return __awaiter(this, void 0, void 0, function* () {
            yield GggExamplesPromise.Ping();
            console.log("main is done.");
        });
    }
    static Ping() {
        return __awaiter(this, void 0, void 0, function* () {
            for (var i = 0; i < 3; i++) {
                yield GggExamplesPromise.Delay(300);
                console.log(i + " ping.");
            }
        });
    }
    static Delay(ms) {
        return __awaiter(this, void 0, void 0, function* () {
            var promise = new Promise(resolve => setTimeout(resolve, ms));
            return promise;
        });
    }
}
exports.GggExamplesPromise = GggExamplesPromise;
/*GggTest*/
// GggExamplesPromise.ExecutePromise();
// console.log("test is done."); 
//# sourceMappingURL=GggExamplesAsync.js.map