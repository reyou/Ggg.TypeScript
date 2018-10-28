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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmMtcGluZy1wb25nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXN5bmMtcGluZy1wb25nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxNQUFhLGtCQUFrQjtJQUN0QixNQUFNLENBQU8sY0FBYzs7WUFDaEMsTUFBTSxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQy9CLENBQUM7S0FBQTtJQUNNLE1BQU0sQ0FBTyxJQUFJOztZQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMzQixNQUFNLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7YUFDM0I7UUFDSCxDQUFDO0tBQUE7SUFDTSxNQUFNLENBQU8sS0FBSyxDQUFDLEVBQVU7O1lBQ2xDLElBQUksT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlELE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUM7S0FBQTtDQUNGO0FBZkQsZ0RBZUM7QUFDRCxXQUFXO0FBQ1gsa0JBQWtCLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyJ9