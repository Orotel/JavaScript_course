// o SPREAD serve para espalhar algo 
// numa função ele separa cada elemento de um array 

const numbers = [9, 4, 8, 6, 3]

// se eu usar o math.max(9,4,8,6,3) vai me mostrar o maior número
// porém se eu o usar no array, não vai dar certo 
// então como eu colocaria o numbers sem ser um array ?
const separando = Math.max(...numbers)

// o Spread distribui o meu array para valores unitarios

console.log(separando)

