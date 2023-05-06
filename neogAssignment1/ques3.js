// 3. Write an ES6 function to reverse a string in JavaScript without using in-built methods.

export const reverseString = (str) => {
    // Your ES6 code here
    let reverseStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return reverseStr;
};

console.log(reverseString("neoG Camp")); // pmaC Goen