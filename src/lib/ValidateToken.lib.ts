import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface IPayload {
  id: string;
  iat: number;
  exp: number;
}

class TokenValidate {
  // Validacion del token
  async tokenValidate(req: Request, res: Response, next: NextFunction) {
    // Obtener token
    const token = req.header("token");
    // Compruebo si no existe el token
    if (!token) return res.status(401).json("Acceso denegado");

    // Crear Payload
    const payload = jwt.verify(
      token,
      process.env.SECRET_TOKEN || "secrettoken"
    ) as IPayload;

    // Envio el Id por request
    req.userId = payload.id;

    // Sigiente funcion
    next();
  }
}

export const tokenValidate = new TokenValidate();
