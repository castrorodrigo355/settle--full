import { Server } from "@hapi/hapi";
import { getLatest, getLatestByBase , getCurrencyLatestByBase } from "../controllers/latest.controllers";

export const latestRoutes = (server: Server) => {

    server.route({
      method: "GET",
      path: "/latest",
      handler: getLatest
    });

    server.route({
      method: "GET",
      path: "/latest/{base}",
      handler: getLatestByBase
    });

    server.route({
      method: "GET",
      path: "/latest/{base}/{symbols}",
      handler: getCurrencyLatestByBase
    });

};
