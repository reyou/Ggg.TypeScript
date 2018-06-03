declare var console;
declare var setTimeout;
export class GggExamplesPromise {
  public static async ExecutePromise() {
    await GggExamplesPromise.Ping();
    console.log("main is done.");
  }
  public static async Ping() {
    for (var i = 0; i <= 3; i++) {
      await GggExamplesPromise.Delay(300);
      console.log(i + " ping.");
    }
  }
  public static async Delay(ms: number) {
    var promise = new Promise(resolve => setTimeout(resolve, ms));
    return promise;
  }
}
/*GggTest*/
GggExamplesPromise.ExecutePromise();
console.log("test is done.");
