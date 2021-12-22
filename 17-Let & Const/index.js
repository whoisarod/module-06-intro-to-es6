if (false) {
    var example = 5;
}

console.log(example) // null

/*
var example;

if (false) {
    example = 5;
}

*/

if (false) {
    let example = 5;
}

console.log(example) // Reference Error: example is not defined

const example = 5;
example = 10;
console.log(example); // error

const example = [];
example.push(5);
console.log(example); // 5

const example = [];
example = 3;
console.log(example); // Syntax error

const example = {};
example.firstName = 'Dylan';
console.log(example); // {firstName: "Dylan"}