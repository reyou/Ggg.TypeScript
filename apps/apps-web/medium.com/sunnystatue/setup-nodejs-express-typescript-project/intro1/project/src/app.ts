import express from "express";
// used to parse the form data that you pass in the request
import * as bodyParser from "body-parser";
// imports all routes from routes module
import routes from "./routes";
// cors is using to resolve CORS
import cors from "cors";
class App {
  public app: express.Application;
  constructor() {
    // run the express instance and store in app
    this.app = express();
    this.config();
  }
  private config(): void {
    // enable cors by adding cors middleware
    this.app.use(cors());
    // support application/json type post data
    this.app.use(bodyParser.json());
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
    // add routes
    this.app.use("/api/v1", routes);
  }
}
export default new App().app;
