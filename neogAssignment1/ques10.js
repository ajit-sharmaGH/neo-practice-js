// 10. Write an ES6 function that takes an array of objects, each with name and age properties, and returns an array containing the names of all people whose age is greater than or equal to 60. Avoid using in-built methods.

const getNamesOfAdults = (peopleInfo) => {
    // Your ES6 code here
    let nameArr = [];
    let eachName;
    for (let i = 0; i < peopleInfo.length; i++) {
        if (peopleInfo[i].age >= 60) {
            eachName = peopleInfo[i].name;
            nameArr.push(eachName);
        }
    }
    return nameArr;
};

const people = [
    { name: "Alice", age: 69 },
    { name: "Bob", age: 47 },
    { name: "Charlie", age: 70 }
];
console.log(getNamesOfAdults(people)); // ["Alice", "Charlie"]