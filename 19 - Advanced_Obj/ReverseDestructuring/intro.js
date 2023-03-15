//ShortHands Properties
const reviews = [4.5,5.0,2.8,3.5,4.0,3.5]
const max = Math.max(...reviews)
const min = Math.min(...reviews)
const sum = reviews.reduce((total,currVal) => total+currVal)
const avg = sum / reviews.length

// simplify objects
// no destructuring aprendiamos a transformar as keys de um objeto em VAR
// aqui colocamos variaveis em keys de um objeto
const stats = {reviews,max,min,sum,avg}
console.log(stats)