const db = require("../dbConfig.js");

module.exports = {
  insert,
  getGames,
  findById
};

function getGames() {
  return db("games");
}

function insert(game) {
  // passing 'id' as the second parameter is recommended to ensure the id is returned
  // when connecting to other database management systems like Postgres
  return db("games")
    .insert(game, "id")
    .then(([id]) => {
      return findById(id);
    });
}

function findById(id) {
  return db("games")
    .where({ id })
    .first();
}
