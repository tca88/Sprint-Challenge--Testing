const request = require("supertest");

const db = require("../data/dbConfig.js");
const Server = require("../server.js");

describe("Games Database endpoints", () => {
  // you want items to still be there and make sure things are cleaned up before every test is run.

  it("sets the environment to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("/get", () => {
    it("it should return 200 status code", async () => {
      // use the squad
      const res = await request(Server).get("/api/games");
      // console.log(res);
      expect(res.status).toBe(200);
    });

    it("it should return a JSON object", async () => {
      // use the squad
      const res = await request(Server).get("/api/games");
      // console.log(res);
      //   console.log(res.headers);
      expect(res.headers["content-type"]).toMatch(/json/i);
    });

    it("it should return the list of games in the database", async () => {
      const expected = {
        id: 1,
        title: "Test",
        genre: "Test-Genre",
        releaseYear: 2001
      };
      const res = await request(Server).get("/api/games");
      const firstObj = res.body[0];
      // console.log(res);
      //   console.log(res.headers);
      expect(res.body[0]).toEqual(expected);
      expect(firstObj.title).toMatch(/test/i);
    });
  });

  describe("/post", () => {
    beforeAll(async () => {
      await db("games").truncate();
    });

    afterEach(async () => {
      await db("games").truncate();
    });

    it("it should return 201 status code", async () => {
      // use the squad
      const body = {
        id: 4,
        title: "Test2",
        genre: "Test-Genre2",
        releaseYear: 2000
      };
      const res = await request(Server)
        .post("/api/games")
        .send(body);

      // console.log(res);
      expect(res.status).toBe(201);
    });

    it("it should return a JSON object", async () => {
      const body = {
        id: 4,
        title: "Test2",
        genre: "Test-Genre2",
        releaseYear: 2000
      };
      const res = await request(Server)
        .post("/api/games")
        .send(body);
      // console.log(res);
      //   console.log(res.headers);
      expect(res.headers["content-type"]).toMatch(/json/i);
    });

    it("it should return the body", async () => {
      const body = {
        id: 4,
        title: "Test2",
        genre: "Test-Genre2",
        releaseYear: 2000
      };
      const res = await request(Server)
        .post("/api/games")
        .send(body);
      // console.log(res);
      //   console.log(res.headers);
      expect(res.body).toEqual(body);
    });
  });
});
