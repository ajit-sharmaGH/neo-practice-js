// Given an array, write an ES6 function that returns the total length of all the strings in an array.

const strings = ['apple', 'banana', 'cherry', 'date', 'blueberry']
    // Your code here
const totalLength = (totalStr) => {
    const addStr = totalStr.reduce((acc, curr) => {
        return acc + curr
    })
    return addStr.length;
}
console.log(totalLength(strings))
    // Output: 30//Write an ES6 function sumSquares that takes an array of numbers and returns the sum of the squares of all the numbers in the array

const numbers = [1, 2, 3, 4, 5]
    // Your code here
const sumSquares = (sq) => {
    const squaringNum = sq.map(num => num * num)
    return squaringNum.reduce((acc, curr) => acc + curr, 0)
}
console.log(sumSquares(numbers))
    // Output: 55

// Write an ES6 function that calculates and returns the total value of all items in an array of objects.

const items = [
        { name: 'Item 1', price: 10 },
        { name: 'Item 2', price: 20 },
        { name: 'Item 3', price: 30 },
    ]
    // Your code here
const totalValue = (item) => {
    const priceFilter = item.map(obj => obj.price)
    return priceFilter.reduce((acc, curr) => acc + curr, 0)
}
console.log(totalValue(items))
    // Output: 60

// 4 Write an ES6 function that takes an array of strings as input and concatenates them into a single string.

// Your code here
const concatStrings = (str) => {
    return str.reduce((acc, curr) => {
        return acc + curr
    }, '')
}
console.log(concatStrings(['this', 'is', 'fun'])) // Output: 'thisisfun'

// Write an ES6 function to multiply and return all the elements of a given array.

const numbersArr = [1, 2, 3, 4, 5]
    // Your code here
const product = (num) => {
    return num.reduce((acc, curr) => acc * curr, 1)

}
console.log(product(numbersArr))
    // Output: 120

//5 Write an ES6 function that takes an array of strings and returns the longest string.

const stringsArr = ['neogcamp', 'Haule Haule', 'code', 'Batman', 'Awesome']
    // Your code here
const longestString = (str) => {
    return str.reduce((acc, curr) => {
        return acc.length >= curr.length ? acc : curr
    }, str[0])
}
console.log(longestString(stringsArr))
    // Output: 'Haule Haule'

// 7 Write an ES6 function that takes an array of objects with name and age property, and returns the name of the oldest person.

const people = [
        { name: 'Jeena', age: 25 },
        { name: 'Priya', age: 30 },
        { name: 'Naina', age: 45 },
    ]
    // Your code here
const oldestPersonName = (peopleObj) => {
    return peopleObj.reduce((acc, curr) => {
        return acc.age >= curr.age ? acc.name : curr.name
    }, 0)
}
console.log(oldestPersonName(people))
    // Output: 'Naina'

//8  Write an ES6 function that takes an array of objects representing people with properties name and age, and returns an object with the average age of all the people.

const peopleObj = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 35 },
        { name: 'David', age: 40 },
    ]
    // Your code here
const getAverageAge = (ageObj) => {
    const filterAge = ageObj.map(obj => obj.age);
    const sumOfAge = filterAge.reduce((acc, curr) => acc + curr, 0)
    return {
        averageAge: sumOfAge / ageObj.length
    }
}

console.log(getAverageAge(peopleObj))
    // Output: { averageAge: 32.5 }

// 9 Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns an object with the most expensive product.

const productsObj = [
        { name: 'Bread', price: 10, quantity: 2 },
        { name: 'Clips', price: 20, quantity: 5 },
        { name: 'Knife', price: 30, quantity: 1 },
        { name: 'Slipper', price: 40, quantity: 3 },
    ]
    // Your code here
const findMostExpensiveProduct = (products) => {


    const expensiveProduct = products.reduce((acc, curr) => {
        return acc.price > curr.price ? acc : curr
    }, 0)
    return expensiveProduct
}
console.log(findMostExpensiveProduct(productsObj))
    // { name: "Slipper", price: 40, quantity: 3 }

// 10 Write an ES6 function that takes an array of strings and returns an object with the count of each string.

const fruits = [
        'apple',
        'banana',
        'banana',
        'cherry',
        'apple',
        'apple',
        'banana',
    ]
    // Your code here
const countStrings = (str) => {

    return str.reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr] += 1
        } else {
            acc[curr] = 1
        }
        return acc
    }, {})

}

console.log(countStrings(fruits))
    // Output: { 'apple': 3, 'banana': 3, 'cherry': 1 }