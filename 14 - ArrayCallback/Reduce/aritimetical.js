const numbers = [18,7,95,18,94,1,9,92,1,898,90]

// just simple uses to reduce
const sum = numbers.reduce((total,currentValue) => {
    return total +currentValue
} )
const multiply = numbers.reduce((total,currentValue) => {
    return total *currentValue
} )


console.log(sum)
console.log(multiply)