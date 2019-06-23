const request = require("request-promise-native");

class RandomUserManager {
  getRandomUser = async function(url: string): Promise<object> {
    const options = {
      method: "GET",
      uri: url,
      json: true
    };
    let randomUser = await request(options);
    return randomUser;
  };
}

export default RandomUserManager;
