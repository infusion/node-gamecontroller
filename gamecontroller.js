/**
 * @license GameController v0.0.2 09/07/2017
 *
 * Copyright (c) 2017, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/

/*
 * TODO: 
 * - multiple controllers (number as 2nd argument)
 * - construct from serial number or path
 */


const HID = require('node-hid');
const EventEmitter = require('events').EventEmitter;
const Vendors = require('./lib/vendors.js');

const util = require('util');

function GameController(type) {

  if (!(this instanceof GameController)) {
    return new GameController(type);
  }

  this._vendor = Vendors[type];

  EventEmitter.call(this);
  process.on('exit', this.close.bind(this));
}

GameController.prototype = {
  _hid: null,
  _vendor: null,
  connect: function(cb) {
    let ven = this._vendor;

    try {
      this._hid = new HID.HID(ven.vendorId, ven.productId);
    } catch (e) {
      this.emit('error', e);
      return;
    }

    let hid = this._hid;
    let self = this;
    let pass = {x: 0, y: 0};

    hid.on('data', function(data) {

      let newState = ven.update(data);
      let oldState = ven.prev;

      self.emit('data', newState);

      for (let s in newState) {

        let os = oldState[s];
        let ns = newState[s];
        let sp = s.split(":");

        if (sp[0] === 'axis') {

          let Ykey = sp[0] + ':' + sp[1] + ':Y';

          if (sp[2] === 'X' && (ns !== os || newState[Ykey] !== oldState[Ykey])) {
            pass.x = ns;
            pass.y = newState[Ykey];
            self.emit(sp[1] + ':move', pass);
          }
        } else if (os !== ns) {

          if (sp[0] === 'button') {
            if (ns === 1 && os === 0) {
              self.emit(sp[1] + ':press');
            } else {
              self.emit(sp[1] + ':release');
            }
          }
        }
        oldState[s] = newState[s];
      }
    });

    if (cb instanceof Function) {
      cb();
    }

    return this;
  },
  close: function() {
    if (this._hid) {
      this._hid.disconnect();
      this._hid = null;
    }

    this.emit('close');

    return this;
  }
};

GameController.getDevices = function() {
  let dev = HID.devices();
  let ret = [];

  for (let i = 0; i < dev.length; i++) {

    for (let ven in Vendors) {

      if (Vendors[ven].productId === dev[i].productId && Vendors[ven].vendorId === dev[i].vendorId) {
        ret.push(ven);
      }
    }
  }
  return ret;
};


module.exports = GameController;

util.inherits(GameController, EventEmitter);
