Array.prototype.uniq = function() {
  var uniqArr = [];
  var numHash = {};
  for(var i = 0; i < this.length; i++) {
    if (!numHash[this[i]]) {
      uniqArr.push(this[i]);
    }

    numHash[this[i]] = true;
  }
  return uniqArr;
};

console.log("uniq");
console.log([1,1,2,2,3].uniq());

Array.prototype.twoSum = function() {
  var indices = [];
  for (var i = 0; i < this.length - 1; i++) {
    for (var j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        indices.push([i, j]);
      }
    }
  }
  return indices;
};

console.log([-1, 0, 2, -2, 1].twoSum());

Array.prototype.transpose = function() {
  var transposedArray = [];
  for (var i = 0; i < this.length; i++) {
    transposedArray[i] = [];
    for (var j = 0; j < this[0].length; j++) {
      transposedArray[i][j] = this[j][i];
    }
  }
  return transposedArray;
};
var rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];
console.log(rows.transpose());
