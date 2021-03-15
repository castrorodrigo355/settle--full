"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.latestRoutes = void 0;
const latest_controllers_1 = require("../controllers/latest.controllers");
const latestRoutes = (server) => {
    server.route({
        method: "GET",
        path: "/latest",
        handler: latest_controllers_1.getLatest
    });
    server.route({
        method: "GET",
        path: "/latest/{base}",
        handler: latest_controllers_1.getLatestByBase
    });
    server.route({
        method: "GET",
        path: "/latest/{base}/{symbols}",
        handler: latest_controllers_1.getCurrencyLatestByBase
    });
};
exports.latestRoutes = latestRoutes;
