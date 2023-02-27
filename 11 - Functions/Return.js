// para retornar alguma coisa de uma função, não nos basta apenas
// colocar uma variavel para a função like:

const resultadoDaSoma = function sum(a,b){
    console.log(a+b)
}
console.log(resultadoDaSoma)// a variavel pegará a funao e não o resultado

// portanto para retornar um valor de uma função voce precisa pedir o 
//RETURN

function soma(a,b){
    return a+b
}
const TrueResult = soma(10,15)
console.log(TrueResult)