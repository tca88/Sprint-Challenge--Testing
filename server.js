const express = require("express");
const helmet = require("helmet");
const server = express();

const gamesModelRoute = require("./routes/games-routes.js");

server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
  res.send("It's alive!");
});

server.use("/api/games", gamesModelRoute);

module.exports = server;
