// aqui usamos o spread para separar elementos de um array para cada um deles virar parâmetros de uma função

function giveMeFour(a, b, c, d) {
    console.log('a', a)
    console.log('b', b)
    console.log('c', c)
    console.log('d', d)
}

const colors4 = (cor1='red', cor2='purple', cor3='blue', cor4='black') => (
    [cor1,cor2,cor3,cor4]
)

// giveMeFour(colors4)| é possivel ver que o array ficou somente no primeiro parâmetro , como poderiamos espalhar?
giveMeFour(...colors4())
