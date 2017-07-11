
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
  }
};

