console.log("functions")

const nuggetizer = (animal) => {
    const output = `processed ${animal}`;
    return output;
};

console.log(nuggetizer('Chicken'));
console.log(nuggetizer('Cow'));
console.log(nuggetizer('Fish'));
console.log(nuggetizer('Pig'));
console.log(nuggetizer('tire'));


const dogBreed = (dog) => {
    const output = `My favorite dog breed is ${dog}.`;
    return output;
};


console.log(dogBreed('lab'));

// Challenge 1

const fortyTwo = (number) => {
    const output = number + 42;
    return output;
};

console.log(fortyTwo(8));

// Challenge 2

const oldAge = (year) => {
    const output = 2099 - year;
    return output;
};

console.log(oldAge(1954));