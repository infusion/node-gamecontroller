var GameController = require("../gamecontroller.js");

var gc = new GameController("gamesir-g4s");

gc.connect();

gc.on("JOYR:move", function (o) {
  console.log(o);
});
