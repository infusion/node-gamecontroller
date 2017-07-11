
![node-gamecontroller](https://github.com/infusion/node-gamecontroller/blob/master/res/logo.png?raw=true "JavaScript Gamecontroller")

[![NPM Package](https://img.shields.io/npm/v/gamecontroller.svg?style=flat)](https://npmjs.org/package/gamecontroller "View this project on npm")
[![Build Status](https://travis-ci.org/infusion/node-gamecontroller.svg?branch=master)](https://travis-ci.org/infusion/node-gamecontroller)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

Gamecontroller.js is a small layer on top of HID to interact with USB game controllers, like Sony PlayStation, XBOX, SNES, ... with node.js.



Installation
===

Installing node-gamecontroller is as easy as cloning this repo or use npmjs:

```bash
npm install gamecontroller
```

Usage
===

Plug in your game controller and run the following code:

```js
const Gamecontroller = require('gamecontroller');
var ctrl = new Gamecontroller('ps2');

ctrl.connect();

ctrl.on('connected', function() {
    console.log("Game On!);
});

ctrl.on('X:press', function() {
    console.log('X was pressed');
});

ctrl.on('X:release', function() {
    console.log('X was released');
});
```

To get the full parsed HID data stream (for example to get joystick data), you can run

```js
ctrl.on('data', function(data) {
    console.log(data);
});
```

Supported Events
===

Buttons
---

- `{type}:press` - Button with given type was pressed
- `{type}:release` - Button with given type was released

Joysticks
---

- `{type}:move` - Joystick with given type was moved in either x or y direction. Object with positions gets passed

Status
---

- `{type}:change` - The status of a measure like battery changed


Supported Controllers
===

At the moment, the following controllers are supported:

- Playstation 2 Ripoff ("ps2")
- XBOX 360 ("xbox360")
- Tomee SNES Controller ("snes-tomee")
- Retrolink SNES Controller ("snes-retrolink")

If you've connected a supported controller, you can run the following to find the name of it:

```js
var Gamecontroller = require('gamecontroller');

var dev = Gamecontroller.getDevices();

console.log(dev);
```

If your controller isn't supported yet, file a bug ticket.



Copyright and licensing
===
Copyright (c) 2017, [Robert Eisele](https://www.xarg.org/)
Dual licensed under the MIT or GPL Version 2 licenses.
