const wordLength = (word) => {
    return word.length;
};

// returns word length
console.log('num of letters', wordLength('cat'));
console.log('num of letters', wordLength('Monkeybutt'));
console.log('num of letters', wordLength('Nashbille'));

// check your age.

const ageCheck = (age) => {
    if (age >= 21) {
        console.log("PARTY!!!!!!!!!!!");
    } else {
        console.log("No drinks for you bud");
    }
};

ageCheck(12);
ageCheck(24);

// Objects

const expense = {
    dateCreated: '01/17/2020',
    location: 'Baja Burrito',
    cost: 12.57,
    isGood: true
};

// dot notation
console.log(expense.cost);

// bracket notation
console.log(expense['cost']);

const employee = {
    firstName: 'John',
    lastName: 'Doe',
    gender: 'male',
    age: 52,
    experience: '5 years',
    position: 'Regional Manager'
}

// challenge

const statusMaker = (person) => {
    if (person.firstName[0] === 'M') {
        person.status = "vip";
    } else {
        person.status = "peasant";
    }
    return person;
}

console.log(statusMaker(employee));
