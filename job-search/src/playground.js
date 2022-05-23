const fruits = ["apple", "banana", "orange"];
const vegetable = ["carrot", "tomato", "potato"];

// const fruitsAndVegetables = fruits.concat(vegetable);

const fruitsAndVegetables = [...fruits, ...vegetable];

console.log(fruitsAndVegetables);
