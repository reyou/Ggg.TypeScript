"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// *added* import for weather route
const weather_1 = __importDefault(require("./weather"));
const router = express_1.Router();
// *change here to address routes*
router.use("/weather", weather_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map