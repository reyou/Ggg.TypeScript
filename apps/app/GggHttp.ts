//=============================================================================
import { GggCore } from "./GggCore"
// this is the way to introduce native JS elements into TypeScript
declare var fetch;
declare var require;
var fetch = require('node-fetch');
// enum declaration
enum RequestType {
    GET = 0,
    POST = 1,
    PUT = 2,
    DELETE = 3
}
export class GggHttp {
    public static FetchJsonAndLog(url) {
        fetch(url).
            then(res => res.json())
            .then(results => {
                GggCore.Log(results);
            }).catch(err => {
                GggCore.Error(err);
            });
    }
    public static MakeRequest(requestType: RequestType, url: string): string {
        var requestTypeString = RequestType[requestType];
        return `This is not a valid request. requestType: ${requestTypeString}`;
    }
    public static GetUrlString(url: string): string {
        let result: string = GggHttp.MakeRequest(RequestType.GET, url);
        return result;
    }
}