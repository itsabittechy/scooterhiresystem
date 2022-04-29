// declare a variable which can be overwritten later
let age = 34
//next year
age = 35

// declare a variable which cannot be overwritten
const name = 'Simon'

// use backticks `` to put stuff into a string
const msg = `Hello my name is ${name} and next year I will be ${age}, so I am currently ${age - 1}.`
console.log(msg)


// functions
function msgMaker (a, b) {
    console.log(`I am ${a} and I am ${b} years old.`)
}
msgMaker('Sharna', 20)
msgMaker('Simon', 34)

// assigning from a function
function add(x, y) {
    const z = x + y
    return z
}
const myResult = add(2, 5)
console.log(myResult)

// composition of functions
const confusingExample = add(add(4,2), add(5,3))
console.log(confusingExample)

// arrays
let people = ['Simon', 'Sharna', 'Ali', 'Sam']
//add a single element (this mutates the array)
people.push('Eleanor')
console.log(people)
// append another array (this creates a new array)
people = people.concat(['Zak', 'Jibran'])
console.log(people)
// change all the elements in an array with map (this creates a new array)
people = people.map(p => p.toUpperCase())
console.log(people)
// there is a lot more info on arrays https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
