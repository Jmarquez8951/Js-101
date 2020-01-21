console.log("js")


const junkDrawer = ['hi', 2, true, {Name: 'Jose Marquez'}, [1, 2, 3, 4]];

console.log(junkDrawer[2]);
junkDrawer.push('fluffy');


const valuePrinter = (arr, idx) => {
    return arr[idx];
};
console.log(valuePrinter([1, 2, 3, 4, 5], 2));
console.log(valuePrinter(['cats', 'dog', 'bear', 'turtle', 'fish'], 3));