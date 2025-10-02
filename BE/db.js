// db.js
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "BB",
  password: "ilvdbms", 
  port: 5432,
});

// Test connection
pool.connect()
  .then(client => {
    console.log("Connected to PostgreSQL database");
    client.release(); // release back to pool
  })
  .catch(err => {
    console.error("Connection error:", err.stack);
  });

module.exports = pool;
