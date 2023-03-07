const numbers = [84, 154, 6498, 17, 2917, 621, 2, 9, 6, 989, 187, 6223]
// metodo de achar o maior e o menor numero de um array de numberos 


// maior
const maxValue = numbers.reduce((max, currentValue) => {
    return Math.max(max, currentValue)
}) 

//menor
const minValue = numbers.reduce((min,currentValue) => (
     Math.min(min,currentValue)
))

console.log(maxValue)
console.log(minValue)