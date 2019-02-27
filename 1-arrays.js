// *** ARRAYS *** //

// How can we store a list?
const first = 'buy groceries';
const second = 'take out trash';
const third = 'wash laundry';

//What is an array
// Contain a list of items.
// Ordered, accessible by numbers.

      //array     //string
const toDoList = [first, second, third]

console.log(toDoList[0])
console.log(toDoList.length)

const index = 0
console.log(toDoList[index])

console.log(toDoList[toDoList.length -1])
        //accessing the last item of an array

console.log(typeof toDoList.length)

// What is an array? What syntax does it use?

// What can we keep in an array?
    // Anything.
//
//const literallyAnything = [false, 26, 'yeah', null, undefined, {object: 'example'},  [1, 2]],

// How can we access the items in an array?
const nestedArray = [1, [2, [3]]]
console.log(nestedArray[1])

// How can we access the end of an array?

// METHODS //
const methodsExample = [1,2,3]

// push
methodsExample.push(10)

console.log(methodsExample)

// pop

methodsExample.pop()

console.log(methodsExample)

// unshift

methodsExample.unshift(10)

console.log(methodsExample)

// shift

methodsExample.shift(1)

console.log(methodsExample)

// slice

methodsExample.slic

// splice
