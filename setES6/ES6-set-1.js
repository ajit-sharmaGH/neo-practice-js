// Write a function that takes a user's age and determines if they are old enough to vote (age 18 or older).

const isEligibleToVote = age => age >= 18;
console.log(isEligibleToVote(20));



//Write a function that takes two numbers as input and determines which one is greater.


const isGreater = (num1, num2) => num1 > num2 ? `${num1} is greater than ${num2}` : `${num2} is greater than ${num1} `;

console.log(isGreater(8, 5));


//Write a function that takes a number as input and determines if it is positive or negative.

const checkNum = num => num > 0 ? `Positive Number` : `Negative Number`;
console.log(checkNum(-9));


// Write a function that takes a number as input and determines if it is even or odd.

const isEvenOdd = (num) => num % 2 == 0 ? "Even Number" : "Odd Number";
console.log(isEvenOdd(8));




//Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.

// const checkForAlphabets = string => {
//   for(let i = 0; i<string.length; i++){
//     if(string[i]==="a" || string[i]==="A"){
//        return "Includes a"
//      }
//       else{
//       return "Doesn't include a"
//     }

//     }
//   }
// console.log(checkForAlphabets("rubika"))

const checkForAlphabetA = word => {
    for (let i = 0; i < word.length; i++)
        if (word[i] === "a" || word[i] === "A")
            return "a"
    return "not a"
}

console.log(checkForAlphabetA("rdjk"))


//Write a function that takes a string as input and determines if it is longer than 5 characters.


const checkLength = string => {
    let count = 0;
    for (i in string)
        count++;
    return count > 5 ? "more than five chars" : "less than five chars"
}

console.log(checkLength("akdjtk"))




// Write a function that takes a number as input and determines if it is between 1 and 10.

// const isBetweenOneTen = num => (num>=1 && num<=10)? "true":"false"

// console.log(isBetweenOneTen(19));

// Orrrr

const isBetweenOneTen = num => {
    return (num >= 1 && num <= 10);
}
console.log(isBetweenOneTen(39))



// Write a function that takes a string as input and determines if it contains the word "hello".

// const isHelloPresent = sentence =>{
//   let word = sentence.split(" "); 
//    for(let i=0; i<sentence.length-1; i++){
//      if(word[i]=== "hello" || word[i]==="HELLO" || word[i] === "Hello"){
//        return "true"
//      }
//      else{
//        // return "false"
//      }
//    }
// }
// console.log(isHelloPresent("helo man ajit hello"))

// const isHelloPresent = phrase => (phrase.includes("Hello") || phrase.includes("hello"))

// console.log(isHelloPresent("Hello World")) // true
// console.log(isHelloPresent("World")) // false


const isHelloPresent = phrase => {
    const phraseArray = phrase.split(" ");
    for (word of phraseArray) return word.toLowerCase() === "hello"
}

console.log(isHelloPresent("Hello World")) // true
console.log(isHelloPresent("World")) // false



// Write a function that takes a number as input and determines if it is a multiple of 3.

//  const isMultipleOfThree = num => num % 3===0 ? "Multiple of three": "not multiple of three"

// console.log(isMultipleOfThree(8))

// //orrrr
const isMultipleOf3 = num => {
    return num % 3 === 0;
}

console.log(isMultipleOf3(8))


//Write a function which takes in a number as input and returns it after multiplying by 10.


const myltiplyByTen = num => num * 10;
console.log(myltiplyByTen(40))



// Console individual values of the product object using object destructuring.

const product = {
    title: "iPhone",
    price: 5999,
    description: "The iPhone is a smartphone developed by Apple"
}

const { title, price, description } = product;
console.log(title);
console.log(price);
console.log(description);




// 1. Create an object book with properties title, author, and pages. Create a function getBookDetails that takes a book object as a parameter and returns if the book has more than 100 pages

const book = {
    title: "book title",
    author: "ajit sharma",
    pages: 050
}

const getBookDetails = page => {
    return book.pages > 100;
}

console.log(getBookDetails(book));




// Create a function changeOccupation that takes an object person and a string newOccupation as parameters, and changes the occupation property of the person object to the newOccupation. Log the person object to the console before and after calling the function.

const person = {
    name: "ajit sharma",
    age: 22,
    occupation: "student"

}
const changeOccupation = (person, newOccupation) => person.occupation = newOccupation;

console.log(person)
changeOccupation(person, "we dev")
console.log(person);



// Given an array numbers containing the numbers 1, 2, and 3. Use array destructuring to log each number to the console.



const numbers = [1, 2, 3];

const [a, b, c] = numbers;

console.log(a);
console.log(b)
console.log(c)




//Convert the given function into ES6 with least amount of characters.

const defaultParamsFunc = (a, b, c = 4) => a * b * c;

console.log(defaultParamsFunc(3, 10));