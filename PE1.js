PE1 Final Code

let naturalNums = [];
for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        naturalNums.push(i);
    }
};
const summedNums = naturalNums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
});
console.log(summedNums);