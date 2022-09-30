const db = require("../db");
const ExpressError = require("../expressError");

class Cat {
  static async getAll() {
    const results = await db.query(`
    select id, name, age 
    from cats`);
    return results.rows;
  }

  static async getById(id) {
    const results = await db.query(
      `
    select id, name, age
    from cats
    where id=$1`,
      [id]
    );
    if (results.rows.length === 0)
      throw new ExpressError(`Cat not found!`, 404);

    return results.rows[0];
  }

  static async create(name, age) {
    if (!name || !age) throw new ExpressError("Missing require data", 400);

    const results = await db.query(
      `
    insert into cats
    (name, age)
    values
    ($1, $2) 
    returning id, name, age`,
      [name, age]
    );
    return results.rows[0];
  }

  static async delete(id) {
    const results = await db.query(
      `
    delete from cats where id = $1
    returning id`,
      [id]
    );
    if (results.rows.length === 0)
      throw new ExpressError(`Cat not found!`, 404);
  }

  static async update(id, newName, newAge) {
    const results = await db.query(
      `
    update cats
    set name = $1, age =$2
    where id = $3
    returning id, name, age`,
      [newName, newAge, id]
    );
    if (results.rows.length === 0)
      throw new ExpressError(`Cat not found!`, 404);

    return results.rows[0];
  }

  static async makeOlder(id, newName, newAge) {
    const results = await db.query(
      `
    update cats
    set age = age + 1
    where id = $1
    returning id, name, age`,
      [id]
    );
    if (results.rows.length === 0)
      throw new ExpressError(`Cat not found!`, 404);

    return results.rows[0];
  }
}

module.exports = Cat;
