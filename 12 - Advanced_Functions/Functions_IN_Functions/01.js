

function makeBetweenFunc(min,max){
    return function (value){
        return value >= min && value <= max

    }
    
}
const test1 = makeBetweenFunc(30,40)
console.log(test1(30))
/* Aqui eu fiz uma função Makebetween , dentro do retorno dela existe tambem outra função que tambem tem um retorno.
para acessar o primeiro retorno eu preciso  coloca-lo em uma variavel e definir seus parametros.
para acessar o segundo é so chamar a variavel do primeiro . */
