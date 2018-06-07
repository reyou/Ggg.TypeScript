"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello_world_1 = require("./hello-world");
var chai_1 = require("chai");
require("mocha");
describe("Hello function", function () {
    it("should return hello world", function () {
        var result = hello_world_1.hello();
        chai_1.expect(result).to.equal("Hello world!");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8td29ybGQuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlbGxvLXdvcmxkLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBc0M7QUFDdEMsNkJBQThCO0FBQzlCLGlCQUFlO0FBRWYsUUFBUSxDQUFDLGdCQUFnQixFQUFFO0lBQ3pCLEVBQUUsQ0FBQywyQkFBMkIsRUFBRTtRQUM5QixJQUFNLE1BQU0sR0FBRyxtQkFBSyxFQUFFLENBQUM7UUFDdkIsYUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9