let contacts = ["Mary", "Joel", "Danny"]

let personalFriends = ["David", ...contacts, "Lily"]; // makes a copy of 'contacts' instead of reference

contacts.push("John");

console.log(personalFriends); // David, Mary, Joel, Danny, Lily
console.log(contacts); // Mary, Joel, Danny, John

let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
}

let employee = {
    ...person, // makes copy of 'person'
    salary: 50000,
    position: "Software Developer"
}

console.log(employee); // logs all info