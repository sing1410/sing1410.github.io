//function add() {   // Creating function...
  //  console.log(1 + 2)
   // console.log('this function does a lit of stuff')
   // console.log(100-50)
//} //Dosen't run the code

//add() // calling function...

///////////////////////////////////////////////////////////////////////////

//Data
//const quantityA = 1 // Global varialbles
//const quantityB = 2
///////////////////////////////////////////////////////////////////////////
//Code
function add(valueA, valueB) {
    const sum = valueA + valueB
    return sum
    

}

//Subtraction
function subst(valueA, valueB) {
    console.log(valueA - valueB)
}

//Run
//add(1, 2) //passing data into function
// above adding valueA and valueB
//add(100, 60)
//add(10, 20)
//add(683,3836)

////////////////////////////////////////////////////////////////////////////

//subst(10,5)
//subst(100,20)
//subst(22,22)
//subst(10,11)

const result = add(1,2)
console.log(result) // 3
console.log(add(5, 5)) // 10

