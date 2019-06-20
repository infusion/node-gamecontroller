
module.exports = {
  "ps2": {
    "vendorId": 3727,
    "productId": 3,
    "state": {
      "button:T": 0,
      "button:O": 0,
      "button:X": 0,
      "button:S": 0,
      
      "button:L1": 0,
      "button:R1": 0,
      "button:L2": 0,
      "button:R2": 0,
      
      "axis:LY": 0,
      "axis:LX": 0,
      "axis:RY": 0,
      "axis:RX": 0,
      
      "button:Up": 0,
      "button:Right": 0,
      "button:Down": 0,
      "button:Left": 0,
      
      "button:Start": 0,
      "button:Select": 0
    },
    "prev": {// Simple copy of state
      "button:T": 0,
      "button:O": 0,
      "button:X": 0,
      "button:S": 0,
      
      "button:L1": 0,
      "button:R1": 0,
      "button:L2": 0,
      "button:R2": 0,
      
      "axis:LY": 0,
      "axis:LX": 0,
      "axis:RY": 0,
      "axis:RX": 0,
      
      "button:Up": 0,
      "button:Right": 0,
      "button:Down": 0,
      "button:Left": 0,
      
      "button:Start": 0,
      "button:Select": 0
    },
    "update": function(data) {
      
      var state = this.state;
      
      state['button:T'] = data[5] >> 4 & 1;
      state['button:O'] = data[5] >> 5 & 1;
      state['button:X'] = data[5] >> 6 & 1;
      state['button:S'] = data[5] >> 7 & 1;
      
      state['button:L1'] = data[6] >> 0 & 1;
      state['button:R1'] = data[6] >> 1 & 1;
      state['button:L2'] = data[6] >> 2 & 1;
      state['button:R2'] = data[6] >> 3 & 1;
      
      state['axis:JOYL:Y'] = data[3];
      state['axis:JOYL:X'] = data[2];
      state['axis:JOYR:Y'] = data[1];
      state['axis:JOYR:X'] = data[0];
      
      state['button:Up'] = data[7] >> 0 & 1;
      state['button:Right'] = data[7] >> 1 & 1;
      state['button:Down'] = data[7] >> 2 & 1;
      state['button:Left'] = data[7] >> 3 & 1;
      
      state['button:Start'] = data[6] >> 5 & 1;
      state['button:Select'] = data[6] >> 4 & 1;
      
      return state;
    },
    "setRumble": function() {
      
    },
    "setLED": function(led, val) {
      
    }
  },
  "xbox360": {
    "vendorId": 1118,
    "productId": 654,
    "state": {
      
    },
    "prev": {// Simple copy of state
      
    },
    "update": function(data) {
      
      var state = this.state;
      
      return state;
    },
    "setRumble": function() {
      
    },
    "setLED": function(led, val) {
      
    }
  },
  "xbox360-guitar-xplorer" : {
    "vendorId": 5168,
    "productId": 18248,
    "state": {
      // Frets
      "button:G": 0,
      "button:R": 0,
      "button:Y": 0,
      "button:B": 0,
      "button:O": 0,
      
      // 8 directional D-pad
      "button:N": 0,
      "button:NE": 0,
      "button:E": 0,
      "button:SE": 0,
      "button:S": 0,
      "button:SW": 0,
      "button:W": 0,
      "button:NW": 0,
      
      "button:Start": 0,
      "button:Select": 0,
    },
    "prev": {// Simple copy of state
      // Frets
      "button:G": 0,
      "button:R": 0,
      "button:Y": 0,
      "button:B": 0,
      "button:O": 0,
      
      // 8 directional D-pad
      "button:N": 0,
      "button:NE": 0,
      "button:E": 0,
      "button:SE": 0,
      "button:S": 0,
      "button:SW": 0,
      "button:W": 0,
      "button:NW": 0,
      
      "button:Start": 0,
      "button:Select": 0,
    },
    "update": function(data) {
      
      var state = this.state;
      
      state['button:G'] = data[6] >> 0 & 1;
      state['button:R'] = data[6] >> 1 & 1;
      state['button:B'] = data[6] >> 2 & 1;
      state['button:Y'] = data[6] >> 3 & 1;
      state['button:O'] = data[6] >> 4 & 1;
      
      data[8] = data[8] % 80;
      state['button:N'] = +(data[8] === 17);
      state['button:NE'] = +(data[8] === 18);
      state['button:E'] = +(data[8] === 19);
      state['button:SE'] = +(data[8] === 20);
      state['button:S'] = +(data[8] === 21);
      state['button:SW'] = +(data[8] === 22);
      state['button:W'] = +(data[8] === 23);
      state['button:NW'] = +(data[8] === 24);

      state['button:Start'] = data[6] >> 6 & 1;
      state['button:Select'] = data[6] >> 7 & 1;
      
      state['axis:GUITAR:X'] = data[0];
      state['axis:GUITAR:Y'] = data[1];
      state['axis:WHAMMY:X'] = data[2];
      state['axis:WHAMMY:Y'] = data[3];
      
      return state;
    },
    "setRumble": function() {
      
    },
    "setLED": function(led, val) {
      
    }
  },
  "snes-tomee": {
    "vendorId": 4797,
    "productId": 53269,
    "state": {
      "button:X": 0,
      "button:A": 0,
      "button:B": 0,
      "button:Y": 0,
      "button:L": 0,
      "button:R": 0,
      
      "button:Up": 0,
      "button:Right": 0,
      "button:Down": 0,
      "button:Left": 0,
      
      "button:Start": 0,
      "button:Select": 0
    },
    "prev": {// Simple copy of state
      "button:X": 0,
      "button:A": 0,
      "button:B": 0,
      "button:Y": 0,
      "button:L": 0,
      "button:R": 0,
      
      "button:Up": 0,
      "button:Right": 0,
      "button:Down": 0,
      "button:Left": 0,
      
      "button:Start": 0,
      "button:Select": 0
    },
    "update": function(data) {
      
      var state = this.state;
      
      state["button:X"] = data[3] >> 0 & 1;
      state["button:A"] = data[3] >> 1 & 1;
      state["button:B"] = data[3] >> 2 & 1;
      state["button:Y"] = data[3] >> 3 & 1;
      state["button:L"] = data[3] >> 4 & 1;
      state["button:R"] = data[3] >> 5 & 1;
      
      state["button:Left"] = +(data[0] === 0);
      state["button:Right"] = +(data[0] === 255);
      state["button:Up"] = +(data[1] === 0);
      state["button:Down"] = +(data[1] === 255);
      
      state["button:Start"] = data[4] >> 0 & 1;
      state["button:Select"] = data[4] >> 1 & 1;
      
      return state;
    },
    "setRumble": function() {
      
    },
    "setLED": function(led, val) {
      
    }
  },
  "snes-retrolink": {
    "vendorId": 121,
    "productId": 17,
    "state": {
      "button:X": 0,
      "button:A": 0,
      "button:B": 0,
      "button:Y": 0,
      "button:L": 0,
      "button:R": 0,
      
      "button:Up": 0,
      "button:Right": 0,
      "button:Down": 0,
      "button:Left": 0,
      
      "button:Start": 0,
      "button:Select": 0
    },
    "prev": {// Simple copy of state
      "button:X": 0,
      "button:A": 0,
      "button:B": 0,
      "button:Y": 0,
      "button:L": 0,
      "button:R": 0,
      
      "button:Up": 0,
      "button:Right": 0,
      "button:Down": 0,
      "button:Left": 0,
      
      "button:Start": 0,
      "button:Select": 0
    },
    "update": function(data) {
      
      var state = this.state;
      
      state["button:X"] = data[5] === 31;
      state["button:A"] = data[5] === 47;
      state["button:B"] = data[5] === 79;
      state["button:Y"] = data[5] === 143;
      state["button:L"] = data[6] >> 0 & 1;
      state["button:R"] = data[6] >> 1 & 1;
      
      state["button:Left"] = +(data[3] === 0);
      state["button:Right"] = +(data[3] === 255);
      state["button:Up"] = +(data[4] === 0);
      state["button:Down"] = +(data[4] === 255);
      
      state["button:Start"] = data[6] >> 5 & 1;
      state["button:Select"] = data[6] >> 4 & 1;
      
      return state;
    },
    "setRumble": function() {
      
    },
    "setLED": function(led, val) {
      
    }
  },
  "ps4-gen2": { //Written to work over USB connection, limited Bluetooth support. productId for gen1: 1476, should work the same
    "vendorId": 1356,
    "productId": 2508,
    "state": {
      "axis:LY": 0,
      "axis:LX": 0,
      "axis:RY": 0,
      "axis:RX": 0,
      
      "button:Up": 0,
      "button:UpRight": 0,
      "button:Right": 0,
      "button:DownRight": 0,
      "button:Down": 0,
      "button:DownLeft": 0,
      "button:Left": 0,
      "button:UpLeft": 0,

      "button:S": 0,
      "button:X": 0,
      "button:O": 0,
      "button:T": 0,
      
      "button:L1": 0,
      "button:R1": 0,
      "button:L2": 0,
      "button:R2": 0,

      "button:Share": 0,
      "button:Options": 0,

      "button:L3": 0,
      "button:R3": 0,

      "button:PS": 0,
      "button:Touchpad": 0
    },
    "prev": {// Simple copy of state
      "axis:LY": 0,
      "axis:LX": 0,
      "axis:RY": 0,
      "axis:RX": 0,
      
      "button:Up": 0,
      "button:UpRight": 0,
      "button:Right": 0,
      "button:DownRight": 0,
      "button:Down": 0,
      "button:DownLeft": 0,
      "button:Left": 0,
      "button:UpLeft": 0,

      "button:S": 0,
      "button:X": 0,
      "button:O": 0,
      "button:T": 0,
      
      "button:L1": 0,
      "button:R1": 0,
      "button:L2": 0,
      "button:R2": 0,

      "button:Share": 0,
      "button:Options": 0,

      "button:L3": 0,
      "button:R3": 0,

      "button:PS": 0,
      "button:Touchpad": 0
    },
    "update": function(data) {
      
      var state = this.state;
      
      state['axis:JOYL:Y'] = data[1];
      state['axis:JOYL:X'] = data[2];
      state['axis:JOYR:Y'] = data[3];
      state['axis:JOYR:X'] = data[4];

      state['button:Up'] = +((data[5] & 0x0F) === 0);
      state['button:UpRight'] = +((data[5] & 0x0F) === 1);
      state['button:Right'] = +((data[5] & 0x0F) === 2);
      state['button:DownRight'] = +((data[5] & 0x0F) === 3);
      state['button:Down'] = +((data[5] & 0x0F) === 4);
      state['button:DownLeft'] = +((data[5] & 0x0F) === 5);
      state['button:Left'] = +((data[5] & 0x0F) === 6);
      state['button:UpLeft'] = +((data[5] & 0x0F) === 7);
      
      state['button:S'] = data[5] >> 4 & 1;
      state['button:X'] = data[5] >> 5 & 1;
      state['button:O'] = data[5] >> 6 & 1;
      state['button:T'] = data[5] >> 7 & 1;
      
      state['button:L1'] = data[6] >> 0 & 1;
      state['button:R1'] = data[6] >> 1 & 1;
      state['button:L2'] = data[6] >> 2 & 1;
      state['button:R2'] = data[6] >> 3 & 1;
      
      state['button:Share'] = data[6] >> 4 & 1;
      state['button:Options'] = data[6] >> 5 & 1;

      state['button:L3'] = data[6] >> 6 & 1;
      state['button:R3'] = data[6] >> 7 & 1;

      state['button:PS'] = data[7] >> 0 & 1;
      state['button:Touchpad'] = data[7] >> 1 & 1;

      return state;
    },
    "setRumble": function() {
      
    },
    "setLED": function(led, val) {
      
    }
  }
};
