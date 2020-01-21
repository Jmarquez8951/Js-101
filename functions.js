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