console.log('Helloooo')

//console.log('Comments')

/*
Variables
multiple lines to exclude
*/

const firstName = 'Mandy'
const year = 2002
const earthGravity = 9.8

//earthGravity = 10
// won't work as we can't change value of constant 
// So to change values we will use let instead of const

let number = 10
number = 20 // cahnged 10 to 20
let anything

console.log(firstName)
console.log(year)
console.log(earthGravity)
console.log(number) // Showed the latest one
console.log(anything) // Will show as undefined


//Arrays
const listofColors = ['red', 'green', 'blue']

console.log(listofColors) // will show complete list we can also show only one of them by calling them from their numbers and arrays always starts from 0 as we know.
console.log(listofColors[0])


//Objects
const testObject = {
    firstName: 'Mandy',  // , is necceassry u missed this time
    year: 2002
}

console.log(testObject.firstName)
console.log(testObject.year)


//Operators
 let nextYear = year + 1 // 2003
 console.log(nextYear)

 nextYear = nextYear +1 // 2004
 console.log(nextYear)

 //nextYear += 10 // 2014
 //console.log(nextYear)

 //nextYear -- // 2013
 //console.log(nextYear)

 //console.log(1 == 1) // true
 //console.log(1==1 && 2 == 2) //true
 console.log(1 >= 0 || 10 === 20) // false