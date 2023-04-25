// 5. Write an ES6 function that takes in an array of numbers and returns the sum of all the even numbers. Use the nullish coalescing operator to handle undefined or null values.

const sumOfEvenNumbers = (arr) => {
    // Your ES6+ code here
    const filterNum = arr.filter((num) => num % 2 === 0);
    return filterNum.reduce((acc, cv) => {
        return acc + cv;
    }, 0);
};

console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
console.log(sumOfEvenNumbers([1, 3, 5])); // 0