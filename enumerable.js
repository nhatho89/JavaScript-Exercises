Array.prototype.myEach = function(func) {
  for (var i=0; i<this.length; i++) {
    func(this[i]);
  }
  return this;
};

[1,2,3].myEach(function(el) {
  console.log(el);
});

Array.prototype.myMap = function(func) {
  var mapArr = [];
  this.myEach(function(el) {
    mapArr.push(func(el));
  });
  return mapArr;
};

var ar = [1, 2, 3].myMap(function(el) {
  return el * 2;
});
console.log(ar);

Array.prototype.inject = function(func) {
  var array = this;
  var arr = this.slice();
  var acc = arr.shift();
  arr.myEach(function(el){
    acc = func(acc, el);
  });
  return acc;
};

console.log([1,2,3,4].inject(function(acc, el) {
  return acc + el;
}));
