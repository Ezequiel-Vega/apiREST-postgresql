import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import cors from "cors";

// Importar rutas
import AuthRoutes from "./routes/auth.routes";
import PostRoutes from "./routes/post.routes";

// Inicializaciones
import { tokenValidate } from "./lib/ValidateToken.lib";

export class Server {
  private app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    this.middlewares();
    this.routes();
  }

  private config() {
    this.app.set("port", process.env.PORT || 3000);
  }

  private middlewares() {
    this.app.use(helmet());
    this.app.use(morgan("dev"));
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use("/api/v1/auth", AuthRoutes);
    this.app.use("/api/v1/post", tokenValidate.tokenValidate, PostRoutes);
  }

  start() {
    this.app.listen(this.app.get("port"), () => {
      console.log("Server on port", this.app.get("port"));
    });
  }
}
