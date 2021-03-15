"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.symbolRoutes = void 0;
const symbol_controllers_1 = require("../controllers/symbol.controllers");
const symbolRoutes = (server) => {
    server.route({
        method: "GET",
        path: "/symbols",
        handler: symbol_controllers_1.getSymbols
    });
};
exports.symbolRoutes = symbolRoutes;
