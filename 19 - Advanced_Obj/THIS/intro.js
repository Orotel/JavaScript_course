// no console, ao executar as funções com this dentro
// veremos que ele referencia a algo global
function sayHi (){
    console.log(this)
}

const greet = function(){
    console.log(this) 
}    

// agora se colocamos em um objeto ele vira gente
const myObj = {
    farinha:'pó',
    fazerFarinha(){
        return `${this.farinha} e eu gosto de pó`
    }
}
console.log(myObj.fazerFarinha())

// this referencia sempre o ultimo escopo onde ele está, no caso ele esta referenciando ao obj que ele está. Portando THIS funciona bem em metodos de objetos.