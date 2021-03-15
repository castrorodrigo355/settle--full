"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const user_controllers_1 = require("../controllers/user.controllers");
const userRoutes = (server) => {
    server.route({
        method: "POST",
        path: "/users",
        handler: user_controllers_1.createUser
    });
    server.route({
        method: "GET",
        path: "/users",
        handler: user_controllers_1.getUsers
    });
    server.route({
        method: "GET",
        path: "/users/{id}",
        handler: user_controllers_1.getUser
    });
    //   server.route({
    //     method: "PUT",
    //     path: "/users/{id}",
    //     handler: updateUser
    //   });
    server.route({
        method: "DELETE",
        path: "/users/{id}",
        handler: user_controllers_1.deleteUser
    });
};
exports.userRoutes = userRoutes;
