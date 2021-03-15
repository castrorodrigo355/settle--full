import dotEnv from "dotenv";
dotEnv.config();

import "./database/database";
import { init } from "./app";

init();