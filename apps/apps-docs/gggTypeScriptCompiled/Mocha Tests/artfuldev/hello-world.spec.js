"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_world_1 = require("./hello-world");
const chai_1 = require("chai");
require("mocha");
describe("Hello function", () => {
    it("should return hello world", () => {
        const result = hello_world_1.hello();
        chai_1.expect(result).to.equal("Hello world!");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8td29ybGQuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL01vY2hhIFRlc3RzL2FydGZ1bGRldi9oZWxsby13b3JsZC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQXNDO0FBQ3RDLCtCQUE4QjtBQUM5QixpQkFBZTtBQUVmLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUU7SUFDOUIsRUFBRSxDQUFDLDJCQUEyQixFQUFFLEdBQUcsRUFBRTtRQUNuQyxNQUFNLE1BQU0sR0FBRyxtQkFBSyxFQUFFLENBQUM7UUFDdkIsYUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9