const router = require("express").Router();
const Games = require("../data/helpers/gamesModel.js");

router.get("/", async (req, res) => {
  console.log(res.status);
  const games = await Games.getGames();
  res.status(200).json(games);
});

router.post("/", async (req, res) => {
  const game = req.body;
  console.log("New Game", req.body);
  if (game.title === undefined || game.genre === undefined) {
    res.status(400).json({
      message: "Please provide all of the required information for the game."
    });
  } else {
    const { id } = await Games.insert(game);
    const addedGame = await Games.findById(id);
    res.status(201).json(addedGame);
  }
});

module.exports = router;
