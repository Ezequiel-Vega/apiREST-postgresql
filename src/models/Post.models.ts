import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Posts {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({ length: 20 })
  public title: string

  @Column({ length: 500 })
  public post: string

  @Column('time')
  public date: Date
}