//function declaration
function breakfastMenu() {
    return "I'm going to scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch";
}

//arrow function
const dinnerMenu = (food) => {
    return `I'm going to eat a ${food} for dinner`
}

const dinnerMenu = food => `I'm going to eat a ${food} for dinner` //refactored, ONLY possible if there is 1 parameter

console.log(dinnerMenu("chicken salad")); // I'm going to eat a chicken salad for dinner