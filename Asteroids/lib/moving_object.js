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

MovingObject.prototype.draw = function (ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.rad, 0, 2 * Math.PI, true);
  ctx.fillStyle = this.color;
  ctx.fill();
};

MovingObject.prototype.move = function (timeDelta) {
  this.pos = this.pos[0] + this.vel;
};

module.exports = MovingObject;
