Function.prototype.inheritSurrogate = function (BaseClass) {
  function Surrogate () {}
  Surrogate.prototype = BaseClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Function.prototype.inheritsObject = function (BaseClass) {
  this.prototype = Object.create(BaseClass.prototype);
  this.prototype.constructor = this;
};

function Animal (name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name + " speaks!");
};

function Dog (name) {
  Animal.call(this, name);
}

Dog.inheritSurrogate(Animal);

Dog.prototype.howl = function () {
  console.log(this.name + " howls!");
};

function Cat (name) {
  Animal.call(this, name);
}

Cat.inheritSurrogate(Animal);

Cat.prototype.purr = function () {
  console.log(this.name + " howls!");
};

const barkley = new Dog("Barkley");
barkley.speak();
barkley.howl();

const meowth = new Cat("Meowth");
meowth.speak();
meowth.purr();
