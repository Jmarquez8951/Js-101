// Challenge 1
const evenOdd = (num) => {
    if (num % 2 === 0 ) {
        return "Even";
    } else {
        return "Odd";
    };
};

console.log(evenOdd(3));


// Challenge 2
const findOpposite = (num) => {
    num = -num;
    return num;
};
console.log(findOpposite(7));


// Challenge 3
const palindrome = (str) => {
    return str == str.split('').reverse().join('');
};

console.log(palindrome('racecar')); // true