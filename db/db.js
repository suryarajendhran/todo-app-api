const knex = require("knex");
const knexfile = require("./knexfile");

const db = knex(
  knexfile[process.env.NODE_ENV === "production" ? "production" : "development"]
);

const setupDatabase = async () => db.migrate.latest();

module.exports = { db, setupDatabase };
