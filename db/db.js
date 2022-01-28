const knex = require("knex");
const knexfile = require("./knexfile");

const db = knex(knexfile[process.env || 'development']);

const setupDatabase = async () => db.migrate.latest();

module.exports = {db, setupDatabase};