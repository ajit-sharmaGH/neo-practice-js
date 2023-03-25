// 1. Write an ES6 function that accepts an array of integers and returns the maximum element in the array. Avoid using in-built methods.

let array = [4, 8, 3, 6, 0, 192, 94]

const getMaxEle = (arrayOfNum) => {
    let maxNum = arrayOfNum[0];
    for (let i = 1; i < arrayOfNum.length; i++)
        if (arrayOfNum[i] > maxNum)
            maxNum = arrayOfNum[i];
    return maxNum;

}
console.log(getMaxEle(array))

// 2 2. Write an ES6 function that takes an array of numbers and returns the average of all the numbers. Avoid using in-built methods.

const calculateAverage = arrayNum => {
    let sum = 0;
    for (let i = 0; i < arrayNum.length; i++)
        sum = sum + arrayNum[i];
    return sum / arrayNum.length;
}

console.log(calculateAverage([1, 2, 30, 4, 5]));


// 3. write an ES6 function that takes an array of numbers and converts even numbers to odd numbers by adding 1 to that number.


const convertEvenToOdd = arr => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i] + 1);
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

console.log(convertEvenToOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// 4. write an ES6 function that takes an array of words and returns an array with all its elements whose length is greater than 5.

const filterWords = arr => {
    let stringNewArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 5) {

            stringNewArr.push(arr[i]);
        }
    }
    return stringNewArr;
}
console.log(filterWords(["eat", "sleep", "code", "repeat", "neog", "community"]));

// 5 Write an ES6 function that takes an array of strings and returns a new array with each string capitalized.

const capitalizeWords = arrString => {
    let newArr = [];
    for (let i = 0; i < arrString.length; i++) {

        newArr.push(arrString[i].toUpperCase());
    }
    return newArr;
}
console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]))

// 6 Write an ES6 function that takes an array of objects and a property name and returns a new array with only the values of that property. Avoid using in-built methods.



const getValues = (arrObj) => {
    let newArr = [];
    for (let i = 0; i < arrObj.length; i++) {
        newArr.push(arrObj[i].name)
    }
    return newArr;
}

console.log(getValues([
    { name: "John", age: 21 },
    { name: "Mary", age: 22 },
    { name: "Peter", age: 23 },
]))

// 7 Write an ES6 function that takes the users' details and returns the data with team ID. Avoid using in-built methods.
let userData = { firstName: "John", lastName: "Dee" }

const podAndTeamAllocation = ({ firstName, lastName }) => ({ firstName, lastName, teamId: '435' })


console.log(podAndTeamAllocation(userData));

// 8. Write an ES6 function which checks if a student already has a team. If team is not given then add them to team “A” and return the object else do nothing and return the same object. Avoid using in-built methods.

const checkForTeam = ({ firstName, lastName, team }) =>
    team ? { firstName, lastName, team } : { firstName, lastName, team: 'A' }

console.log(checkForTeam({ firstName: 'John', lastName: 'Dee' }))


// 9 Destructure the following code to get the desired outputs. Avoid using in-built methods.

const book = {
    title: 'JavaScript: The Definitive Guide',
    authors: [{ name: 'David Flanagan', age: 49 }, { name: 'Yukihiro Matsumoto', age: 57 }],
    publisher: { name: 'O\'Reilly Media', location: 'CA' }
};

const { title, authors, publisher } = book;
console.log(title);

const author1 = authors[0].name;
console.log(author1)

const author2 = authors[1].name;
console.log(author2);

const publisherName = publisher.name;
console.log(publisherName);


// 10 Write an ES6 function that takes an array of objects and returns the sum of all ages.

var arrayData = [{
        name: "Jay",
        age: 60
    },
    {
        name: "Gloria",
        age: 36
    },
    {
        name: "Manny",
        age: 16
    },
    {
        name: "Joe",
        age: 9
    }
];

const agesSum = (arr) => {
    let sumOfAge = 0;
    for (let i = 0; i < arr.length; i++)
        sumOfAge += arr[i].age;
    return sumOfAge
}
console.log(agesSum(arrayData))