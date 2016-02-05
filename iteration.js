Array.prototype.bubbleSort = function() {
  var swapped = true;

  while (swapped) {
    swapped = false;

    for (var i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i+1]) {
        var temp = this[i];
        this[i] = this[i+1];
        this[i+1] = temp;
        swapped = true;
      }
    }
  }
  return this;
};


String.prototype.subStrings = function () {
  var substrings = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j < this.length+1; j++) {
      substrings.push(this.slice(i,j));
    }
  }
  return substrings;
};

console.log("cats".subStrings());
