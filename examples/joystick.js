
var GameController = require('../gamecontroller.js');

var gc = new GameController('ps2');

gc.connect();

gc.on('JOYL:move', function(o) {
  console.log(o);
});
