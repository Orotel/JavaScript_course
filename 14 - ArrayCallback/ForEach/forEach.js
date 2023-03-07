// posso iterar sobre esse array usando o foreach, porem o foreach não é um método tradicional que eu coloco qualquer valor como parâmetro, ele só aceita uma função como parametro.

let arr = [30,50,90,10]

// caso eu nao utilize a função mais vezes eu só crio uma função anonima.
arr.forEach(function(num){
    console.log(num)   
})

// caso eu queira usar uma função predefinida eu
function multiplicadorArr (num){
    console.log(num*7)
}
arr.forEach(multiplicadorArr)