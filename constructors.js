var Cat = function(name, owner) {
  this.name = name;
  this.owner = owner;
};

Cat.prototype.cuteStatement = function () {
  return this.owner + " loves " + this.name;
};

var cat1 = new Cat("Breakfast", "Ned");
var cat2 = new Cat("Markov", "Ned");
var cat3 = new Cat("Query", "Nod");
console.log(cat1.cuteStatement());
console.log(cat2.cuteStatement());
console.log(cat3.cuteStatement());

Cat.prototype.cuteStatement = function () {
  return "Everyone loves " + this.name;
};

console.log(cat1.cuteStatement());
console.log(cat2.cuteStatement());
console.log(cat3.cuteStatement());

Cat.prototype.meow = function () {
  console.log("meow");
};

cat2.meow = function() {
  console.log("MeeeOwwwwww!");
};

cat1.meow();
cat2.meow();
cat3.meow();
