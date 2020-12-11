//! 206. Arguments Intro
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

//! 207. Functions With Multiple Arguments
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

//! 208. The Return Keyword


//*  Ex 1
/*
function add(x, y) {
    return x + y;
}

const sum = add(10, 16)
const answer = add(100, 200)

console.log(`The sum is ${sum} and the answer is ${answer}`)
*/


//* Ex 2 - Bypass returns with conditional block
//* Return is how we get values out of a function. Save & capture.

/*function add(x, y) {
    if (typeof x !== 'number' || typeof  y !== 'number'){
        return false;
    }
    return (x + y)
}

add(8, 11)
add(8, 11)*/

// !QUIZ

//*  Quiz 1
// too easy to include

//*  Quiz 2
/*function isShortsWeather(temperature){
    if (typeof temperature !== 'number'){
        console.log('Try again, temp must be number')
    } else if(temperature >= 75){
        return true;
    } else{
        return false;
    }
}

isShortsWeather(74);*/

//* quiz 3
/*function lastElement(lastItem) {
    if (lastItem ==! true){
        return null;
    }
    return lastItem.slice(-1)[0];
}

console.log(lastElement([3, 5, 7]))
console.log(lastElement([1]))
console.log(lastElement([]))*/

//*  Quiz 4

/*function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}

console.log(capitalize('eggplant'))*/

//*  Quiz 5

/*function sumArray(amount) {
    let total = 0;
    for (let i = 0; i < amount.length; ++i) {
        total += amount[i];
    }
    return total;
}

console.log(sumArray([1, 2, 3]))
console.log(sumArray([2, 2, 2, 2]))
console.log(sumArray([50, 50, 1]))*/

//*  Quiz 6 - array
/*function returnDay(day) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (day < 1 || day > 7) {
        return null;
    } else if (day == 1) {
        return days[0]
    }else if (day == 2) {
        return days[1]
    }else if (day == 3) {
        return days[2]
    }else if (day == 4) {
        return days[3]
    }else if (day == 5) {
        return days[4]
    }else if (day == 6) {
        return days[5]
    }else if (day == 7) {
        return days[6]
    }
}

console.log(returnDay(1));
console.log(returnDay(7));
console.log(returnDay(4));
console.log(returnDay(0));*/

//*  Quiz 6 dictionary

/*function returnDay(day) {

    let dict = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
}

if (day < 1 || day > 7){
    return null;
} else if (day == 1){
    return dict[1]
}else if (day == 2){
    return dict[2]
}else if (day == 3){
    return dict[3]
}else if (day == 4){
    return dict[4]
}else if (day == 5){
    return dict[5]
}else if (day == 6){
    return dict[6]
}else if (day == 7){
    return dict[7]
}

}

console.log(returnDay(0))
console.log(returnDay(1))
console.log(returnDay(2))
console.log(returnDay(3))
console.log(returnDay(4))
console.log(returnDay(5))
console.log(returnDay(6))
console.log(returnDay(7))
console.log(returnDay(8))*/



//! 210. Function Scope

//! 212. Lexical Scope - nested or inner func has access same stuff as parent or g parent

/*function bankRobbery() {
    const heroes = ['Spider-Man', 'Wolverine', 'Black Panther', 'Bat-woman'];
    function cryForHelp() {
        function inner() {
        for (let hero of heroes){
            console.log(`Please help ${hero.toUpperCase()}`)
            }
        }
        inner()
    }
    cryForHelp();
}

bankRobbery()*/

//! 213. Function Expressions another way to def a fun

//*  Function statement:
/*function add(x, y) {
    return x + y
}*/

//*  Function expression - store a function in a variable.

//*  Example 1
/*const square = function (num) {
    return console.log(num * num)
}

square(9);*/

//! functions are values in JS

//! 214. Higher Order Functions
//* function that accept functions as arguments

//*  Ex 1
/*function callTwice(func) {
    func();
    func();
}

function laugh() {
    console.log('HAHAHAHAHAHAH');
}

callTwice(laugh)*/

//*  Ex 2


/*function callTwice(func) {
    func();
    func();
}


function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}
callTwice(rollDie)*/

//! 215. Returning Functions

//* EX 1
/*function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5){
        return function (){
            console.log('Congrats!')
        }
    } else{
        return function (){
            alert('You are infected!')
        }
    }
}

makeMysteryFunc(.3)*/

//* Ex 2 - Is this number between 50 & 100?

/*function isBetween(num) {
    return num >=50 && num <= 100;
}
console.log(isBetween(51))*/


//* Ex - 3
/*function isBetween(num) {
    return num >= 50 && num <= 100
}

function isBetween2(num) {
    return num >= 1 && num <= 10
}

console.log(isBetween2(51))*/

//*  Ex 4 - Factory function - Return a fun as a value

/*function makeBetweenFunc(min, max) {
    return function(num){
        return num >= min && num <=max;
    }
}

const isChild = makeBetweenFunc(0, 18);
const isSenior = makeBetweenFunc(65, 120);

console.log(isChild(18))
console.log(isSenior(65))*/

//*  216 Defining Methods

/*const myMath = {
    PI: 3.14159,
    square : function (num){
        return num * num;
    },
    cube: function (num){
        return num ** 3;
    }
}

console.log(myMath.square(2))
console.log(myMath.cube(2))*/

//* Short hand - skip the function keyword

/*const myMath = {
    PI: 3.14159,
    square(num){
        return console.log(num * num);
    },
    cube(num){
        return console.log(num ** 3);
    }
}

myMath.square(2)
myMath.cube(2)*/

//! QUIZ

/*const square = {
    area(side){
        return side*side
    },
    perimeter(side){
        return side * 4
    }
}

console.log(square.area(10))
console.log(square.perimeter(10))*/

//! 217. The Mysterious Keyword 'this'

//* Example 1

/*const person = {
    first: 'Robert',
    last: 'Herjavec',
    fullName(){
        return `${this.first} ${this.last}`
    }
}

console.log(person.fullName());
console.log(person.last = "Plant");
console.log(person.fullName());*/

//* Example 2

/*const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow (){
        console.log(`${this.name} says Meow!`)
    }
}

cat.meow()*/

//! The value of *THIS* depends on the invocation content of the func it is used in.

/*const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow (){
        console.log('This is', this)
        console.log(`${this.name} says Meow!`)
    }
}

cat.meow()

const meow2 = cat.meow();
meow2();*/

//! QUIZ

/*let hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg (){
        this.eggCount += 1;
        return 'EGG'
    }
}

console.log(hen.name)
console.log(hen.eggCount)
console.log(hen.layAnEgg())
console.log(hen.layAnEgg())
console.log(hen.eggCount)*/

//!  218. Using Try/Catch. If you have a try you NEED a catch.

//*  Example 1
/*try{
    hello.toUpperCase();
} catch {
    console.log('ERROR!')
}*/

//*  Example 2

/*function yell(msg){
    try {
        console.log(msg.toUpperCase().repeat(3))
    } catch (e) {
        console.log(e);
        console.log('Plz pass a string');
    }
}

yell('hello')
yell(111)*/

//! Section 22: Callbacks & Array Methods

//* For EACH - (kinda legacy as for-of can do the same thing)
// Calls the func ONCE per element in the array.

//*  Example 1
/*
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
nums.forEach(function (n){
    console.log(n * n)
});

console.log('');

nums.forEach(function (el){
    if (el % 2 == 0){
        console.log(el)
    }
})
*/


//*  Example 2

/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

ForEach
numbers.forEach(function (el){
    console.log(el)
})

Same thing in a ForOf
for (let i of numbers) {
    console.log(i)
}*/

//*  Example 3

/*const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 100
    },
    {
        title: 'Alien',
        score: 90
    },

]*/

//* We want to print something like 'Alien 90/100'

//*For-each version:
/*
movies.forEach(function (movie){
    console.log(`${movie.title} - ${movie.score}`)
})
*/


//* For-of version:
/*for (const movie of movies) {
    console.log(`${movie.title} - ${movie.score}/100`)
}*/


//* MAP - makes new array with the resutls of calling a callback on every element in the array


//* Example 1:
/*const texts = ['rolf', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function (t){
    return t.toUpperCase()
})

console.log(texts);
console.log(caps);*/

//*  Example 2:
/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const doubles = numbers.map(function (num){
    return num * 2;
})

console.log(doubles)*/

//*  Example 3 - make array of movie titles:

/*const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 100
    },
    {
        title: 'Alien',
        score: 90
    },

]

const titles = movies.map(function (movie){
    return movie.title.toUpperCase();
})

console.log(titles)*/

//! QUIZ!

//* Take 1 - Before Arrow functions (my code failed!)
/*
names = (['   Timothee', '    darth_hater', 'sassyfrassy   ', 'elton john   '])

const cleanNames = names.map(function (names){
    return names.trim();
})

console.log(cleanNames)
*/

//*  Take 2 - After arrow functions

//Coming soon

//! 223. Intro to Arrow Functions

//* Example 1: More compact, same thing.
/*
const square = (x) => {
 return x * x;
};

const sum = (x, y) => {
 return x + y;
};

console.log(square(4))
console.log(sum(4, 8))
*/

//* Example 2 - no paramater? Gotta pass empty ()
/*const rolled = () => {
    return Math.floor(Math.random() * 6) + 1
}

console.log(rolled())*/

//* Example 3: Only 1 argument () is optional
/*const square = x => {
 return x * x;
};

console.log(square(9))*/

//! QUIZ!

/*
const greet = (name) => {
 return `Hello ${name}`;
};

console.log(greet('Luna'))
*/

//! 224. Arrow Function Implicit Returns
//* - only work with 1 value very clearly just a single expression to be evaluated & returned

//* Ex 0 - regular function expression
/*const isEven = function (num){
    return num % 2 === 0;
}*/

//* Ex 1 - implicit return. No () or {}
/*const isEven = num =>(
    num % 2 === 0
)*/

//* Ex 2 - 1 liner
/*const isEven = num => num % 2 === 0;
console.log(isEven(5))*/

//* Ex 3 - normal size
/*
const rollDie = () => {
 return Math.floor(Math.random()* 6) + 1;
}
console.log(rollDie())
*/

//* Ex 3 - shrunk
/*const rollDie = () =>(
    Math.floor(Math.random() * 6) + 1
)*/

//* Ex 4 - Ultra tiny (same as 2 - 1)

/*const add = (a, b) => console.log(a + b)
add(41, 23)*/

//! 225. Arrow Functions Wrapup

/*const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 100
    },
    {
        title: 'Alien',
        score: 90
    },

]*/

//* regular version:
/*const newMovies = movies.map(function (movie){
    return `${movie.title} - ${movie.score/10}`
})*/

//* arrow version
/*const newMovies = movies.map(movie =>(
    `${movie.title} - ${movie.score / 10}`
))
console.log(newMovies)*/

//! 226. setTimeout and setInterval - Does not seem practical at this time.

//* Ex 1
/*setTimeout(() => {
    console.log('HELLO')
}, 3000)*/

//* Ex 2 - repeat at setInterval
/*const id = setInterval(() =>{
    console.log(Math.random())
}, 2000)*/

//!  227. The filter Method - makes new array when all elements pass a test

// * Example 1
/*const nums = [9,8,7,6,5,4,3,2,1];
const odd = nums.filter(n => {
    return n % 2 === 1;
})

const smallNums = nums.filter(n => n < 5);
console.log(smallNums)*/

//* Example 2

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
//
// numbers.filter(n =>{
//     return n < 10
// })

//* Example 3

/*const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    },
]*/

//* Normal
/*const goodMovies = movies.filter(movie =>{
    return movie.score > 80
})*/

//* Implicit return
/*const goodMovies = movies.filter(m => m.score > 80)
const badMovies = movies.filter(m => m.score < 70)
const recentMovies = movies.filter(m => m.year > 2000)

console.log(goodMovies, badMovies, recentMovies)*/

// * Chain 'em together.

//* Ex 1
// movies.filter(m => m.score > 80).map(m => m.title);

//* Ex 2 - When it gets too long:

/*
movies
    .filter(m => m.score > 80)
    .map(m => m.title);
*/

//!QUIZ

// const usernames = ['mark', 'staeysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']

//* My version based off MDN
// const validUserNames = usernames.filter(user => user.length < 10);

//* The solution - I need to insert usernames
// const validUserNames = usernames => usernames.filter(user => user.length < 10)

//! 228. Some & Every Methods - boolean methods

//* EVERY - True if ALL of the array elements pass the test
// const exams = [80,98,92,78,77,90,89,84,81,77]
// exams.every(score => score >= 75);

//* SOME - True if ANY of the array elements pass the test
// const exams = [0,0,0,0,0,0,0,0,0,77]
// exams.some(score => score >= 75);

//! QUIZ
const numbers = [1, 2, 3]

const allEvens = arr => arr.every(num => num % 2 ===0)

console.log(allEvens())
