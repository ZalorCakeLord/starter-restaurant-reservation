const environment = process.env.NODE_ENV || "development";
let config = require("../../knexfile")[environment];
if(environment === "development") {
    config = process.env.DATABASE_URL_DEVELOPMENT
}
const knex = require("knex")(config);

module.exports = knex;
