// digamos que queiramos uma função que apenas some valores.
// não sabemos quantos valores irão nos parâmetros.
const sumOld = (a,b,c,d,e,f,g) =>a+b+c+d+e+f+g 
// portanto não é possivel fazer


// usar esses 3 pontos eu transformo o que vir  no meu argumento em array.
// transformando meus argumentos em array consigo usar o HOF reduce.
// só consigo usar o HOF reduce em um array *-*

function sum  (...nums){
    return nums.reduce((total , currentVal) => {
        return total + currentVal
    })
}
const multiply = (...nums) => (
    nums.reduce((total,currentVal) => total *currentVal)
)
console.log(multiply(10,80,100))