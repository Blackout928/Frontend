// Loops: Be prepared to be un alive
// DRY = Don't Repeat Yourself

// 3 types of loops
// For loop
// while loop
// do while loop
// let count = 0

// while (count <= 99) {
//    count = count + 1
//    console.log(count)
// }
 

// for (let i = 1; i <= 100; i+=2) {
//     console.log(i)
// }
 
//let i = 1; sets scope variable to 1
//i < 100; "i" less than how many times we want to loop
// i++ increases i by 1

//can be set with variables and i++ is customisable EVERYTHING IS


// this is my attempt for a question to replace all 
// numbers divisible my 5 and/or 3 with words

// for (let i = 0; i <= 20; i++) {
//     if (i % 3 && i % 5) {
//         console.log("Frontend")
//     }
//     else if (i % 3) {
//         console.log("simplified")
//     }
//     else if (i % 5) {
//         console.log('frontend simplified')
//     }
//     else {
//         console.log(i)
//     }
// }

//solution

for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(`${i} --> Frontend Simplified`)
    }
    else if (i % 3 === 0) {
        // 0 is a falsey value, so 6 % 3 will output 0 because there is no remainder, so we want to check if the value if false 
        console.log(`${i} --> Frontend`)
    }
    else if (i % 5 === 0) {
        console.log(`${i} --> Simplified`)
    }
    else if (i % 8 === 0) {
        console.log(`${i} --> fortnite battle pas`)
    }
    else {
        console.log(i) 
    }
}

//fard thingy 
//print out every character in a string

let phrase = "Frontend Simplified"

for (let i = 0; i <= phrase.length; i++) {
    console.log(phrase[i]);
}

//functions 
//this is actually fun

//DRY - Don't repeat yourself

console.log("welcome to amogus, David")
console.log("welcome to amogus, Xav")
console.log("welcome to amogus, Alah Akbah")

// no, very bad


//function definiton
function welcomePerson(name) {
    console.log(`Welcome to Amogus, ${name}`)
}
// call the function
welcomePerson("jahamae")
welcomePerson("fortiniiitie")
welcomePerson("fortiniiitie pubagee")


//here is used more variables

function userid(firstName, lastName, job, numberid) {
    console.log(`Hello, ${firstName} ${lastName}. You are ${job}. Your ID is ${numberid}`)
}
// separate strings with comma
userid("Olivia", "Pierce", "The Regional Manager Of the UAC", "39436X")

//return keyword

function fn() {
    return '5'
    console.log('MA BALLS')
    
}

console.log(fn())

//return make the function equal to the return value

function sumOfTwoNumbers(num1, num2) {
    return num1 + num2
}

console.log(sumOfTwoNumbers(33333, 34325))