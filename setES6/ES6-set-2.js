// Create an object person with two properties, "name" and "age" and then updates the "age" property to a new value. Initial age should be 30.

// const person = {
//   name:"ajit sharma",
//   age: 30
// }

// const updateAge = age => person.age=age+5;

// console.log(updateAge(person.age))

// Write a function that takes an object car and returns true if the car is a sports car (i.e. has a horsepower property greater than or equal to 300)

const car1 = { make: 'Porsche', model: '911', horsepower: 450 };
const car2 = { make: 'Toyota', model: 'Camry', horsepower: 200 };


const isSportsCars = car => {
    return car.horsepower >= 300;
}

// orrr
//  const isSportsCar = ({ horsepower }) => horsepower > 300


// console.log(isSportsCars(car1))

// console.log(isSportsCar(car2))


//  Write a function that takes an object person and a number num as arguments and returns true if the person's age plus num is greater than 21. Otherwise, it should return false.
const person1 = { name: 'Ajay', age: 20 };

const isEligible = (person, num) => (person.age + num) > 21;
console.log(isEligible(person1, 0))

// orrr

const isEligible2 = ({ age }, num) => age + num > 21;

console.log(isEligible2(person1, 9))

// Write a function that takes an object blog and returns true if the blog has more than 1000 views (i.e. has a views property greater than 1000)

const blog1 = { title: 'How to Learn JavaScript', author: 'John Doe', views: 1430 };
const blog2 = { title: '10 Reasons to Start a Blog', author: 'Jane Smith', views: 500 };

const getViews = ({ views }) => views > 1000;
console.log(getViews(blog2));

// Swap the values of two variables using array destructuring.

let a = 1;
let b = 2;
[a, b] = [b, a]

console.log(a)
console.log(b)


// Convert this function into ES6 with least amount of characters.

// function add(a = 30, b = 0) {
// 	  return a + b;
// 	}

// console.log(add(2, 3));

const add = (a = 30, b = 0) => a + b;
console.log(add(2, 3));

// 7. Write an ES6 function combineObjects with least amount of characters which merges two objects into one.

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combineObjects = (obj1, obj2) => {
    return {...obj1, ...obj2 }
}
console.log(combineObjects(obj1, obj2))

//orrr


const combinedObjects = (obj1, obj2) => ({...obj1, ...obj2 })



console.log(combinedObjects(obj1, obj2))

// Convert the function getData, into an ES6 function with least amount of characters. 

const person = {
    name: 'John Doe',
    address: {
        city: 'New York',
        state: 'NY',
    },
};

const getData = personOne => {
    console.log(person.name)
    console.log(person.address.city)
}
getData(person)
    // we can also do it using destructuring property

const getDatas = ({ name, address: { city } }) => {
    console.log(name);
    console.log(city)
}

getDatas(person)


// Write a function that takes a string as input and returns the string in all uppercase letters.

const stringToUppercase = string => string.toUpperCase();
console.log(stringToUppercase("sharma here"))

// 10 Write a function that takes two strings as input and concatenates them together.

const concatenateString = (str1, str2) => str1 + " " + str2;

console.log(concatenateString("Ajit", "Sharma"))

// Write a function that takes an array and returns the last element in the array.

const lastElement = array => array[array.length - 1]
console.log(lastElement([1, 2, 3, 425, 5]));
// or
// const lastElement = array => {
// 	let last = '';
// 	for(const item of array) last = item
// 	return last
// }


// Write a function that takes an array and returns the first element of the array.

const firstElement = array => array[0];

console.log(firstElement([9, 2, 3, 4, 5]))

// Write a function that takes an array and a number and returns the sum of first element and the number.

const sumFirstElement = (array, num) => array[0] + num;
console.log(sumFirstElement([9, 3, 1], 7))


// Write a function that takes an array and returns the sum of first and last element.

const sumFirstAndLast = (array) => array[0] + array[array.length - 1]
console.log(sumFirstAndLast([2, 3, 4, 5, 32]))


// 15. Write a function that takes an object representing a person's information (name, age, occupation) and returns a template literal that includes the person's name and age in a sentence.
const personOne = { name: 'John', age: 25, occupation: 'Software Engineer' }
const personTwo = { name: 'Jane', age: 45, occupation: 'Data Analyst' }


const personInfo = ({ name, age }) => `${name} is ${age} years old `;

console.log(personInfo(personOne))
console.log(personInfo(personTwo))