function add(x,y){
    return x+y
}
const subtract = function (x,y){
    return x-y
}
function multiply  (x,y){
    return x*y
}
const divide = function(x,y){
    return x/y
}
// como sabemos funções são como objetos assim como lanchas são como carros.
const operations = [add,subtract,multiply,divide] 
// por isso podemos colocar dentro de um array 

console.log(operations[1])        // isso só indica o que é
console.log(operations[1](100,4)) // isso indica e chama

for(let func of operations){
    let result = func(30,5)
    console.log(result)
}
console.dir(subtract)
