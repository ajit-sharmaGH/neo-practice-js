// 1, Create a function that takes an array of strings as an argument and returns a string that includes the number of items in the array and the first and last items.

const formatArray = (array) => `The array has ${array.length-1} items, and the first item is "${array[0]}" and the last item is "${array[array.length-1]}" `;

console.log(formatArray(["apple", "banana", "ajit ", "sharma"]))

// Create a function that takes a product object as an argument and returns a string that includes the product name, price, and a message based on whether it is in stock or not.

const product = {
    name: 'Socks',
    price: 249,
    inStock: false,
};

const formatProductObj = ({ name, price, inStock }) => ` ${name} consts INR ${price} and ${inStock===true ? "in Stock" : "not in Stock"} `

console.log(formatProductObj(product))

//3)  Write a function findPerson that takes an array of person objects and a name as parameters and returns the object with the matching name, or null if not found.

const findPerson = (people, naming) => {
    return people.find(person => person.name === naming)
}
console.log(findPerson([{ name: 'Ajit', age: 22 }, { name: 'Akhil', age: 25 }], "Ajit"));


// 4) Write a function that uses destructuring to extract the first two elements from an array, and returns them in an object with keys 'first' and 'second'.
const pickFirstAndSecond = (array) => {
    return `first: ${array[0]}, second :${array[1]}  `
}

console.log(pickFirstAndSecond(["orange", "banana", "apple"]))


// 5 Convert the following code to ES6+ syntax with minimum number of characters.

function startsWithA(str) {
    if (str.charAt(0) === 'A') {
        return true;
    } else {
        return false
    }
}

console.log(startsWithA("Akshita"))
    // true
console.log(startsWithA("Jeena"))
    // false


const userData1 = {
    name: 'Gaurav',
    postalCode: '12134',
    country: 'Japan',
}
console.log(printData(userData1)); // Gaurav lives in Japan


const userData2 = {
    name: 'Pritam',
    postalCode: '560223',
    country: 'India',
}
console.log(printData(userData2)); // Pritam lives in India


const product1 = {
    name: "Apple MacBook Air 2020",
    specification: {
        capacity: "256GB",
        size: "13.3 Inch"
    },
    price: 82900
}

console.log(printProductDetails(product));


const persons = [
    person = {
        name: "ajit",
        age: 21,
        salary: 20000
    }

]
console.log(persons.map(item => item.salary));
let sal = persons.map(item => item.salary);
console.log(sal);

console.log(persons.filter(sal => sal))
let sall = persons.filter(sal => sal);
console.log(sall);
console.log(persons.filter(item => item.salary < 30000))