import { Server } from "@hapi/hapi";
import { validateRate } from "../middlewares/rate.middlewares";
import { createRate, getRates } from "../controllers/rate.controllers";

export const rateRoutes = (server: Server) => {

    server.route({
      method: "GET",
      path: "/rates",
      handler: getRates
    });

     server.route({
      method: "POST",
      path: "/rates",
      options: validateRate,
      handler: createRate
  });

};
