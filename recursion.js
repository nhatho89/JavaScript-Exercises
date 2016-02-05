var range = function(start, end) {
  if (end < start) {
    return [];
  }
  return [start].concat(range(start + 1, end));
};
console.log("range(1, 10)");
console.log(range(1, 10));

var sum = function (arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] + sum(arr.slice(1));
};

console.log("sum([1,2,3]");
console.log(sum([1,2,3]));

var fibs = function (n) {

  if (n <= 2) {
    return [1, 1].slice(0,n);
  }

  var prevFibs = fibs(n-1);
  var currentNum = prevFibs[n-2] + prevFibs[n-3];
  prevFibs.push(currentNum);
  return prevFibs;

};

Array.prototype.bsearch = function (target) {
  var pivot = Math.floor(this.length / 2);

  if (this[pivot] === target) {
    return pivot;
  }
  if (this.length === 1) {
    return undefined;
  }
   if (this[pivot] > target) {
    return this.slice(0, pivot).bsearch(target);
  } else if (this[pivot] < target) {
    var idx = this.slice(pivot).bsearch(target);
    if (idx !== undefined) {
      return idx + pivot;
    }
  }
};

Array.prototype.take = function (n) {
  return this.slice(0, n);
};

Array.prototype.drop = function (n) {
  return this.slice(n);
};

Array.prototype.first = function () {
  return this[0];
};

Array.prototype.last = function () {
  return this[this.length-1];
};

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});

var masterChanger = function(masterAmount, masterCoins) {
  masterCoins = masterCoins || [25, 10, 5, 1];
  masterCoins = masterCoins.sort(function(a, b) {
    return b - a;
  });
  
  var makeChange = function(amount, coins) {
    if (amount <= 0) {
      return [];
    }
    var change = [];
    if (amount === coins.first()) {
      return [coins.first()];
    }
    if (amount > coins.first()) {
        change.push(coins.first());
        return change.concat(makeChange(amount - coins.first(), coins));
    }
    else {
      return change.concat(makeChange(amount, coins.drop(1)));
    }

  };

  var possibleChange = [];
  masterCoins.forEach(function(coin){
    if (coin <= masterAmount) {
      possibleChange.push([coin].concat(
        makeChange(masterAmount - coin, masterCoins)));
    }});


  return possibleChange.reduce(function(acc, currentChange) {
    if (acc.length > currentChange.length) {
      return currentChange;
    }
    else {
      return acc;
    }
  });

};





//
