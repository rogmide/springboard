const db = require("../db");
const ExpressError = require("../expressError");

class Dog {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  static async getAll() {
    const results = await db.query(
      `
    select id, name, age 
    from dogs`
    );
    const dogs = results.rows.map((r) => new Dog(r.id, r.name, r.age));
    return dogs;
  }

  static async getById(id) {
    const results = await db.query(
      `
    select id, name, age
    from dogs
    where id=$1`,
      [id]
    );
    if (results.rows.length === 0)
      throw new ExpressError(`Dog not found!`, 404);

    const d = results.rows[0];
    return new Dog(d.id, d.name, d.age);
  }

  static async create(newname, newage) {
    if (!newname || !newage)
      throw new ExpressError("Missing require data", 400);

    const results = await db.query(
      `
    insert into dogs
    (name, age)
    values
    ($1, $2) 
    returning id, name, age`,
      [newname, newage]
    );
    const d = results.rows[0];
    return new Dog(d.id, d.name, d.age);
  }

  async remove() {
    await db.query(
      `
    delete from dogs
    where id = $1`,
      [this.id]
    );
  }

  async save() {
    const results = await db.query(
      `
    update dogs
    set name = $1, age = $2
    where id = $3
    `,
      [this.name, this.age, this.id]
    );
  }

  speak() {
    console.log(`${this.name} says woof!!!`);
  }
}

module.exports = Dog;
