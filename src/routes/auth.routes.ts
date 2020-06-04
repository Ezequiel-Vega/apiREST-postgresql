import { Router } from "express";
import { authController } from "../controllers/Auth.controller";

class AuthRoutes {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.post("/signUp", authController.SignUp);
    this.router.post("/signIn", authController.SignIn);
  }
}

const authRoutes: AuthRoutes = new AuthRoutes();
export default authRoutes.router;
