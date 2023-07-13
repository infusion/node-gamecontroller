var GameController = require("../gamecontroller.js");

var gc = new GameController("gamesir-g4s");

gc.connect();

gc.on("X:press", function () {
  console.log("A Pressed");
});

gc.on("X:release", function () {
  console.log("A Released");
});

gc.on("error", function (err) {
  console.error(err);
});
