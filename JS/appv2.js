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

for (let i = 1; i <= 20; i++) {
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
    else {
        console.log(i)
    }
}