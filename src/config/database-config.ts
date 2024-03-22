import 'dotenv/config';
import { DataSourceOptions } from 'typeorm';

const databaseConfig: DataSourceOptions = {
  type: 'mariadb',
  host: 'localhost',
  port: parseInt(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/user/entities/**/*{.js,.ts}'],
  migrations: ['dist/migrations'],
  migrationsTableName: 'user_migrations',
  synchronize: true,
};

export default databaseConfig;
