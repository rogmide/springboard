process.env.NODE_ENV = "test";

const request = require("supertest");

const app = require("../app");
let items = require("../fakeDb");

//################################################
// CLEAR ITEMS HAS 2 VALUES BY DEFAULT
items.length = 0;

let gasCooker = { name: "Gas_Cooker" };

beforeEach(function () {
  items.push(gasCooker);
});

afterEach(function () {
  items.length = 0;
});

//################################################
// TEST GET ALL ITEMS
describe("GET /items", function () {
  test("Gets a list of items", async function () {
    const resp = await request(app).get(`/items`);
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({ items: [gasCooker] });
  });
});

//################################################
// TEST GET A ITEM BY NAME
describe("GET /items/:name", function () {
  test("Gets a single item", async function () {
    const resp = await request(app).get(`/items/${gasCooker.name}`);
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({ item: gasCooker });
  });
  test("Responds with 404 if can't find cat", async function () {
    const resp = await request(app).get(`/items/nada`);
    expect(resp.statusCode).toBe(404);
  });
});

//################################################
// TEST ADD A ITEM
describe("POST /items", function () {
  test("Creates a new item", async function () {
    const resp = await request(app).post(`/items`).send({
      name: "MacBook Pro",
    });
    expect(resp.statusCode).toBe(201);
    expect(resp.body).toEqual({
      added: { name: "MacBook Pro" },
    });
  });
});

//################################################
// TEST UPDATE A ITEM
describe("PATCH /items/:name", function () {
  test("Updates a single item", async function () {
    const resp = await request(app).patch(`/items/${gasCooker.name}`).send({
      name: "Wood Cooker",
    });
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({
      updated: { name: "Wood Cooker" },
    });
  });
  test("Responds with 404 if id invalid", async function () {
    const resp = await request(app).patch(`/items/nada`);
    expect(resp.statusCode).toBe(404);
  });
});

//################################################
// TEST DELETE A ITEM
describe("DELETE /items/:name", function () {
  test("Deletes a single a item", async function () {
    const resp = await request(app).delete(`/items/${gasCooker.name}`);
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({ message: "Deleted" });
  });
});
