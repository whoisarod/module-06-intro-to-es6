let incomes = [62000, 67000, 75000];
let total = 0;

for (const income of incomes) { // iterates through incomes array
    console.log(income); // returns '62000', '67000', and '75000'
    total += income // adds each item arrry and assigns it to income
}

console.log(total); // 240000

let fullName = "Angel Coding God Rodriguez"

for (const char of fullName) {
    console.log(char); // returns EACH character of the string fullName
}