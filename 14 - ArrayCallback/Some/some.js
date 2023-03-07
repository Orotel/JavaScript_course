const words = ['dog','dig','log','bag','aag']

// contrario de every , no some se qualquer elemento der true o resultado vai ser true , ele atua como se fosse o ||

const somebeginningWithD  = words.some (words => words[0] === 'd')//True
const everybeginningWithD = words.every(words => words[0] === 'd')//false

console.log(somebeginningWithD)
console.log(everybeginningWithD)