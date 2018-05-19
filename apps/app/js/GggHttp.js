"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//=============================================================================
const GggCore_1 = require("./GggCore");
var fetch = require('node-fetch');
// enum declaration
var RequestType;
(function (RequestType) {
    RequestType[RequestType["GET"] = 0] = "GET";
    RequestType[RequestType["POST"] = 1] = "POST";
    RequestType[RequestType["PUT"] = 2] = "PUT";
    RequestType[RequestType["DELETE"] = 3] = "DELETE";
})(RequestType || (RequestType = {}));
class GggHttp {
    static FetchJsonAndLog(url) {
        fetch(url).
            then(res => res.json())
            .then(results => {
            GggCore_1.GggCore.Log(results);
        }).catch(err => {
            GggCore_1.GggCore.Error(err);
        });
    }
    static MakeRequest(requestType, url) {
        var requestTypeString = RequestType[requestType];
        return `This is not a valid request. requestType: ${requestTypeString}`;
    }
    static GetUrlString(url) {
        let result = GggHttp.MakeRequest(RequestType.GET, url);
        return result;
    }
}
exports.GggHttp = GggHttp;
//# sourceMappingURL=GggHttp.js.map