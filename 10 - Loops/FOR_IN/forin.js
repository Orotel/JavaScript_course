const meusGastos = {
    janeiro :1000,
    fevereiro : 2000,
    março :500
}
let sum = 0
for(let key in meusGastos ){
    console.log(key)
    sum += (meusGastos[key])
}
console.log(sum)