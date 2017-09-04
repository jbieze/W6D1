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

function curriedSum(numArgs) {
  const numbers = [];

  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let sum = 0;
      numbers.forEach(function(n) {
        sum += n;
      });
      return sum;
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}

Function.prototype.curryApply = function(numArgs){
  const args = [];
  let thisFunc = this;
  function _curried(firstArg = Array.from(arguments).slice(1)){
    args.push(firstArg);
    if (args.length === numArgs) {
      return thisFunc.apply(null, args);
    } else {
      return _curried;
    }
  }
  return _curried;
};

Function.prototype.currySpread = function (numArgs) {
  const args = [];
  const thisFunc = this;
  function _curried(firstArg = Array.from(arguments).slice(1)) {
    args.push(firstArg);
    if (args.length === numArgs) {
      return thisFunc(...args);
    } else {
      return _curried;
    }
  }

  return _curried;
};
