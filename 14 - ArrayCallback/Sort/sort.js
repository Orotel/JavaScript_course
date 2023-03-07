// sort organiza nosso array em ordem.

const prices = [400.50, 3000, 99.99, 35.99, 12.01, 9500]


// sendo sort(callback) um método , ele muda o array original, portanto precisamos ou criar 2 constantes para o mesmo array ou usar o metodo slice()   para copiar o array original e depois ordenar ele.

const ascSort  = prices.slice().sort((a, b) => a - b);
const descSort = prices.slice().sort((a, b) => b - a);

console.log(ascSort)
console.log(descSort)