let environment = process.env.NODE_ENV || "development";
if(process.env.DATABASE_URL_DEVELOPMENT) environment = "development";
let config = require("../../knexfile")[environment];
const knex = require("knex")(config);

module.exports = knex;
