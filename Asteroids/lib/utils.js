// Utility code, especially vector math stuff.
const Util =  {

  inherits(childClass, baseClass) {
    childClass.prototype = Object.create(baseClass.prototype);
    childClass.prototype.constructor = childClass;
  }

};

module.exports = Util;
