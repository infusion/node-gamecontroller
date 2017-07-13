
![node-gamecontroller](https://github.com/infusion/node-gamecontroller/blob/master/res/logo.png?raw=true "JavaScript Gamecontroller")

[![NPM Package](https://img.shields.io/npm/v/gamecontroller.svg?style=flat)](https://npmjs.org/package/gamecontroller "View this project on npm")
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

Gamecontroller.js is a small layer on top of HID to interact with any USB game controller, like Sony PlayStation, XBOX, SNES, ... with node.js, depending on a small config for each controller only.



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
const ctrl = new Gamecontroller('ps2');

ctrl.connect(function() {
    console.log('Game On!');
});

ctrl.on('X:press', function() {
    console.log('X was pressed');
});

ctrl.on('X:release', function() {
    console.log('X was released');
});
```

To get the full parsed HID data stream, you can run

```js
ctrl.on('data', function(data) {
    console.log(data);
});
```

Supported Events
===

Data
---

- `data`- Get parsed data as it comes in

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

Misc
---

- `error` - An error has occurred
- `close` - The connection was closed successfully


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

Add a new controllers
===

If your controller isn't supported yet, add the the config to the `lib/vendor.js` file and send a pull request or file a bug ticket. To get all the information follow the following simple steps. Run the following snippet, locate your controller and note the vendorId and productId.:

```js
var HID = require('node-hid');
console.log(HID.devices());
```

Using the vendorId and productId you can run the following snippet, press all the keys on your controller and get the array position of what key changes what array index.

```js
var hid = new HID.HID(vendorId, productId);
hid.on("data", function(data) {
    console.log(data);
});
```

Copyright and licensing
===
Copyright (c) 2017, [Robert Eisele](https://www.xarg.org/)
Dual licensed under the MIT or GPL Version 2 licenses.
