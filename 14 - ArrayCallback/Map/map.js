// aqui eu pego um array e crio um novo na var texts

const texts = ['rofl','lol','omg','ttyl']

const caps = texts.map (function ( element ) 
{
    return element.toUpperCase()
})
// a variavel texts tem o array modificado
console.log(caps)