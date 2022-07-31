const environment = process.env.NODE_ENV || "development";
let config = require("../../knexfile")[environment];
const knex = require("knex")(config);

module.exports = knex;
