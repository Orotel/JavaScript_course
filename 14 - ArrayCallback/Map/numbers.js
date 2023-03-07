const numbers = [10,60,90,7]

const doubles = numbers.map(function(num){
    // se eu não retornar nada não acontecer nada
    return num*8
})

const isIven = numbers.map(function(num){
    return {
        value:num,
        isIven:num % 2 === 0  
    }
})
console.log(doubles)
console.log(isIven)