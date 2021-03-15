import { Server } from "@hapi/hapi";
import { getSymbols } from "../controllers/symbol.controllers";

export const symbolRoutes = (server: Server) => {

    server.route({
    method: "GET",
    path: "/symbols",
    handler: getSymbols
  });

};
