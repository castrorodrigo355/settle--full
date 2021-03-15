"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateRoutes = void 0;
const rate_middlewares_1 = require("../middlewares/rate.middlewares");
const rate_controllers_1 = require("../controllers/rate.controllers");
const rateRoutes = (server) => {
    server.route({
        method: "GET",
        path: "/rates",
        handler: rate_controllers_1.getRates
    });
    server.route({
        method: "POST",
        path: "/rates",
        options: rate_middlewares_1.validateRate,
        handler: rate_controllers_1.createRate
    });
};
exports.rateRoutes = rateRoutes;
