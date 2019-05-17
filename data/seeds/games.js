exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("games")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("games").insert([
        { id: 1, title: "Fortnite", genre: "Survival", releaseYear: 2017 }
      ]);
    });
};
