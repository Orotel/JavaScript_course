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
const operations = [add,subtract,multiply,divide] 

const thing = {
    doSomething :multiply
}
console.log(thing.doSomething(10,10))// consigo acessar a função dentro do ob