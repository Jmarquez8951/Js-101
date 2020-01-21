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