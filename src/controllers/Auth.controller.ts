import { Request, Response } from "express";
import { Authenticate } from "../lib/Authenticate.lib";
import jwt from "jsonwebtoken";
import { querysUser } from '../lib/querys/QuerysUser.lib';

class AuthController extends Authenticate {
  constructor() {
    super();
  }

  // Funcion para el registro de usuarios
  async SignUp(req: Request, res: Response) {
    // Obtener los datos enviados
    const data = req.body;

    // Variables globales
    const errors: Array<object> = new Array();

    // Verificacion de parametros
    /// la contraseña tiene mas de 4 caracteres
    if (data.password.length < 4) {
      const error = {
        msg: "La contraseña tiene que tener mas de 4 caracteres",
      };
      errors.push(error);
    }

    /// comprueba si tiene algun error
    if (errors.length > 0) {
      res.status(400).send(errors);
    } else {
      const saveUser = await querysUser.SaveUser(data);
      if (saveUser) {
        res.status(200).json(saveUser);
      } else {
        res.status(400).json({ msg: 'Ya existe una cuenta con este email!' })
      }
    }
  }

  // Funcion para el Log In de usuarios
  async SignIn(req: Request, res: Response) {
    // Obtener los datos enviados
    const data = req.body;

    // Compruebo si existe el usuario
    const user = JSON.parse(JSON.stringify(await querysUser.FindUserEmail(data.email)));
    if (user) {
      // Verifico la contraseña
      const match = await super.ValidatePassword(data.password, user.password);
      if (match) {
        // Creacion de token
        const token: string = jwt.sign(
          { id: user.id }, // datos a encriptar
          process.env.SECRET_TOKEN || "secrettoken", // clave de token secreta
          { expiresIn: 60 * 60 * 21 } // Fijar expiracion
        );

        // Enviar token
        res.header("token", token).json(user);
      } else {
        res.status(400).json({ msg: "La contraseña es incorrecta!" });
      }
    } else {
      res.status(400).json({ msg: "Este usuario no esta registrado!" });
    }
  }
}

export const authController: AuthController = new AuthController();
