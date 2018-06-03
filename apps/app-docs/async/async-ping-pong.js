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
            for (var i = 0; i <= 3; i++) {
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
GggExamplesPromise.ExecutePromise();
console.log("test is done.");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmMtcGluZy1wb25nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXN5bmMtcGluZy1wb25nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtJQUNTLE1BQU0sQ0FBTyxjQUFjOztZQUNoQyxNQUFNLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDL0IsQ0FBQztLQUFBO0lBQ00sTUFBTSxDQUFPLElBQUk7O1lBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNCLE1BQU0sa0JBQWtCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQzthQUMzQjtRQUNILENBQUM7S0FBQTtJQUNNLE1BQU0sQ0FBTyxLQUFLLENBQUMsRUFBVTs7WUFDbEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUQsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQztLQUFBO0NBQ0Y7QUFmRCxnREFlQztBQUNELFdBQVc7QUFDWCxrQkFBa0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDIn0=