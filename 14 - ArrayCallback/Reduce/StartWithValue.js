/*  no reduce podemos acumular um valor , podemos começar com um valor

                arr.reduce(callback,(OUTRA COISA) )  
        
nesse OUTRA COISA posso colocar um valor inicial, e já começar com pontos adicionais */


const numb = [ 232,32,23,435,53,2,5235]
const addPoints = numb.reduce((total,curVal) =>{
    return total + curVal
},5000)
// digamos que o jogador já tenha 5000 points (callback + 5000) 

console.log(addPoints)