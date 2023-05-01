// 1 Given an array of objects representing people, write an ES6 function to return a new array containing only the names of the people.

const people = [
    { name: 'Raj', age: 28 },
    { name: 'Swapnil', age: 42 },
    { name: 'Anushka', age: 35 }
];

// Your code here
const names = people.map(obj => obj.name)

console.log(names); // Output: ['Raj', 'Swapnil', 'Anushka']

// 2 Given an array, write an ES6 function to return a new array with all the elements multiplied by 5.
const numbers = [1, 2, 3, 4];
// Your code here
const multiplyByFive = numbers.map(num => num * 5)

console.log(multiplyByFive); // Output: [5, 10, 15, 20]

// 3 Given employee’s data, write an ES6 function which greets them with a personalized message for onboarding.

const employeeData = [
    { name: "ram", dept: "marketer" },
    { name: "Radha", dept: "SDE" },
    { name: "shyam", dept: "finance professional" },
]

// Your code here
const greetEmployeeMessages = employeeData.map((obj) => `Hi ${obj.name} we are glad to have you as a  ${obj.dept}`)

console.log(greetEmployeeMessages);
// Output: ['Hi ram we are glad to have you as a marketing', 'Hi Radha we are glad to have you as an SDE', 'Hi shyam we are glad to have you as a finance professional']

// 4 Write an ES6 function that takes an array of objects representing books and returns an array with only the titles of each book.

const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'Pride and Prejudice', author: 'Jane Austen' },
];

// Your code here

const getBookTitles = (books) => {
    return books.map(obj => obj.title)
}

const titles = getBookTitles(books);
console.log(titles); // Output: ['The Great Gatsby', 'To Kill a Mockingbird', '1984', 'Pride and Prejudice']

// 5 Write an ES6 function which takes out the names of the students whose first letter starts with ‘A’.

const studentName = ["Ram", "Anjali", "Arpit", "Bhanu Kumar", "Jaya", "Ankit", "shayam"]
    // Your code here
const studentNames = studentName.filter(obj => obj.charAt(0) === 'A');
console.log(studentNames);
// Output: ["Anjali", "Arpit", "Ankit"]

// Write an ES6 function which filters out the products which have a price greater than 40.


const productData = [
        { prodName: "Dairy Milk", price: 10 },
        { prodName: "Dairy Milk Silk", price: 70 },
        { prodName: "Five Star", price: 20 },
        { prodName: "Mars", price: 50 }
    ]
    // Your code here

const getProducts = (data, b) => {
    return data.filter(obj => obj.price > 40)
}
console.log(getProducts(productData, 40))
    // Output: [{prodName: 'Dairy Milk Silk', price: 70}, {prodName: 'Mars', price: 50}]


// 7 Write an ES6 function that takes an array of numbers and returns the first number that is divisible by 7.

const numberArr = [1, 2, 3, 21, 14, 7];
// Your code here
const isDivisibleBy7 = numberArr.find(num => num % 7 === 0)
console.log(isDivisibleBy7)
    // Output: 21

//  8 Write an ES6 function that takes an array of strings and returns the first string that is longer than 8 characters.


const nameArr = ["Mohan", "Anjali", "Geetanjali", "Ankit", "Bhanu Kumar", "Ramakrishnan", "shayam"]
    // Your code here
const isNamesGreaterThan8 = (str) => {
    return str.find(objStr => objStr.length > 8)
}
console.log(isNamesGreaterThan8(nameArr));
// Output: "Geetanjali"

//9 Write an ES6 function that takes an array of objects representing students with properties name and grade. Return the first student object that has a grade of "A".

const students = [
    { name: "John", grade: "B" },
    { name: "Mary", grade: "A" },
    { name: "Sam", grade: "C" },
    { name: "Sarah", grade: "A" },
];

// Your code here
const findStudentWithGradeA = (studentObj) => {
    return studentObj.find(obj => obj.grade === 'A');
}
const studentWithGradeA = findStudentWithGradeA(students);
console.log(studentWithGradeA);
// Output: { name: "Mary", grade: "A" }

// 10 Write an ES6 function that takes an array of objects representing students with properties name, grade and scholarship. Return the first student object that has a grade of "A" or they are a scholarship student.

const studentObj = [
    { name: "John", grade: "B", scholarship: false },
    { name: "Mary", grade: "B", scholarship: true },
    { name: "Sam", grade: "A", scholarship: false },
    { name: "Sarah", grade: "A", scholarship: true },
];

// Your code here
const findStudent = (std) => {
    return std.find(obj => (obj.grade === 'A' ||
        obj.scholarship != false))
}

const student = findStudent(studentObj);
console.log(student);
// Output: { name: "Mary", grade: "B", scholarship: true }


// 11 Write an ES6 function that takes an array of objects representing students with properties name and grade. Return the first student object that has a grade of "B" and they are also a scholarship student.


const studentObject = [
    { name: "John", grade: "B", scholarship: false },
    { name: "Mary", grade: "A", scholarship: true },
    { name: "Sam", grade: "A", scholarship: false },
    { name: "Sarah", grade: "B", scholarship: true },
];

// Your code here
const getStudent = (stdObj) => {
    return stdObj.find(obj => obj.grade === 'B' && obj.scholarship === true)
}

console.log(getStudent(studentObject));
// Output: { name: "Sarah", grade: "B", scholarship: true }

// 12  Write an ES6 function that takes an array of objects containing Bollywood movie information (title, director, year, rating) and returns an array with only the movie titles that were made before 1990 and has a rating above 8.0. (Question Level: tough).

const bollywoodMovies = [
    { title: 'Sholay', director: 'Ramesh Sippy', year: 1975, rating: 8.2 },
    { title: 'Amar Akbar Anthony', director: 'Manmohan Desai', year: 1977, rating: 7.6 },
    { title: 'Namak Halaal', director: 'Prakash Mehra', year: 1982, rating: 7.4 },
    { title: 'Mr. India', director: 'Shekhar Kapur', year: 1987, rating: 7.8 },
    { title: 'Qayamat Se Qayamat Tak', director: 'Mansoor Khan', year: 1988, rating: 7.6 },
    { title: 'Parinda', director: 'Vidhu Vinod Chopra', year: 1989, rating: 8.1 },
    { title: 'Dil', director: 'Indra Kumar', year: 1990, rating: 7.8 }
];

// Your code here

const getBestOldBollywoodMovies = (obj) => {
    const filterMovie = obj.filter(movie => (movie.year > 0 && movie.year < 1990 && movie.rating > 8))
    return filterMovie.map(obj => obj.title)
}


const bestOldMovies = getBestOldBollywoodMovies(bollywoodMovies);
console.log(bestOldMovies); // Output: ['Sholay', 'Parinda']