/* Plot twist sobre obj
os obj não armazenam dados eles apenas apontam para onde está a informação

*/


const escola ={
    nome:'joqiuam'
}

const reviewEscola = escola
// Ao dizer que review é igual a escola eu não estou atribuindo nada a nada
// apenas estou apontando informações
reviewEscola.nome = 'Joaquim'
// portanto se eu mudar  uma prop de qualquer um deles ambos apontarão para a nova prop.

console.log(reviewEscola)
console.log(escola)