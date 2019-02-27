// *** OBJECTS *** //

// How can we store related pieces of data?
var name = 'Beth';
var hair = 'blonde';
var email = 'beth@dm.com';
var password = '$ecret';




// Would an array work?

const user = {
    name: name,
    hair: hair,
    email: email,
    password: password,
}

console.log(user)
console.log(user.name)


// What is an object? What syntax does it use?

// What can we keep in an object?

const canIReallyDoThat = {
    first: true,
    second: null,
    third: undefined,
    fourth: `string`,
    fifth: 5,
    sixth: {name: `name`},
    seventh: [1,2,3],
    eighth: function(){
        return 5
    },
}

console.log(canIReallyDoThat.sixth.name.length)
console.log(canIReallyDoThat.fourth)

// How can we access the items in an object?

// How can we add more data to an object?

canIReallyDoThat.bestMan = `Bob Ross`

console.log(canIReallyDoThat.bestMan)

let thing = canIReallyDoThat.eighth()
console.log(thing)



// METHODS // pattern of putting a function on an object

// What are functions that are stored in objects called? What syntax do they use?

// How do we write them?

// How do we invoke them?




// NESTED DATA //

// What if we have arrays and objects inside of each other???
//// Simple data types
//// Objects
//// Methods on objects
//// Using a for loop


const myData = {
    name: `Bob Ross`,
    favoriteThings: ['hobby', 'activity', 'painting'],
}

console.log(myData.favoriteThings[0])

for(let i = 0; i < myData.favoriteThings.length; i++){
    console.log(myData.favoriteThings[i])
    myData.favoriteThings[i] = 'painting'
}

console.log(myData.favoriteThings)

