// 1 Write an ES6 function that takes an array of objects representing cars with properties make, model, and year. Return the first car object that is a Toyota and the year is after 2010.


const cars = [
    { make: 'Toyota', model: 'Corolla', year: 2010 },
    { make: 'Honda', model: 'Civic', year: 2012 },
    { make: 'Toyota', model: 'Camry', year: 2015 },
    { make: 'Ford', model: 'Mustang', year: 2018 },
]

// Your code here
const findToyotaCar = (carInfo) => {
    return carInfo.find(carObj => (carObj.make === 'Toyota' && carObj.year > 2010))
}

const toyotaCar = findToyotaCar(cars)
console.log(toyotaCar)
    // Output: { make: "Toyota", model: "Camry", year: 2015 }


// 2 Write an ES6 function that takes an array of objects containing car information (make, model, year) and returns an array with only the cars that were made after the year 2012.


const carObj = [
    { make: 'Toyota', model: 'Corolla', year: 2010 },
    { make: 'Honda', model: 'Civic', year: 2012 },
    { make: 'Toyota', model: 'Camry', year: 2015 },
    { make: 'Ford', model: 'Mustang', year: 2018 },
]

// Your code here
const getCarDetails = (carInfo) => {
    return carInfo.filter(carObj => (carObj.year > 2012))
}
const getCars = getCarDetails(carObj)
console.log(getCars)
    // Output: [{ make: "Toyota", model: "Camry", year: 2015 }, { make: "Ford", model: "Mustang", year: 2018 }]


// 3  Write an ES6 function that takes an array of objects representing products with properties name, price, and category. Return the first product object that is in the category "electronics".


const products = [
    { name: 'Toothbrush', price: 29, category: 'health' },
    { name: 'Coffee Maker', price: 99, category: 'home' },
    { name: 'iPad', price: 799, category: 'electronics' },
    { name: 'Smartwatch', price: 199, category: 'electronics' },
]

// Your code here
const findElectronicsProduct = (electronics) => {
    return electronics.find(obj => obj.category === 'electronics')
}


const electronicsProduct = findElectronicsProduct(products)
console.log(electronicsProduct)
    // Output: { name: "iPad", price: 799, category: "electronics" }


// 4 Write an ES6 function that takes an array of objects representing products with properties name, price and category. Return all the products object that are in the category "electronics".


const product = [
    { name: 'Toothbrush', price: 29, category: 'health' },
    { name: 'Coffee Maker', price: 99, category: 'home' },
    { name: 'iPad', price: 799, category: 'electronics' },
    { name: 'Smartwatch', price: 199, category: 'electronics' },
]

// Your code here
const getAllElectronicProducts = (allElectric) => {
    return allElectric.filter(obj => obj.category === 'electronics')
}
const electronicProducts = getAllElectronicProducts(product)
console.log(electronicProducts)
    // Output: [{ name: "iPad", price: 799, category: "electronics" }, { name: "Smartwatch", price: 199, category: "electronics" }]

//  5 Write an ES6 function that takes an array of objects containing student information (name, age, grade) and returns an array with only the students who have a grade above a certain value.


const students = [
        { name: 'Alice', age: 16, grade: 90 },
        { name: 'Bob', age: 17, grade: 80 },
        { name: 'Charlie', age: 15, grade: 95 },
        { name: 'David', age: 16, grade: 85 },
    ]
    // Your code here
const filterStudentsByGrade = (stdObj, b) => {
    return stdObj.filter(obj => obj.grade > b)
}
const highGradeStudents = filterStudentsByGrade(students, 85)
console.log(highGradeStudents)
    // Output: [{ name: "Alice", age: 16, grade: 90 }, { name: "Charlie", age: 15, grade: 95 }]


//   6 Write an ES6 function that takes an array of objects representing books with properties title, author and pageCount. Return the first book object that has more than 500 pages.


const books = [{
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        pageCount: 1178,
    },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', pageCount: 281 },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: 'Douglas Adams',
        pageCount: 193,
    },
    {
        title: 'The Name of the Wind',
        author: 'Patrick Rothfuss',
        pageCount: 662,
    },
]

// Your code here
const findBookWithMoreThan500Pages = (books) => {
    return books.find(obj => obj.pageCount > 500)
}
const bookWithMoreThan500Pages = findBookWithMoreThan500Pages(books)
console.log(bookWithMoreThan500Pages)
    // Output: { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 }


// 7 Write an ES6 function that takes an array of objects containing customer information (name, age, gender) and returns an array with only the customers who are of gender Male.


const customers = [
        { name: 'John', age: 25, gender: 'Male' },
        { name: 'Jane', age: 30, gender: 'Female' },
        { name: 'Bob', age: 40, gender: 'Male' },
        { name: 'Alice', age: 35, gender: 'Female' },
    ]
    // Your code here
const getMaleCustomers = (customer) => {
    return customer.filter(obj => obj.gender === 'Male')

}
const maleCustomers = getMaleCustomers(customers)
console.log(maleCustomers)
    // Output: [{ name: 'John', age: 25, gender: 'Male' }, { name: 'Bob', age: 40, gender: 'Male' }]

// 8 Write an ES6 function that takes an array of objects containing game information (title, developer, genre) and returns an array with all the games of a certain genre.

const games = [{
            title: 'The Witcher 3: Wild Hunt',
            developer: 'CD Projekt Red',
            genre: 'RPG',
        },
        {
            title: 'Grand Theft Auto V',
            developer: 'Rockstar North',
            genre: 'Action',
        },
        { title: 'Portal 2', developer: 'Valve Corporation', genre: 'Puzzle' },
        {
            title: 'The Legend of Zelda: Breath of the Wild',
            developer: 'Nintendo',
            genre: 'Adventure',
        },
    ]
    // Your code here
const filterByGenre = (a, b) => {
    return a.filter(obj => obj.genre === b)

}

const filteredGames = filterByGenre(games, 'RPG')
console.log(filteredGames)
    // Output: [{title: "The Witcher 3: Wild Hunt", developer: "CD Projekt Red", genre: "RPG"}]


// 9 Write an ES6 function that takes an array of objects containing car information (make, model, year) and returns an array with only the car model that were made after the year 2012.

const carsObj = [
    { make: 'Toyota', model: 'Corolla', year: 2010 },
    { make: 'Honda', model: 'Civic', year: 2012 },
    { make: 'Toyota', model: 'Camry', year: 2015 },
    { make: 'Ford', model: 'Mustang', year: 2018 },
]

// Your code here
const getCarModel = (car) => {
    const filterCarYear = car.filter(obj => obj.year > 2012)

    return filterCarYear.map(obj => obj.model)
}
const carModels = getCarModel(carsObj)
console.log(carModels)
    // Output: ["Camry", "Mustang"]

// 10 .Write an ES6 function that takes an array of objects representing books with properties title, author and pageCount. Return the all book titles that have more than 700 pages.

const booksObj = [{
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        pageCount: 1118,
    },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', pageCount: 280 },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: 'Douglas Adams',
        pageCount: 193,
    },
    {
        title: 'The Name of the Wind',
        author: 'Patrick Rothfuss',
        pageCount: 662,
    },
]

// Your code here

const getTitlesWithMoreThan700Pages = (book) => {
    const filterByTitle = book.filter(obj => obj.pageCount > 700)
    return filterByTitle.map(obj => obj.title)
}

const booksWithMoreThan700Pages = getTitlesWithMoreThan700Pages(booksObj)
console.log(booksWithMoreThan700Pages)
    // Output: ["The Lord of the Rings"]


// Write an ES6 function that takes an array of numbers and returns the sum of all the even numbers in the array using the reduce function.

const numbers = [12, 23, 4, 2, 11, 21]
    // Your code here
const sumOfEvenNumbers = (sum) => {
    return sum.reduce((acc, curr) => (curr % 2 === 0 ? curr + acc : acc), 0)
}

console.log(sumOfEvenNumbers(numbers))
    // Output: 18


// Write an ES6 function that takes an array of objects representing students with properties name and score, and returns the average score of all the students using the reduce function.

const studentObj = [
    { name: 'John', score: 80 },
    { name: 'Jane', score: 90 },
    { name: 'Bob', score: 75 },
    { name: 'Alice', score: 85 },
]

// Your code here
const getAverageScore = (objScore) => {


    const filterScore = objScore.map(obj => obj.score)
    const averageScore = filterScore.reduce((acc, curr) => {
        return (acc + curr)
    })
    return averageScore / objScore.length;
}
console.log(getAverageScore(studentObj))
    // Output: 82.5

//Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns the total cost of all the products using the reduce function.

const productsObj = [
    { name: 'Shirt', price: 20, quantity: 2 },
    { name: 'Pants', price: 30, quantity: 1 },
    { name: 'Shoes', price: 50, quantity: 1 },
    { name: 'Hat', price: 10, quantity: 3 },
]

// Your code here
const getTotalCost = (products) => {
    const filterPrice = products.map(obj => obj.price * obj.quantity)
    return filterPrice.reduce((acc, curr) => acc + curr, 0)
}
console.log(getTotalCost(productsObj))
    // Output: 150


//14 Write an ES6 function that takes an array of strings and returns a single string that is the concatenation of all the strings using the reduce function.

const strings = ['Hello', ' ', 'world', '!']
    // Your code here
const concatenateStrings = (str) => {
    return str.reduce((acc, curr) => acc + curr, '')
}
console.log(concatenateStrings(strings))
    // Output: "Hello world!"

//15 Write an ES6 function that takes an array of numbers and returns the minimum number using the reduce function.

const numbersArray = [10, 5, 8, 3, 6]

// Your code here
const getMinimumNumber = (num) => {
    return num.reduce((acc, curr) => {
        return acc <= curr ? acc : curr
    }, num[0])
}
console.log(getMinimumNumber(numbersArray))
    // Output: 3