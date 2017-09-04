// Holds collections of the asteroids, bullets, and your ship.
// Game.prototype.step method calls Game.prototype.move on all the
//   objects, and Game.prototype.checkCollisions checks for colliding
//   objects.
// Game.prototype.draw(ctx) draws the game.
// Keeps track of dimensions of the space; wraps objects around when
//   they drift off the screen.

const Util = require("./utils");
const Asteroid = require("./asteroid");
const Bullet = require("./bullet");
const Ship = require("./ship");

const Game = function Game() {

};

module.exports = Game;
