"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// used to parse the form data that you pass in the request
const bodyParser = __importStar(require("body-parser"));
// imports all routes from routes module
const routes_1 = __importDefault(require("./routes"));
// cors is using to resolve CORS
const cors_1 = __importDefault(require("cors"));
class App {
    constructor() {
        // run the express instance and store in app
        this.app = express_1.default();
        this.config();
    }
    config() {
        // enable cors by adding cors middleware
        this.app.use(cors_1.default());
        // support application/json type post data
        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // add routes
        this.app.use("/api/v1", routes_1.default);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map