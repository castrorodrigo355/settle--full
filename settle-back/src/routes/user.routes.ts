import { Server } from "@hapi/hapi";
import { validateGetUser } from "../middlewares/user.middlewares";
// import Joi from "joi";

import {
  createUser,
  getUsers,
  getUser,
  getDataSettle,
//   updateUser,
  deleteUser
} from "../controllers/user.controllers";

export const userRoutes = (server: Server) => {

    server.route({
    method: "GET",
    path: "/settle",
    handler: getDataSettle
  });

  server.route({
    method: "POST",
    path: "/users",
    handler: createUser
  });

  server.route({
    method: "GET",
    path: "/users",
    // options: validateGetUser,
    handler: getUsers
  });

  server.route({
    method: "GET",
    path: "/users/{id}",
    handler: getUser
  });

//   server.route({
//     method: "PUT",
//     path: "/users/{id}",
//     handler: updateUser
//   });

  server.route({
    method: "DELETE",
    path: "/users/{id}",
    handler: deleteUser
  });
};
