import 'reflect-metadata';
import { createConnection } from 'typeorm';

const connection = async () => await createConnection({
  type: 'postgres',
  host: process.env.HOST_DATABASE || 'localhost',
  port: 5432,
  username: process.env.USER_DATABASE || 'postgresql',
  password: process.env.PASSWORD_DATABASE || 'root',
  database: process.env.NAME_DATABASE || 'test',
  synchronize: true,
  entities: ['dist/models/**/*.js'],
  migrations: ['dist/migrations/**/*.js'],
  cli: {
    migrationsDir: '/dist/migrations'
  }
});

connection()
  .then(() => console.log('Database is connected!'))
  .catch(err => console.log(err));