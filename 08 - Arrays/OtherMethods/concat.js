// Example 1
const zero = 0 
let PositiveNumbers = [1,2,3,4,5,6,7,8,9,]
let NegativeNumbers = [-1,-2,-3,-4,-5,-6,-7,-8,-9,]
let RealNumbers = NegativeNumbers.concat(zero,PositiveNumbers)

console.log(RealNumbers)

// Example 2
const array1 = ['a','b','c']
const array2 = ['d','e','f']
let UnitedArrays = array1.concat(array2)
// we can make only a print to de concat,without make another variable
console.log(array1.concat(array2))
console.log(UnitedArrays)

//Example 3 - Concatenating Values to an array
const letters = ["a","b","c"]
const AlphaNumeric = letters.concat(1,2,3);
console.log(AlphaNumeric)

//Example 4 - concatenating nested arrays 
const num1 = [[1],2];
const num2 = [2,[3]];
const Numbers = num1.concat(num2);
console.log(Numbers)
num1[0].push(4)
console.log(Numbers)
