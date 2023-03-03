function getMultiplier(multiplier) {
    return function (aNumber) {
        return multiplier * aNumber
    }
}
// estou colocando uma função dentro de outra 
const quintuple = getMultiplier(5)
const triple = getMultiplier(3)
const double = getMultiplier(2)
const zerou = getMultiplier(0)
// ao fazer isso estou colocando o argumento para a primeira pilha 
// e colocando ela em uma variavel.



console.log(double(7))
// aqui estou acessando o argumento da segunda pilha 