const knex = require("knex");
const knexConfig = require("../knexfile.js");
const dbEnv = process.env.DB_ENV || "development";
// console.log("dbEnv", dbEnv);
const db = knex(knexConfig[dbEnv]);
module.exports = db;
