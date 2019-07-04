"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
// create get method which will return city weather status.
router.get("/:city", (req, res) => {
    const city = req.params.city;
    if (!city) {
        return res.status(400).json({
            error: true,
            messsage: "city name should be filled :("
        });
    }
    let result;
    let resultNotFound = false;
    switch (city.toLowerCase()) {
        case "nyc":
            result = { degree: "18C", status: "foggy" };
            break;
        case "stockholm":
            result = { degree: "8C", status: "windy" };
            break;
        case "san-francisco":
            result = { degree: "14C", status: "rainy" };
            break;
        case "tokyo":
            result = { degree: "21C", status: "sunny" };
            break;
        default:
            resultNotFound = true;
    }
    if (resultNotFound) {
        return res.json({
            error: true,
            messsage: "city name not found in DB :("
        });
    }
    else {
        return res.json(result);
    }
});
exports.default = router;
//# sourceMappingURL=weather.js.map