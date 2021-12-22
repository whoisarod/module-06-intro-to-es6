import { Animal, } from "./animal.js";

const cat = new Animal("cat", 4);

console.log(cat.type); // cat
console.log(cat.legs); // 4

cat.legs = 3;
cat.makeNoise() // "loud noise", defalt params
console.log(cat.legs); // 3, resets value in object

cat.makeNoise("meow") // "meow"


//static
console.log(Animal.return10()); // 10

// get
console.log((cat.metaData)); // Type: Cat, Legs: 4

// extends
import { Animal, Cat } from "./animal.js";

const cat = new Cat("cat", 4);

cat.makeNoise(); // meow

console.log(cat.metaData); // inherits metadata from Animal parent class