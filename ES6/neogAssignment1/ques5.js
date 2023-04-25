// 5. Write an ES6 function that takes two array of numbers of equal length and returns a new array with the sum of each corresponding element in the two arrays. Avoid using in-built methods.

const sumArrays = (arr1, arr2) => {
    // Your ES6 code here
    let newArr = [];
    let sum;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j <= i; j++) {
            sum = (arr1[i] + arr2[j]);
        }
        newArr.push(sum);
    }
    return newArr;

};

console.log(sumArrays([1, 2, 3, 4], [1, 2, 3, 5])); // [2, 4, 6, 9]
console.log(sumArrays([1, 2, 3, 4], [1, 2, 3, 5])); // [2, 4, 6, 9]