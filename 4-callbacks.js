// *** CALLBACKS *** //

// What datatypes can we pass into a function?

function example(callBack, name) {
  console.log(callBack, name)
  console.log(callBack(name))
}


function helloMachine(name){
  return `hello ${name}`
}
console.log(helloMachine('Bob Ross'))


// logger();

function doubler(num) {
  return num * 2
}

let num = [1,2,3,4,5];

for(let i = 0; i < num.length; i++){
  num[i] = doubler(num[i])
}

console.log(num)

function modifier(cb, arr){
for(let i = 0; i < arr.length; i++){
  num[i] = cb(arr[i])
  }
  return arr
}

console.log(modifier(doubler, num))

function assimilate(){
  return "Bob Ross"
}

var names = ['todd', 'toby', 'tomathy', 'timbo']

console.log(modifier(assimilate, names))



// What is a callback?

// Can we invoke a callback?

// Why on earth would we do this madness?

//// Dry code

//// Higher order functions that already exist

//// Asynchronous processes

//// Event listeners