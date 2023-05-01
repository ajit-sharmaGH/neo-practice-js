// Write an ES6 function that takes an array of numbers and returns an array with each number incremented by 3 using the map method.

const numbers = [1, 2, 3, 4, 5];
const incrementNumbers = (arr) => {
    return numbers.map((num) => num + 3)
}
console.log(incrementNumbers(numbers))

//Write an ES6 function that takes an array of strings and returns an array with all the strings capitalised using the map method.
// Your ES6 function here

const capitalizeArray = (strArr) => {
    return strArr.map(string => string.toUpperCase())
}


const myArray = ['apple', 'banana', 'cherry']
console.log(capitalizeArray(myArray))


//Write an ES6 function that takes an array of objects representing people and returns an array of their ages using the map method.

// Your ES6 function here

const people = [
    { name: 'Ankit', age: 25 },
    { name: 'Vinit', age: 24 },
    { name: 'Shashi', age: 29 },
]

const getAges = (ageOnly) => {
    return ageOnly.map((obj) => obj.age)
}

const ages = getAges(people)
console.log(ages)

//Write an ES6 function that takes an array of objects representing products and returns an array with the product names in all lower case letters using the map method.
// Your ES6 function here

const products = [
    { name: 'Lip Balm', stock: 100 },
    { name: 'PERFUME', stock: 400 },
    { name: 'Socks', stock: 200 },
]

const getProductNamesInLowerCase = (prd) => {
    return prd.map(obj => obj.name.toLowerCase())
}
console.log(getProductNamesInLowerCase(products))


//Write an ES6 function that takes an array of objects representing cities and returns an array of their names using the map method.// Your ES6 function here

const cities = [
    { name: 'New York', population: 8538000 },
    { name: 'Los Angeles', population: 3976000 },
    { name: 'Bangalore', population: 13608000 },
]
const getCityNames = (city) => {
    return city.map(obj => obj.name)
}
console.log(getCityNames(cities))
    // Output: ["New York", "Los Angeles", "Bangalore"]



//Write an ES6 function that takes an array of strings and returns an array with only the strings that have a length greater than 5.

// Your ES6 function here

const fruits = ['apple', 'banana', 'cherry', 'watermelon', 'pineapple']

const filterLongStrings = (str) => {
    return str.filter(obj => obj.length > 5)
}

console.log(filterLongStrings(fruits))
    // Output: ["banana", "cherry", "watermelon", "pineapple"]
    /** map() is used to transform each element of an array into a new value, while filter() is used to create a new array with only some of the original elements based on a certain condition. */

//  Write an ES6 function that takes an array of numbers and returns an array with only the numbers that are divisible by 3 and also by 5.

// Your ES6 code here


const isDivisibleBy3and5 = (num) => {
    return num.filter((arrNum) => (arrNum % 5 === 0 && arrNum % 3 === 0))
}
const nums = [1, 2, 30, 4, 15]

console.log(isDivisibleBy3and5(nums))
    // Output: [30, 15]


//8 Write an ES6 function that takes an array of objects with the properties name and age, and returns an array with only the objects that have an age greater than 30.

// Your ES6 code here

const peopleObj = [
    { name: 'Rahul', age: 25 },
    { name: 'Raj', age: 35 },
    { name: 'Vijay', age: 45 },
]
const filterByAge = (ageObj) => {
    return ageObj.filter((obj) => obj.age > 30


    )
}
console.log(filterByAge(peopleObj))
    // Output: [{ name: 'Raj', age: 35 }, { name: 'Vijay', age: 45 }]


//9 Write an ES6 function that takes an array of objects with the properties name and score, and returns an array with only the objects that have a score greater than 80.


// Your ES6 code here

const students = [
    { name: 'Aditya', score: 85 },
    { name: 'Bob', score: 75 },
    { name: 'Charlie', score: 90 },
]
const filterByScore = (obj) => {
    return obj.filter(std => std.score > 80)
}
console.log(filterByScore(students))
    // Output: [{ name: 'Aditya', score: 85 }, { name: 'Charlie', score: 90 }]

// Write an ES6 function that takes an array of objects with the properties name, age and city, and returns an array with only the objects that have a city property of "Indore" and age greater than 70.


// Your ES6 code here

const peopleName = [
    { name: 'Ridhima', age: 75, city: 'Indore' },
    { name: 'Akshay', age: 60, city: 'Delhi' },
    { name: 'Udit', age: 80, city: 'Indore' },
    { name: 'Venki', age: 80, city: 'Bangalore' },
]
const filterByCityAndAge = (people) => {
    return people.filter(obj => (obj.age > 70 && obj.city === "Indore"))
}

const filteredPeople = filterByCityAndAge(peopleName)
console.log(filteredPeople)
    // Output: [{ name: 'Ridhima', age: 75, city: 'Indore' }, { name: 'Udit', age: 80, city: 'Indore' }]

//11 Write an ES6 function that takes an array of objects containing book information (title, author, genre) and returns an array with only the books of "Science Fiction"

// Your ES6 code here

const books = [{
        title: "The Hitchhiker's Guide to the Galaxy",
        author: 'Douglas Adams',
        genre: 'Science Fiction',
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        genre: 'Fiction',
    },
    { title: '1984', author: 'George Orwell', genre: 'Science Fiction' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance' },
]
const filterByGenre = (book, b) => {
    return book.filter(book => book.genre === b);
};
const filteredBooks = filterByGenre(books, 'Science Fiction')
console.log(filteredBooks)
    // Output: [{title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction"}, {title: "1984", author: "George Orwell", genre: "Science Fiction"}]



// 12  Write an ES6 function that takes an array of objects containing employee information (name, age, salary) and returns an array with only the employees who earn a salary above 22000 and age is above 25.

// Your ES6 code here

const employees = [
    { name: 'Abhay', age: 25, salary: 20000 },
    { name: 'Joice', age: 30, salary: 35000 },
    { name: 'Reena', age: 35, salary: 15000 },
    { name: 'Jeena', age: 40, salary: 50000 },
]
const filterBySalary = (a, b, c) => {
    return a.filter(emp => (emp.salary > b && emp.age > 25))
}
const filteredEmployees = filterBySalary(employees, 22000, 25)
console.log(filteredEmployees)
    // Output: [{name: "Joice", age: 30, salary: 35000}, {name: "Jeena", age: 40, salary: 50000}]