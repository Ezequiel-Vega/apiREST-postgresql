import bcrypt from "bcryptjs";

export class Authenticate {
  // Encriptar password
  public async EncryptPassword(password: string): Promise<string> {
    const SALT = await bcrypt.genSalt(10);
    return bcrypt.hash(password, SALT);
  }

  // validar password
  public async ValidatePassword(
    password: string,
    encryptPassword: string = ''
  ): Promise<boolean> {
    return await bcrypt.compare(password, encryptPassword);
  }
}
