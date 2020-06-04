import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  public id: number

  @Column()
  public username: string

  @Column()
  public password: string

  @Column()
  public email: string
}