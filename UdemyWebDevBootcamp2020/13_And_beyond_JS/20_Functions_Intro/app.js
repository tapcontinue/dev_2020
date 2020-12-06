//* 206. Arguments Intro
/*
function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

*/

//* 207. Functions With Multiple Arguments
/*
function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}
*/

//* 208. The Return Keyword

/*
// * Ex 1
function add(x, y) {
    return x + y;
}

const sum = add(10, 16)
const answer = add(100, 200)

console.log(`The sum is ${sum} and the answer is ${answer}`)
*/

// *Ex 2 - Bypass returns with conditional block
//* Return is how we get values out of a function. Save & capture.

// function add(x, y) {
//     if (typeof x !== 'number' || typeof  y !== 'number'){
//         return false;
//     }
//     return (x + y)
// }
//
// add(8, 11)
// add(8, 11)

// !QUIZ

// * Quiz 1
// too easy to include

// * Quiz 2
// function isShortsWeather(temperature){
//     if (typeof temperature !== 'number'){
//         console.log('Try again, temp must be number')
//     } else if(temperature >= 75){
//         return true;
//     } else{
//         return false;
//     }
// }
//
// isShortsWeather(74);

//* quiz 3
// function lastElement(lastItem) {
//     if (lastItem ==! true){
//         return null;
//     }
//     return lastItem.slice(-1)[0];
// }
//
// console.log(lastElement([3, 5, 7]))
// console.log(lastElement([1]))
// console.log(lastElement([]))

// * Quiz 4

// function capitalize(word) {
//     return word[0].toUpperCase() + word.slice(1);
// }
//
// console.log(capitalize('eggplant'))

// * Quiz 5

// function sumArray(amount) {
//     let total = 0;
//     for (let i = 0; i < amount.length; ++i) {
//         total += amount[i];
//     }
//     return total;
// }
//
// console.log(sumArray([1, 2, 3]))
// console.log(sumArray([2, 2, 2, 2]))
// console.log(sumArray([50, 50, 1]))

// * Quiz 6 - array
// function returnDay(day) {
//     let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//
//     if (day < 1 || day > 7) {
//         return null;
//     } else if (day == 1) {
//         return days[0]
//     }else if (day == 2) {
//         return days[1]
//     }else if (day == 3) {
//         return days[2]
//     }else if (day == 4) {
//         return days[3]
//     }else if (day == 5) {
//         return days[4]
//     }else if (day == 6) {
//         return days[5]
//     }else if (day == 7) {
//         return days[6]
//     }
// }
//
// console.log(returnDay(1));
// console.log(returnDay(7));
// console.log(returnDay(4));
// console.log(returnDay(0));

// * Quiz 6 dictionary

// function returnDay(day) {
//
//     let dict = {
//     1: 'Monday',
//     2: 'Tuesday',
//     3: 'Wednesday',
//     4: 'Thursday',
//     5: 'Friday',
//     6: 'Saturday',
//     7: 'Sunday',
// }
//
// if (day < 1 || day > 7){
//     return null;
// } else if (day == 1){
//     return dict[1]
// }else if (day == 2){
//     return dict[2]
// }else if (day == 3){
//     return dict[3]
// }else if (day == 4){
//     return dict[4]
// }else if (day == 5){
//     return dict[5]
// }else if (day == 6){
//     return dict[6]
// }else if (day == 7){
//     return dict[7]
// }
//
// }
//
// console.log(returnDay(0))
// console.log(returnDay(1))
// console.log(returnDay(2))
// console.log(returnDay(3))
// console.log(returnDay(4))
// console.log(returnDay(5))
// console.log(returnDay(6))
// console.log(returnDay(7))
// console.log(returnDay(8))



// *210. Function Scope

//* 212. Lexical Scope - nested or inner func has access same stuff as parent or g parent

// function bankRobbery() {
//     const heroes = ['Spider-Man', 'Wolverine', 'Black Panther', 'Bat-woman'];
//     function cryForHelp() {
//         function inner() {
//         for (let hero of heroes){
//             console.log(`Please help ${hero.toUpperCase()}`)
//             }
//         }
//         inner()
//     }
//     cryForHelp();
// }
//
// bankRobbery()

//* 213. Function Expressions another way to def a fun

// * Function statement:
// function add(x, y) {
//     return x + y
// }

// * Function expression - store a function in a variable.

// * Example 1
// const square = function (num) {
//     return console.log(num * num)
// }
//
// square(9);

//! functions are values in JS

//* 214. Higher Order Functions
//* function that accept functions as arguments

// * Ex 1
// function callTwice(func) {
//     func();
//     func();
// }
//
// function laugh() {
//     console.log('HAHAHAHAHAHAH');
// }
//
// callTwice(laugh)

// * Ex 2


// function callTwice(func) {
//     func();
//     func();
// }
//
//
// function rollDie(){
//     const roll = Math.floor(Math.random() * 6) + 1
//     console.log(roll)
// }
// callTwice(rollDie)

//* 215. Returning Functions
