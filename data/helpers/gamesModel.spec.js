const db = require("../dbConfig.js");
const gamesModel = require("./gamesModel.js");

describe("test environment is working", () => {
  it("test", () => {
    //   await Database.insert({ name: "test" });

    //   const database = await db("database");

    //   expect(database).toHaveLength(1);
    expect(process.env.DB_ENV).toBe("testing");
  });
});

describe("games model", () => {
  //   before any test happens, you're deleting the database.
  beforeAll(async () => {
    await db("games").truncate(); // wait for the table to delete everything inside of it.
  });
  //   // after each test, wait for the table to delete.
  //   afterEach(async () => {
  //     await db("games").truncate();
  //   });

  describe("insert()", () => {
    it("should insert provided data", async () => {
      await gamesModel.insert({
        title: "Test",
        genre: "Test-Genre",
        releaseYear: 2001
      });

      const games = await db("games");

      expect(games).toHaveLength(1);
    });

    // it("should insert provided data", async () => {
    //   let data = await Database.insert({ name: "trishna" });
    //   expect(data.name).toBe("trishna");

    //   data = await Database.insert({ name: "rick" });
    //   expect(data.name).toBe("rick");

    //   const database = await db("database");

    //   expect(database).toHaveLength(2);
    // });
  });
});
