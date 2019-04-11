declare var console: {
  log: { (arg0: string): void; (arg0: string): void; (arg0: string): void };
};
declare var setTimeout: (
  arg0: (value?: {} | PromiseLike<{}> | undefined) => void,
  arg1: number
) => void;
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
