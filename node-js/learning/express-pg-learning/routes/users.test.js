process.env.NODE_ENV = "test";
const request = require("supertest");
const app = require("../app");
const db = require("../db");

let testUser;
beforeEach(async () => {
  const result = await db.query(
    `insert into users (name, type) values ('Peanut', 'admin') returning id, name, type`
  );
  testUser = result.rows[0];
});

afterEach(async () => {
  await db.query("delete from users");
});

afterAll(async () => {
  await db.end();
});

describe("Get /users", () => {
  test("Get a list with one user", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ users: [testUser] });
  });
});

describe("Get /users/:id", () => {
  test("Get a single user", async () => {
    const res = await request(app).get(`/users/${testUser.id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ user: testUser });
  });
});

describe("Get /users/:id", () => {
  test("Responds with 404 for invalid id", async () => {
    const res = await request(app).get(`/users/0`);
    expect(res.statusCode).toBe(404);
  });
});

describe("Post /users/", () => {
  test("Create a single user", async () => {
    const res = await request(app)
      .post(`/users`)
      .send({ name: "BillyBob", type: "Staff" });
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({
      user: { id: expect.any(Number), name: "BillyBob", type: "Staff" },
    });
  });
});
