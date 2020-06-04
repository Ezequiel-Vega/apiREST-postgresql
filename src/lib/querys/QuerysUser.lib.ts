import { getRepository } from 'typeorm';
import { Users } from '../../models/User.models';
import { Authenticate } from '../Authenticate.lib';

class QuerysUser extends Authenticate {
  constructor() {
    super();
  }

  async FindUserId(id: number) {
    // Busco si existe el usuario
    const user = await getRepository(Users).findOne({ id: id });
    // Si no existe envio un mensaje de error
    if (!user) return null
    // Retorno el usuario
    return user
  }

  async FindUserEmail(Email: string) {
    // Busco si existe el usuario
    const user = await getRepository(Users).findOne({ email: Email });
    // Si no existe envio un mensaje de error
    if (!user) {
      return null
    } else {
      // Retorno el usuario
      return user
    }
  }

  async SaveUser(data: any) {
    // Comprobar si existe el usuario
    const user = await getRepository(Users).findOne({ email: data.email });
    if (!user) {
      // Encriptar la contraseña
      const password = await super.EncryptPassword(data.password);
      // Creo el schema del usuario
      const dataUser = {
        username: data.username,
        password: password,
        email: data.email
      }
      // Guardo al usuario
      const newUser = getRepository(Users).create(dataUser);
      const saveUser = await getRepository(Users).save(newUser);
      return saveUser;
    } else {
      return null
    }
  }
}

export const querysUser: QuerysUser = new QuerysUser();