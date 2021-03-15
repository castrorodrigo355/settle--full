"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const hapi_1 = require("@hapi/hapi");
const user_routes_1 = require("./routes/user.routes");
const rate_routes_1 = require("./routes/rate.routes");
const latest_routes_1 = require("./routes/latest.routes");
const symbol_routes_1 = require("./routes/symbol.routes");
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    const server = new hapi_1.Server({
        port: 5000,
        host: "localhost",
        routes: {
            cors: true,
        }
    });
    user_routes_1.userRoutes(server);
    symbol_routes_1.symbolRoutes(server);
    latest_routes_1.latestRoutes(server);
    rate_routes_1.rateRoutes(server);
    yield server.start();
    console.log("Server running on %s", server.info.uri);
});
exports.init = init;
process.on("unhandledRejection", err => {
    console.log(err);
    process.exit(0);
});
