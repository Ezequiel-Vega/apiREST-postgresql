// Importar variables de entorno
import dotenv from "dotenv";
dotenv.config();

// Iniciar Base de datos
import "./config/database";

// Importar servidor
import { Server } from "./server";
// Configruar servidor
const server: Server = new Server();
// Iniciar servidor
server.start();
