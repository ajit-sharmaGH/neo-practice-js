// 2. Write an ES6 function which takes an array of digits and return the sum of all digits present at odd indices. Avoid using in-built methods.

const sumDigitsAtOddIndices = (arr) => {
    // Your ES6 code here
    let sum = 0;
    for (let odd in arr) {
        if (odd % 2 !== 0) {
            sum = sum + arr[odd];
        }
    }
    return sum;
};

console.log(sumDigitsAtOddIndices([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 20