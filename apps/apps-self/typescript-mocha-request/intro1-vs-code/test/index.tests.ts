import { expect } from "chai";
import RandomUserManager from "../src/index";

describe("Test Suite", () => {
  it("testMethod", async () => {
    let entryUrl = "https://api.randomuser.me/";
    let randomUserManager = new RandomUserManager();
    let response = await randomUserManager.getRandomUser(entryUrl);
    console.log(JSON.stringify(response, null, 4));
  });
});
