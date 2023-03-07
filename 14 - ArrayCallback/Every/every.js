const words = ['dog','dig','log','bag','aag']

// um script que testa todos os elementos do array e devolve True ou False para alguma condição, ele atua como se fosse o &&
const all3lets = words.every(word => word.length === 3)
// está pedindo se todos os elementos de Words tem 3 letras,
// se eu mudar algum deles já retornará false.
console.log(all3lets)

//===================================================================//



// Teste para ver se todos os elementos terminam com a letra g

const endGletter = words.every(w => {
    let gletter = w.length -1
    return w[gletter] === 'g'
}
)
console.log(endGletter) 
