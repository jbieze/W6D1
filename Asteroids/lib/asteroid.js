// Spacerock. It inherits from MovingObject.

const Util = require("./utils");
const MovingObject = require("./moving_object");
const Bullet = require("./bullet");
const Ship = require("./ship");

const DEFAULTS = {
	COLOR: "#FF5773",
	RADIUS: 25,
};

const Asteroid = function Asteroid(options) {
  options.color = DEFAULTS.COLOR;
  options.radious = DEFAULTS.RADIUS;
  options.vel = Util.randomVec();

  MovingObject.call(this, options);
};

// Return a randomly oriented vector with the given length.
function randomVec (length) {
  const deg = 2 * Math.PI * Math.random();
  return Util.scale([Math.sin(deg), Math.cos(deg)], length);
}
// Scale the length of a vector by the given amount.
function scale (vec, m) {
  return [vec[0] * m, vec[1] * m];
}

module.exports = Asteroid;
