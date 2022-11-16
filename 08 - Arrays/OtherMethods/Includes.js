// Determines wheter an array includes a certain value among its entries
// Returning True or False.

// Example 1
const Numbers = [1,2,3]
let Include1arr = Numbers.includes(1)
console.log(Include1arr)

// Example 2
const Animals = ['cat','dog' ,'fish']// str ,position
let IncludeCat = Animals.includes     ('cat',0  )
console.log(IncludeCat)

// Example 3
let NumbersAnimals =Numbers.concat(Animals)
console.log(NumbersAnimals.includes(1,'cat'))

// Example 4
if(NumbersAnimals.includes(1,('cat',0))){
    console.log('YOU CAN DO IT')
}