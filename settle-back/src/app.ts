import { Server } from "@hapi/hapi";
import { userRoutes } from "./routes/user.routes";
import { rateRoutes } from "./routes/rate.routes";
import { latestRoutes } from "./routes/latest.routes";
import { symbolRoutes } from "./routes/symbol.routes";

export const init = async () => {
	const server: Server = new Server({
		port: 5000,
		host: "localhost",
        routes: {
            cors: true,
        }
	});

    userRoutes(server)
    symbolRoutes(server)
    latestRoutes(server)
    rateRoutes(server)

	await server.start();
    console.log("Server running on %s", server.info.uri);
}

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(0);
});