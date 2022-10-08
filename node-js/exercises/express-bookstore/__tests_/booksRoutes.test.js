const request = require("supertest");
const booksRoutes = require("../routes/books");
const Book = require("../models/book");

const app = require("../app");
const db = require("../db");

describe("Books Routes Test", function () {
  beforeEach(async function () {
    await db.query("DELETE FROM books");

    let b1 = await Book.create({
      isbn: "0691161518",
      amazon_url: "http://a.co/eobPtX2",
      author: "Matthew Lane",
      language: "english",
      pages: 264,
      publisher: "Princeton University Press",
      title: "asdsad",
      year: 2017,
    });
  });

  describe("POST /books", function () {
    test("Can save a book", async function () {
      let res = await request(app).post("/books").send({
        isbn: "0691161519",
        amazon_url: "http://a.co/eobPtX2",
        author: "Matthew Lane",
        language: "english",
        pages: 264,
        publisher: "Princeton University Press",
        title: "asdsad",
        year: 2017,
      });

      let book = res.body.book;
      expect(book.isbn).toEqual("0691161519");
    });
  });

  describe("POST /books", function () {
    test("Test wrong data send", async function () {
      let res = await request(app).post("/books").send({
        isbn: "0691161519",
        amazon_url: "http://a.co/eobPtX2",
        author: "Matthew Lane",
        language: "english",
        pages: 264,
        publisher: "Princeton University Press",
      });
      expect(res.text).toEqual(
        '{"error":{"message":["instance requires property \\"title\\"","instance requires property \\"year\\""],"status":400}}'
      );
    });
  });

  describe("PUT /books/:isbn", function () {
    test("Can update a book", async function () {
      let res = await request(app).put("/books/0691161518").send({
        isbn: "0691161518",
        publisher: "SuperTest",
        title: "New Title Test",
        year: 2017,
      });

      let book = res.body.book;
      expect(book.title).toEqual("New Title Test");
      expect(book.publisher).toEqual("SuperTest");
    });
  });

  describe("PUT /books/:isbn", function () {
    test("Test wrong data send", async function () {
      let res = await request(app).put("/books/0691161518").send({
        isbn: "0691161518",
        author: 123456789,
      });
      expect(res.text).toEqual(
        '{"error":{"message":["instance.author is not of a type(s) string"],"status":400}}'
      );
    });
  });
});

afterAll(async function () {
  await db.end();
});
