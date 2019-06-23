"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = require("./Animal");
const chai_1 = require("chai");
require("mocha");
describe("Animal Test", function () {
    it("get name", function () {
        let animal = new Animal_1.default("leon");
        let name = animal.getName();
        chai_1.expect(name).to.equal("leon");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5pbWFsVGVzdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9Nb2NoYSBUZXN0cy9BbmltYWxUZXN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUE4QjtBQUM5QiwrQkFBOEI7QUFDOUIsaUJBQWU7QUFDZixRQUFRLENBQUMsYUFBYSxFQUFFO0lBQ3RCLEVBQUUsQ0FBQyxVQUFVLEVBQUU7UUFDYixJQUFJLE1BQU0sR0FBRyxJQUFJLGdCQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVCLGFBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==