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

const myBindArgs = function myBindArgs(args) {
  const givenArgs = this;
  return function () {
    const Args = Array.from(arguments);
    return givenArgs.apply(args, arguments.slice(1));
  };
};

const myBindRest = function myBindRest(...args) {

};
