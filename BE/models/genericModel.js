const pool = require("../db");

class GenericModel {
  constructor(tableName, primaryKey) {
    this.tableName = `"${tableName}"`; // PostgreSQL is case-sensitive
    this.primaryKey = primaryKey;
  }

  async getAll() {
    const result = await pool.query(`SELECT * FROM ${this.tableName}`);
    return result.rows;
  }

  async getById(id) {
    const result = await pool.query(
      `SELECT * FROM ${this.tableName} WHERE ${this.primaryKey} = $1`,
      [id]
    );
    return result.rows[0];
  }

  async create(data) {
    const columns = Object.keys(data).map((col) => `"${col}"`).join(", ");
    const values = Object.values(data);
    const placeholders = values.map((_, i) => `$${i + 1}`).join(", ");

    const result = await pool.query(
      `INSERT INTO ${this.tableName} (${columns}) VALUES (${placeholders}) RETURNING *`,
      values
    );
    return result.rows[0];
  }

  async update(id, data) {
    const columns = Object.keys(data);
    const values = Object.values(data);
    const setString = columns.map((col, i) => `"${col}" = $${i + 1}`).join(", ");

    const result = await pool.query(
      `UPDATE ${this.tableName} SET ${setString} WHERE ${this.primaryKey} = $${columns.length + 1} RETURNING *`,
      [...values, id]
    );
    return result.rows[0];
  }

  async remove(id) {
    await pool.query(`DELETE FROM ${this.tableName} WHERE ${this.primaryKey} = $1`, [id]);
    return { message: `${this.tableName} deleted successfully` };
  }
}

module.exports = GenericModel;
