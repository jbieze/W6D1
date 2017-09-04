// Base class for anything that moves.
// Most important methods are MovingObject.prototype.move, MovingObject
//   .prototype.draw(ctx), MovingObject.prototype.isCollidedWith
//   (otherMovingObject).

const Util = require("./utils");

const MovingObject = function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.rad = options.rad;
  this.color = options.color;
};

module.exports = MovingObject;
