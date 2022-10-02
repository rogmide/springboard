/** Database setup for BizTime. */

const { Client } = require("pg");

let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = "postgresql:///express_auth_test";
} else {
  DB_URI = "postgresql:///express_auth";
}

let db = new Client({
  connectionString: DB_URI,
});

db.connect();

module.exports = db;
