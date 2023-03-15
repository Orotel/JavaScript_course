// add functions as properties on object
// criando meus primeiros methods 

const sub = (x,y) => x-y

const math = {
    multiply: ((x, y)   => x * y),
    divide  : ((x, y)   => x / y),
    square  : ((x, y)   => x * x),
    sub
}

console.log(math.multiply(10, 5))
console.log(math.divide  (10, 5))
console.log(math.square  (10, 5))
console.log(math.sub     (10, 5))