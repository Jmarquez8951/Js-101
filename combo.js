// Challenge 1
const evenOdd = (num) => {
    if (num % 2 === 0 ) {
        return "Even";
    } else {
        return "Odd";
    };
};

console.log('evenOdd',evenOdd(3));


// Challenge 2
const findOpposite = (num) => {
    num = -num;
    return num;
};
console.log('findOpposite',findOpposite(7));
console.log('findOpposite',findOpposite(-10));
console.log('findOpposite',findOpposite(-333));
console.log('findOpposite',findOpposite(4));





// Challenge 3
const palindrome = (str) => {
    const cleanText = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()+ ]/g,"");
    const opp = cleanText.split('').reverse().join('');
    if (cleanText === opp) {
        return true;
    } else {
        return false;
    }
};

console.log('palindrome',palindrome('R-ac+E cAr. ')); // true


// Challenge 4
const animal = (str) => {
    if (str.toLowerCase() === "alligator"){
        return "Small";
    } else {
        return "Wide";
    }
};

console.log('animal',animal("Frog"));
console.log('animal',animal("aLligator"));
