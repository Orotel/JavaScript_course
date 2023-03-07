const nums  = [12,23,4,5,54,74]

const evens = nums.filter(number => number %2 === 0 )
const odd = nums.filter(number => number %2 === 1 )
const bigNums = nums.filter(number => number >= 50)

console.log(evens)
console.log(odd)
console.log(bigNums)