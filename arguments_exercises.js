const sumArgs = function sumArgs() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
};

const sumRest = function sumRest(...nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }

  return total;
};

// // simple myBind with no args
// Function.prototype.myBind = function (ctx) {
//   return () => this.apply(ctx);
// };
//
// // myBind with arguments
// Function.prototype.myBind = function (ctx, ...bindArgs) {
//   return (...callArgs) => {
//     return this.apply(ctx, bindArgs.concat(callArgs));
//   };
// };

Function.prototype.myBindArgs = function (args) {
  const givenArgs = this;
  const boundArgs = Array.from(arguments).slice(1);
  return function () {
    const otherArgs = Array.from(arguments);
    return givenArgs.apply(args, boundArgs.concat(otherArgs));
  };
};

Function.prototype.myBindRest = function (args, ...boundArgs) {
  return (...otherArgs) => {
    return this.apply(args, boundArgs.concat(otherArgs));
  };
};
