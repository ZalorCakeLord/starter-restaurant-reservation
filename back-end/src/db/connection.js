const environment = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[environment];
if(environment === "development") {
    config = process.env.DATABASE_URL_DEVELOPMENT
}
const knex = require("knex")(config);

module.exports = knex;
