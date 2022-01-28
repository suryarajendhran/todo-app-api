const path = require('path');

const migrationsDirPath = path.join(__dirname, './migrations');

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    asyncStackTraces: true,
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: 'secret',
      database: 'postgres',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: migrationsDirPath
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: migrationsDirPath
    }
  }

};
